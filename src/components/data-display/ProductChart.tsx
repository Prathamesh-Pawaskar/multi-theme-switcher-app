import { useEffect, useState } from 'react';
import { Product, fetchProducts } from '../../api/api';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useTheme } from '../../context/ThemeContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProductChart = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);


  const categoryPrices = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + product.price;
    return acc;
  }, {} as Record<string, number>);

  const categoryCounts = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const labels = Object.keys(categoryPrices);
  const data = {
    labels,
    datasets: [
      {
        label: 'Average Price by Category',
        data: labels.map(label => categoryPrices[label] / categoryCounts[label]),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: theme.className === 'theme2' ? '#ffffff' : 'var(--text-color)', // Legend text color
          font: {
            family: theme.font,
          },
        },
      },
      title: {
        display: true,
        text: 'Average Product Price by Category',
        color: theme.className === 'theme2' ? '#ffffff' : 'var(--primary-color)', // Title text color
        font: {
          size: 20,
          family: theme.font,
        },
      },
      tooltip: {
        backgroundColor: 'var(--card-background-color)',
        titleColor: theme.className === 'theme2' ? '#ffffff' : 'var(--text-color)',
        bodyColor: theme.className === 'theme2' ? '#ffffff' : 'var(--text-color)',
        borderColor: 'var(--primary-color)',
        borderWidth: 1,
        bodyFont: {
          family: theme.font,
        },
        titleFont: {
          family: theme.font,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: theme.className === 'theme2' ? '#ffffff' : 'var(--text-color)', font: { family: theme.font } },
        grid: { color: theme.className === 'theme2' ? 'rgba(255, 255, 255, 0.2)' : 'var(--secondary-color)' }, // Grid color
      },
      y: {
        ticks: { color: theme.className === 'theme2' ? '#ffffff' : 'var(--text-color)', font: { family: theme.font } },
        grid: { color: theme.className === 'theme2' ? 'rgba(255, 255, 255, 0.2)' : 'var(--secondary-color)' }, // Grid color
      },
    },
  };

  return (
    <div style={{
      marginTop: '2rem',
      marginBottom: '2rem',
      padding: '1rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'var(--card-background-color)',
      borderRadius: 'var(--card-radius)',
      fontFamily: theme.font
    }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProductChart;
