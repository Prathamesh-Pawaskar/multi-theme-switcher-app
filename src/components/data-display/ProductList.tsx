import { useEffect, useState } from 'react';
import { Product, fetchProducts } from '../../api/api';
import ProductCard from './ProductCard';
import { useTheme } from '../../context/ThemeContext';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', fontSize: '1.25rem', fontWeight: 'bold', padding: '2rem', color: 'var(--text-color)' }}>Loading products...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', fontSize: '1.25rem', fontWeight: 'bold', padding: '2rem', color: 'var(--text-color)' }}>{error}</div>;
  }

  return (
    <div style={{
      marginTop: '2rem',
      display: 'grid',
      gridTemplateColumns: `repeat(var(--layout-grid-columns), 1fr)`,
      gap: 'var(--layout-gap)',
    }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
