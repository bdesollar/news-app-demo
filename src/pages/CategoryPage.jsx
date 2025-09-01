import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArticleCard from '../components/ArticleCard.jsx';

const CategoryPage = () => {
  const { catName } = useParams();
  const categoryTitle = catName.charAt(0).toUpperCase() + catName.slice(1); // Dynamic title e.g., "Latest"

  const description = `Welcome to the ${categoryTitle} section of our news, where we explore the latest trends and topics in art, music, film, literature, and more. From groundbreaking exhibitions and performances to up-and-coming artists and cultural events, we aim to provide you with a diverse range of stories that showcase the richness and diversity of our world's creative landscape.`; // Exact text, adaptable

  const subCategories = [
    'DRINKS',
    'FOOD',
    'LOST',
    'DRINKS',
    'FOOD',
    'LOST',
    'DRINKS',
    'FOOD',
  ]; // Uppercase for wireframe

  const articles = Array(8)
    .fill(null)
    .map((_, index) => ({
      title: 'Lost cat found the way back to her home',
      author: 'TOM JERRY',
      date: '13 June 2023',
      subCategory: subCategories[index], // Add sub-cat label
    }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='space-y-6 max-w-6xl mx-auto' // Wide for 4-col
    >
      <h1 className='text-4xl font-bold text-gray-800'>{categoryTitle}</h1>{' '}
      {/* Dynamic uppercase title */}
      <p className='text-gray-700 text-lg'>{description}</p>{' '}
      {/* Exact description */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        {' '}
        {/* 4-col grid */}
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
      <button className='bg-black text-white px-6 py-3 rounded text-sm font-medium block mx-auto hover:bg-gray-800'>
        Load more
      </button>{' '}
      {/* Black centered button */}
    </motion.div>
  );
};

export default CategoryPage;
