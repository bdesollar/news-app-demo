import { motion } from 'framer-motion';
import ArticleCard from '../components/ArticleCard.jsx';

const HomePage = () => {
  const articles = [
    // Column 1 - Left cards (2)
    {
      category: 'NEWS',
      title: 'Lost cat found the way back to her home',
      author: 'TOM JERRY',
      date: '13 June 2023',
    },
    {
      category: 'NEWS',
      title: 'Lost cat found the way back to her home',
      author: 'TOM JERRY',
      date: '13 June 2023',
    },
    // Column 2 - Middle large card (1)
    {
      category: 'CULTURE',
      title: 'Lost cat found the way back to her home',
      author: 'TOM JERRY',
      date: '13 June 2023',
      summary:
        "Summer is the perfect time to indulge in some leisurely reading, whether it's lying on the beach or lounging in the park. So if you're looking for a way to unwind this summer, why not pick up a few books and escape into some captivating stories?",
      isLarge: true,
    },
    // Column 3 - Right cards (2)
    {
      category: 'SPORTS',
      title: 'Lost cat found the way back to her home',
      author: 'FRED BALLER',
      date: '14 June 2023',
    },
    {
      category: 'NEWS',
      title: 'Lost cat found the way back to her home',
      author: 'TOM JERRY',
      date: '13 June 2023',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='max-w-7xl mx-auto px-4 sm:px-0'
    >
      {/* Responsive layout: single column on mobile, 3 columns on desktop */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {/* Mobile: All cards stack vertically */}
        {/* Desktop: Column 1 - 2 cards stacked */}
        <div className='space-y-5'>
          <ArticleCard {...articles[0]} />
          <ArticleCard {...articles[1]} />
        </div>

        {/* Desktop: Column 2 - 1 large card */}
        <div className='md:order-none order-first'>
          <ArticleCard {...articles[2]} />
        </div>

        {/* Desktop: Column 3 - 2 cards stacked */}
        <div className='space-y-5'>
          <ArticleCard {...articles[3]} />
          <ArticleCard {...articles[4]} />
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
