import { useNavigate } from 'react-router-dom';

// Header with exact wireframe search bar: gray bg, no border, placeholder "Search"
const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className='bg-gray-200 px-4 sm:px-8 py-3 sm:py-5 flex justify-between items-center'>
      {/* Mobile-responsive header */}
      <input
        type='text'
        placeholder='Search'
        className='bg-white text-gray-700 placeholder-gray-400 px-3 sm:px-4 py-2 rounded-full w-32 sm:w-48 text-xs sm:text-sm border border-gray-300 focus:outline-none focus:border-gray-400'
      />
      <h1
        className='text-xl sm:text-3xl font-bold text-gray-800 cursor-pointer hover:text-gray-600 transition-colors duration-200'
        onClick={handleLogoClick}
      >
        Logo
      </h1>
      <div className='flex items-center space-x-2 sm:space-x-4'>
        <button className='text-gray-600 hover:text-gray-900 text-xs sm:text-sm'>
          Sign in
        </button>
        <button className='bg-gray-800 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-medium hover:bg-gray-900'>
          Subscribe
        </button>
      </div>
    </header>
  );
};

export default Header;
