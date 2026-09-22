
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [shipmentOpen, setShipmentOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };

  const closeMenus = () => {
    setMenuOpen(false);
    setShipmentOpen(false);
    setAboutOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-20 flex items-center justify-between">

          <Link
            to="/"
            onClick={closeMenus}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
              <span className="text-white text-xl">🚚</span>
            </div>

            <div className="leading-none">
              <span className="block text-2xl font-extrabold tracking-tight text-gray-900">
                Ship<span className="text-blue-600">Flow</span>
              </span>

              <span className="hidden sm:block text-[10px] font-medium tracking-[0.2em] text-gray-400 uppercase mt-1">
                Logistics Platform
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">

            <Link
              to="/"
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              Home
            </Link>

            <Link
              to="/services"
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              Services
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setShipmentOpen(true)}
              onMouseLeave={() => setShipmentOpen(false)}
            >
              <button
                onClick={() => setShipmentOpen(!shipmentOpen)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  shipmentOpen
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                Shipments

                <span
                  className={`text-[10px] transition-transform duration-200 ${
                    shipmentOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {shipmentOpen && (
                <div className="absolute left-0 top-full pt-3 w-56 z-50">
                  <div className="bg-white border border-gray-100 rounded-xl shadow-xl shadow-gray-200/50 overflow-hidden p-2">

                    <Link
                      to="/shipments"
                      onClick={closeMenus}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      <span className="text-lg">📦</span>

                      <div>
                        <p className="font-semibold">
                          All Shipments
                        </p>

                        <p className="text-xs text-gray-400">
                          Manage shipments
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/createshipment"
                      onClick={closeMenus}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      <span className="text-lg">➕</span>

                      <div>
                        <p className="font-semibold">
                          Create Shipment
                        </p>

                        <p className="text-xs text-gray-400">
                          Create a new shipment
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/trackshipment"
                      onClick={closeMenus}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      <span className="text-lg">📍</span>

                      <div>
                        <p className="font-semibold">
                          Track Shipment
                        </p>

                        <p className="text-xs text-gray-400">
                          Track delivery status
                        </p>
                      </div>
                    </Link>

                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  aboutOpen
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                About Us

                <span
                  className={`text-[10px] transition-transform duration-200 ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {aboutOpen && (
                <div className="absolute left-0 top-full pt-3 w-60 z-50">
                  <div className="bg-white border border-gray-100 rounded-xl shadow-xl shadow-gray-200/50 overflow-hidden p-2">

                    <Link
                      to="/about"
                      onClick={closeMenus}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      <span>🏢</span>

                      <div>
                        <p className="font-semibold">
                          About Us
                        </p>

                        <p className="text-xs text-gray-400">
                          Learn about ShipFlow
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/customers"
                      onClick={closeMenus}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      <span>🤝</span>

                      <div>
                        <p className="font-semibold">
                          Our Customers
                        </p>

                        <p className="text-xs text-gray-400">
                          Businesses we serve
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/partner"
                      onClick={closeMenus}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      <span>🔗</span>

                      <div>
                        <p className="font-semibold">
                          Partner with Us
                        </p>

                        <p className="text-xs text-gray-400">
                          Grow together
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/careers"
                      onClick={closeMenus}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      <span>💼</span>

                      <div>
                        <p className="font-semibold">
                          Careers
                        </p>

                        <p className="text-xs text-gray-400">
                          Join our team
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/life-at-shipflow"
                      onClick={closeMenus}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      <span>🌟</span>

                      <div>
                        <p className="font-semibold">
                          Life at ShipFlow
                        </p>

                        <p className="text-xs text-gray-400">
                          Our culture
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/contact"
                      onClick={closeMenus}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      <span>📞</span>

                      <div>
                        <p className="font-semibold">
                          Contact Us
                        </p>

                        <p className="text-xs text-gray-400">
                          Get in touch
                        </p>
                      </div>
                    </Link>

                  </div>
                </div>
              )}
            </div>

          </div>

          <div className="hidden lg:flex items-center gap-3">

            {!token ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-600 transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="px-5 py-2.5 rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-5 py-2.5 rounded-lg bg-red-500 text-white text-sm font-semibold hover:bg-red-600 hover:shadow-md transition-all duration-200"
              >
                Logout
              </button>
            )}

          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 flex items-center justify-center text-xl transition"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">

            <div className="flex flex-col gap-1">

              <Link
                to="/"
                onClick={closeMenus}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Home
              </Link>

              <Link
                to="/services"
                onClick={closeMenus}
                className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Services
              </Link>

              <button
                onClick={() => {
                  setShipmentOpen(!shipmentOpen);
                  setAboutOpen(false);
                }}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition"
              >
                <span>
                  Shipments
                </span>

                <span className="text-xs">
                  {shipmentOpen ? "▲" : "▼"}
                </span>
              </button>

              {shipmentOpen && (
                <div className="ml-3 pl-3 border-l-2 border-blue-100">

                  <Link
                    to="/shipments"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600"
                  >
                    📦 All Shipments
                  </Link>

                  <Link
                    to="/createshipment"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600"
                  >
                    ➕ Create Shipment
                  </Link>

                  <Link
                    to="/trackshipment"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600"
                  >
                    📍 Track Shipment
                  </Link>

                </div>
              )}

              <button
                onClick={() => {
                  setAboutOpen(!aboutOpen);
                  setShipmentOpen(false);
                }}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition"
              >
                <span>
                  About Us
                </span>

                <span className="text-xs">
                  {aboutOpen ? "▲" : "▼"}
                </span>
              </button>

              {aboutOpen && (
                <div className="ml-3 pl-3 border-l-2 border-blue-100">

                  <Link
                    to="/about"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600"
                  >
                    🏢 About Us
                  </Link>

                  <Link
                    to="/customers"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600"
                  >
                    🤝 Our Customers
                  </Link>

                  <Link
                    to="/partner"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600"
                  >
                    🔗 Partner with Us
                  </Link>

                  <Link
                    to="/careers"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600"
                  >
                    💼 Careers
                  </Link>

                  <Link
                    to="/life-at-shipflow"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600"
                  >
                    🌟 Life at ShipFlow
                  </Link>

                  <Link
                    to="/contact"
                    onClick={closeMenus}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600"
                  >
                    📞 Contact Us
                  </Link>

                </div>
              )}

              <div className="border-t border-gray-100 mt-3 pt-4">

                {!token ? (
                  <div className="flex flex-col gap-2">

                    <Link
                      to="/login"
                      onClick={closeMenus}
                      className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      Login
                    </Link>

                    <Link
                      to="/register"
                      onClick={closeMenus}
                      className="px-4 py-3 rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 text-white text-center font-semibold shadow-md"
                    >
                      Register
                    </Link>

                  </div>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                  >
                    Logout
                  </button>
                )}

              </div>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
