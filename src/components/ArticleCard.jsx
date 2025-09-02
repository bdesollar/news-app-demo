import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Correct import

const ArticleCard = ({
  category,
  title,
  author,
  date,
  summary,
  isLarge = false,
  subCategory,
}) => {
  const handleClick = () => {
    if (window.pendo) {
      window.pendo.track('Article Clicked', { title, category });
    }
  };

  return (
    <motion.div
      className="p-6 rounded-lg border border-transparent hover:border-gray-300 hover:shadow-sm transition-all duration-200 cursor-pointer"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {/* Sub-category label (used on category page) */}
      {subCategory && (
        <span className='text-[10px] tracking-wide uppercase text-gray-500 font-bold block mb-2'>
          {subCategory}
        </span>
      )}

      {/* Large variant with image and text */}
      {isLarge ? (
        <div>
          <div className='bg-gray-300 h-48 w-full rounded mb-4' />
          <div className='text-center'>
            {category && (
              <span className='block text-[11px] tracking-[0.1em] uppercase text-gray-500 mb-3'>
                {category}
              </span>
            )}
            <Link to='/article' onClick={handleClick} className='block mb-3'>
              <h3 className='font-bold text-lg text-gray-900 hover:text-pendoPink leading-tight'>
                {title}
              </h3>
            </Link>
            {summary && (
              <p className='text-sm text-gray-600 mb-4 leading-relaxed'>
                {summary}
              </p>
            )}
            <div className='text-xs text-gray-500 uppercase tracking-wider'>
              <span>{author}</span>
              <span className='mx-3'>•</span>
              <span>{date}</span>
            </div>
          </div>
        </div>
      ) : (
        // Small card variant with image placeholder and proper spacing
        <div>
          {category && (
            <span className='block text-[11px] tracking-[0.1em] uppercase text-gray-500 mb-3'>
              {category}
            </span>
          )}
          <div className='bg-gray-300 h-40 w-full rounded mb-4' />
          <Link to='/article' onClick={handleClick} className='block mb-3'>
            <h3 className='font-bold text-base text-gray-900 hover:text-pendoPink leading-tight'>
              {title}
            </h3>
          </Link>
          <div className='text-xs text-gray-500 uppercase tracking-wider'>
            <span>{author}</span>
            <span className='float-right'>{date}</span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ArticleCard;
