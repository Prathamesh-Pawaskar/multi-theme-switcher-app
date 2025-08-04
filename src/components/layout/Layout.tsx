import { ReactNode } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme();

  return (
    <div className="app-container">
      <div style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}>
        <Header />

        <main style={{ fontFamily: theme.font }} className={`
          main-content transition-colors duration-300
        `}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
