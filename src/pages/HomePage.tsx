import { useTheme } from '../context/ThemeContext';
import ProductList from '../components/data-display/ProductList';
import ProductChart from '../components/data-display/ProductChart';

const HomePage = () => {
  const { theme } = useTheme();

  return (
    <div style={{ paddingTop: '5rem' }}>
      <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--primary-color)' }}>
        Welcome to the Store!
      </h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--secondary-color)' }}>
        Discover our latest collection of amazing products.
      </p>
      {/* <button style={{
        padding: '0.75rem 1.5rem',
        marginBottom: '3rem',
        fontWeight: '600',
        transition: 'color 0.3s ease, background-color 0.3s ease',
        backgroundColor: 'var(--primary-color)',
        color: 'var(--button-text-color)',
        borderRadius: 'var(--card-radius)',
      }}>
        Explore Products
      </button> */}
      <ProductChart />
      <ProductList />
    </div>
  );
};

export default HomePage;
