
function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="bg-blue-600 text-white px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">

          <p className="text-blue-200 mb-4 font-semibold">
            SMART LOGISTICS SOLUTIONS
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Delivering Trust, Every Shipment
          </h1>

          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Manage, track, and deliver your shipments with ShipFlow.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Track Shipment
            </button>

            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Get Started
            </button>
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-center mb-4">
          Our Services
        </h2>

        <p className="text-gray-600 text-center mb-10">
          Everything you need to manage your logistics operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">

            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"
              alt="Shipment management"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                Shipment Management
              </h3>

              <p className="text-gray-600">
                Manage shipments efficiently from booking to final delivery.
              </p>
            </div>

          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">

            <img
              src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800"
              alt="Shipment tracking"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                Real-Time Tracking
              </h3>

              <p className="text-gray-600">
                Monitor shipment status and track delivery progress.
              </p>
            </div>

          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">

            <img
              src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800"
              alt="Delivery logistics"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                Reliable Delivery
              </h3>

              <p className="text-gray-600">
                Keep your delivery operations organized and transparent.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="bg-white py-16 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-4">
            Track Your Shipment
          </h2>

          <p className="text-gray-600 mb-8">
            Enter your tracking ID to check your shipment status.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">

            <input
              type="text"
              placeholder="Enter tracking ID"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Track Now
            </button>

          </div>

        </div>

      </section>

      <section className="bg-blue-50 py-16 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose ShipFlow?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                10K+
              </h3>

              <p className="text-gray-600">
                Shipments Managed
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                99%
              </h3>

              <p className="text-gray-600">
                Tracking Visibility
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                24/7
              </h3>

              <p className="text-gray-600">
                Operations Support
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="bg-blue-600 text-white py-16 px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Ready to Simplify Your Logistics?
        </h2>

        <p className="text-blue-100 mb-8">
          Start managing your shipments with ShipFlow today.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Get Started
        </button>

      </section>

      <footer className="bg-gray-900 text-gray-300 px-6 py-12">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              ShipFlow
            </h2>

            <p className="text-gray-400">
              Smart and reliable shipment management solutions for modern businesses.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Company
            </h3>

            <p className="mb-2 hover:text-white cursor-pointer">
              About Us
            </p>

            <p className="mb-2 hover:text-white cursor-pointer">
              Services
            </p>

            <p className="hover:text-white cursor-pointer">
              Contact Us
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <p className="mb-2 hover:text-white cursor-pointer">
              Track Shipment
            </p>

            <p className="mb-2 hover:text-white cursor-pointer">
              Login
            </p>

            <p className="hover:text-white cursor-pointer">
              Register
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>

            <p className="mb-2">
              Email: support@shipflow.com
            </p>

            <p>
              India
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          © 2026 ShipFlow. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default Home;