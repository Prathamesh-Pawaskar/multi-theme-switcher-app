import { Product } from '../../api/api';
import { useTheme } from '../../context/ThemeContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { theme } = useTheme();

  return (
    <div style={{
      padding: 'var(--spacing-padding)',
      borderRadius: 'var(--card-radius)',
      backgroundColor: 'var(--card-background-color)',
      fontFamily: theme.font,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      transform: 'scale(1)',
      transition: 'transform 0.3s ease',
    }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: '100%', height: '12rem', objectFit: 'contain', marginBottom: '1rem', borderRadius: 'var(--card-radius)' }}
      />
      <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-color)' }}>
        {product.title}
      </h3>
      <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--secondary-color)' }}>
        {product.category}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
          ${product.price.toFixed(2)}
        </span>
        <button style={{ 
          padding: '0.5rem 1rem',
          fontWeight: 600,
          backgroundColor: 'var(--primary-color)', 
          color: 'var(--button-text-color)',
          borderRadius: 'var(--card-radius)',
        }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
