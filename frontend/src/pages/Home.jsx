
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-white text-gray-900">

      {/* Hero Section */}
      <section className="relative min-h-162.5 md:min-h-180 flex items-center overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/videos/logistics-hero.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl text-white">

            <p className="text-blue-300 font-semibold tracking-widest text-sm mb-5">
              SMART LOGISTICS MANAGEMENT PLATFORM
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Simplify Your
              <span className="text-blue-400"> Logistics.</span>
              <br />
              Deliver with Confidence.
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mb-8">
              Manage shipments, track deliveries, and organize your logistics
              operations through one powerful and reliable platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <Link
                to="/trackshipment"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-lg font-semibold text-center transition"
              >
                Track Shipment
              </Link>

              <Link
                to="/register"
                className="bg-white hover:bg-gray-100 text-gray-900 px-7 py-3.5 rounded-lg font-semibold text-center transition"
              >
                Get Started
              </Link>

            </div>

          </div>
        </div>
      </section>


      {/* Introduction Section */}
      <section className="px-6 py-20 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-blue-600 font-semibold mb-3">
              ONE PLATFORM. COMPLETE VISIBILITY.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Everything You Need to Manage Your Shipments
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              ShipFlow helps businesses manage shipments from booking to
              delivery with a simple and centralized logistics platform.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Create shipments, monitor delivery progress, manage shipment
              information, and track every important event from one place.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">

            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="font-bold text-lg mb-2">
                Shipment Management
              </h3>
              <p className="text-gray-600 text-sm">
                Create and manage shipment records efficiently.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-bold text-lg mb-2">
                Shipment Tracking
              </h3>
              <p className="text-gray-600 text-sm">
                Follow shipment progress through tracking events.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="font-bold text-lg mb-2">
                Operations Visibility
              </h3>
              <p className="text-gray-600 text-sm">
                Keep important shipment information organized.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-bold text-lg mb-2">
                Faster Operations
              </h3>
              <p className="text-gray-600 text-sm">
                Simplify daily logistics management.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Solutions Section */}
      <section className="bg-gray-50 px-6 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-blue-600 font-semibold mb-3">
              OUR SOLUTIONS
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Built for Modern Logistics Operations
            </h2>

            <p className="text-gray-600">
              ShipFlow brings essential shipment management capabilities
              together in one easy-to-use platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-6">
                📦
              </div>

              <h3 className="text-xl font-bold mb-4">
                Shipment Management
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Create, view, update, and manage shipment information from
                a centralized dashboard.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-6">
                🚚
              </div>

              <h3 className="text-xl font-bold mb-4">
                Delivery Tracking
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Track shipment progress through important delivery and
                transportation events.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-2xl mb-6">
                📊
              </div>

              <h3 className="text-xl font-bold mb-4">
                Operations Dashboard
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Get a clear overview of shipment activity and operational
                information.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* How It Works */}
      <section className="px-6 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-blue-600 font-semibold mb-3">
              HOW SHIPFLOW WORKS
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              From Shipment Creation to Delivery
            </h2>

            <p className="text-gray-600">
              Manage the complete shipment journey through a simple workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-5">
                01
              </div>

              <h3 className="font-bold text-lg mb-3">
                Create Shipment
              </h3>

              <p className="text-gray-600 text-sm">
                Enter shipment, sender, receiver, and delivery information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-5">
                02
              </div>

              <h3 className="font-bold text-lg mb-3">
                Process Shipment
              </h3>

              <p className="text-gray-600 text-sm">
                Manage the shipment through your logistics workflow.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-5">
                03
              </div>

              <h3 className="font-bold text-lg mb-3">
                Track Progress
              </h3>

              <p className="text-gray-600 text-sm">
                Monitor important tracking events throughout the journey.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-5">
                04
              </div>

              <h3 className="font-bold text-lg mb-3">
                Complete Delivery
              </h3>

              <p className="text-gray-600 text-sm">
                Track the shipment until its final delivery status.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Industries */}
      <section className="bg-gray-900 text-white px-6 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">

          <div className="max-w-2xl mb-14">
            <p className="text-blue-400 font-semibold mb-3">
              INDUSTRIES
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Designed for Different Business Needs
            </h2>

            <p className="text-gray-400 leading-relaxed">
              ShipFlow can support shipment management requirements across
              different types of businesses and logistics operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            <div className="border border-gray-700 rounded-2xl p-7 hover:bg-gray-800 transition">
              <div className="text-3xl mb-5">🛒</div>
              <h3 className="font-bold text-lg mb-3">
                E-commerce
              </h3>
              <p className="text-gray-400 text-sm">
                Manage shipments and deliveries for online orders.
              </p>
            </div>

            <div className="border border-gray-700 rounded-2xl p-7 hover:bg-gray-800 transition">
              <div className="text-3xl mb-5">🏭</div>
              <h3 className="font-bold text-lg mb-3">
                Manufacturing
              </h3>
              <p className="text-gray-400 text-sm">
                Organize logistics movements and shipment information.
              </p>
            </div>

            <div className="border border-gray-700 rounded-2xl p-7 hover:bg-gray-800 transition">
              <div className="text-3xl mb-5">🚛</div>
              <h3 className="font-bold text-lg mb-3">
                Logistics
              </h3>
              <p className="text-gray-400 text-sm">
                Manage transportation and delivery operations.
              </p>
            </div>

            <div className="border border-gray-700 rounded-2xl p-7 hover:bg-gray-800 transition">
              <div className="text-3xl mb-5">🏢</div>
              <h3 className="font-bold text-lg mb-3">
                Growing Businesses
              </h3>
              <p className="text-gray-400 text-sm">
                Build a structured approach to shipment management.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Why ShipFlow */}
      <section className="px-6 py-20 md:py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <p className="text-blue-600 font-semibold mb-3">
              WHY SHIPFLOW
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Make Logistics Simpler, Clearer and More Organized
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              ShipFlow is designed to reduce complexity in everyday shipment
              operations and provide teams with a centralized way to manage
              logistics information.
            </p>

            <Link
              to="/about"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Learn More
            </Link>
          </div>

          <div className="space-y-5">

            <div className="flex gap-5 p-6 bg-gray-50 rounded-2xl">
              <div className="text-2xl">✓</div>

              <div>
                <h3 className="font-bold text-lg mb-2">
                  Centralized Information
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Keep shipment information organized in one platform.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-gray-50 rounded-2xl">
              <div className="text-2xl">✓</div>

              <div>
                <h3 className="font-bold text-lg mb-2">
                  Simple Tracking
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Access shipment progress through tracking information.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-gray-50 rounded-2xl">
              <div className="text-2xl">✓</div>

              <div>
                <h3 className="font-bold text-lg mb-2">
                  Responsive Experience
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Use ShipFlow across desktop, tablet, and mobile screens.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="bg-blue-600 text-white px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Simplify Your Logistics?
          </h2>

          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Start managing your shipments with a centralized and easy-to-use
            logistics platform.
          </p>

          <Link
            to="/register"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-3.5 rounded-lg font-bold transition"
          >
            Get Started with ShipFlow
          </Link>

        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 px-6 py-12">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-4 gap-10 mb-10">

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                ShipFlow
              </h3>

              <p className="text-sm leading-relaxed">
                A modern shipment management platform designed to simplify
                logistics operations.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">
                Platform
              </h4>

              <div className="space-y-3 text-sm">
                <Link to="/shipments" className="block hover:text-white">
                  Shipments
                </Link>

                <Link to="/createshipment" className="block hover:text-white">
                  Create Shipment
                </Link>

                <Link to="/trackshipment" className="block hover:text-white">
                  Track Shipment
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">
                Company
              </h4>

              <div className="space-y-3 text-sm">
                <Link to="/about" className="block hover:text-white">
                  About Us
                </Link>

                <Link to="/customers" className="block hover:text-white">
                  Our Customers
                </Link>

                <Link to="/careers" className="block hover:text-white">
                  Careers
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">
                Connect
              </h4>

              <div className="space-y-3 text-sm">
                <Link to="/partner" className="block hover:text-white">
                  Partner with Us
                </Link>

                <Link to="/life-at-shipflow" className="block hover:text-white">
                  Life at ShipFlow
                </Link>

                <Link to="/contact" className="block hover:text-white">
                  Contact Us
                </Link>
              </div>
            </div>

          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-sm">
            © {new Date().getFullYear()} ShipFlow. All rights reserved.
          </div>

        </div>

      </footer>

    </div>
  );
}

export default Home;
