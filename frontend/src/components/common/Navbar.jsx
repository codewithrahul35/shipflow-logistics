
function Navbar() {
  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-blue-600">
          ShipFlow
        </h2>

        <div className="hidden md:flex items-center gap-6">
          <h2 className="text-gray-700 hover:text-blue-600 cursor-pointer">
            Home
          </h2>

          <h2 className="text-gray-700 hover:text-blue-600 cursor-pointer">
            Services
          </h2>

          <h2 className="text-gray-700 hover:text-blue-600 cursor-pointer">
            Track Shipments
          </h2>

          <h2 className="text-gray-700 hover:text-blue-600 cursor-pointer">
            About Us
          </h2>

          <h2 className="text-gray-700 hover:text-blue-600 cursor-pointer">
            Contact Us
          </h2>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <h2 className="text-gray-700 hover:text-blue-600 cursor-pointer">
            Login
          </h2>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Register
          </button>
        </div>

        <button className="md:hidden text-2xl">
          ☰
        </button>

      </div>
    </nav>
  );
}

export default Navbar;

