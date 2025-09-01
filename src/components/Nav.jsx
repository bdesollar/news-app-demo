import { Link } from 'react-router-dom';

const Nav = () => {
  const categories = ['Latest', 'World', 'Sports', 'Culture', 'Economy'];

  const handleCategoryClick = cat => {
    if (window.pendo) {
      window.pendo.track('Category Clicked', { category: cat });
    }
  };

  return (
    <nav className='bg-white border-b border-gray-200 py-4'>
      <ul className='flex justify-center space-x-10'>
        {categories.map(cat => (
          <li key={cat}>
            <Link
              to={`/category/${cat.toLowerCase()}`}
              className='text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wide'
              onClick={() => handleCategoryClick(cat)}
            >
              {cat.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
