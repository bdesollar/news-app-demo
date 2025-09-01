// Header with exact wireframe search bar: gray bg, no border, placeholder "Search"
const Header = () => {
  return (
    <header className="bg-gray-200 px-8 py-5 flex justify-between items-center"> {/* Gray header with better padding */}
      <input
        type="text"
        placeholder="Search"
        className="bg-white text-gray-700 placeholder-gray-400 px-4 py-2 rounded-full w-48 text-sm border border-gray-300 focus:outline-none focus:border-gray-400" // Clean search input
      />
      <h1 className="text-3xl font-bold text-gray-800">Logo</h1> {/* Bold logo */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-900 text-sm">Sign in</button>
        <button className="bg-gray-800 text-white px-5 py-2 rounded text-sm font-medium hover:bg-gray-900">Subscribe</button> {/* Dark button like wireframe */}
      </div>
    </header>
  );
};

export default Header;