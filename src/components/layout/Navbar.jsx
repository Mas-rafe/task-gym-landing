const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full flex items-center justify-between  py-6 z-30">

      {/* Logo */}
      <div className="bg-green-500 p-3 rounded-full">
        ⚙️
      </div>

      {/* Menu */}
      <div className="hidden md:flex items-center  gap-8 border border-white px-6 py-6 w-2xl mr-70 rounded-full">
        <p>Home</p>
        <p>Our gym location</p>

        {/* Search */}
        <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm px-2"
          />
          🔍
        </div>
      </div>

      {/* Register Button */}
      <button className="bg-green-500 px-6 py-3 rounded-full font-semibold h-28 w-3xs">
        REGISTER
      </button>
    </nav>
  );
};

export default Navbar;