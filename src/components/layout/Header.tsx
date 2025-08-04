import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { themes, ThemeName } from '../../themes/themes';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Header = () => {
  const { theme, setThemeName } = useTheme();

  return (
    <header className="header">
      <nav className="header-nav">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <NavLink to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
            React Theme
          </NavLink>
        </div>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>
        </div>

        <Menu as="div" style={{ position: 'relative' }}>
          <div>
            <Menu.Button className="theme-button">
              Themes
              <ChevronDownIcon style={{ marginLeft: '0.5rem', height: '1.25rem', width: '1.25rem' }} aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="dropdown-menu">
              <div style={{ padding: '0.25rem 0' }}>
                {themes.map((t) => (
                  <Menu.Item key={t.name}>
                    {({ active }) => (
                      <button
                        onClick={() => setThemeName(t.name as ThemeName)}
                        className={`dropdown-item ${active ? 'bg-gray-100' : ''}`}
                      >
                        {t.name}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
