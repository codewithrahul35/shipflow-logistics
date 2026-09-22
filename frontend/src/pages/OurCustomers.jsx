
function OurCustomers() {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="bg-blue-600 text-white px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">

          <p className="text-blue-200 font-semibold mb-4">
            OUR CUSTOMERS
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Businesses
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-blue-100">
            ShipFlow helps businesses manage shipments, improve visibility,
            and deliver a better logistics experience.
          </p>

        </div>
      </section>


      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-12">

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Built for Modern Logistics
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600">
            From growing businesses to established organizations, ShipFlow
            provides tools that make shipment management simple and efficient.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-lg transition">

            <div className="w-16 h-16 mx-auto mb-5 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
              🏢
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Growing Businesses
            </h3>

            <p className="text-gray-600">
              Manage increasing shipment volumes with organized and
              reliable logistics operations.
            </p>

          </div>


          <div className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-lg transition">

            <div className="w-16 h-16 mx-auto mb-5 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
              🚚
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Logistics Teams
            </h3>

            <p className="text-gray-600">
              Keep shipment information, tracking updates, and delivery
              operations in one place.
            </p>

          </div>


          <div className="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-lg transition">

            <div className="w-16 h-16 mx-auto mb-5 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
              📦
            </div>

            <h3 className="text-xl font-semibold mb-3">
              E-commerce Businesses
            </h3>

            <p className="text-gray-600">
              Track orders and shipments while providing customers with
              better delivery visibility.
            </p>

          </div>

        </div>

      </section>


      <section className="bg-white px-6 py-16">

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>

              <p className="text-blue-600 font-semibold mb-3">
                CUSTOMER EXPERIENCE
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Making Every Shipment Easier to Manage
              </h2>

              <p className="text-gray-600 leading-7 mb-5">
                ShipFlow brings shipment management, tracking, and
                delivery information together in one platform.
              </p>

              <p className="text-gray-600 leading-7">
                Our goal is to help businesses reduce complexity,
                improve visibility, and keep their logistics operations
                organized.
              </p>

            </div>


            <div className="bg-blue-50 rounded-2xl p-8">

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <h3 className="text-3xl font-bold text-blue-600">
                    10K+
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Shipments
                  </p>
                </div>


                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <h3 className="text-3xl font-bold text-blue-600">
                    99%
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Visibility
                  </p>
                </div>


                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <h3 className="text-3xl font-bold text-blue-600">
                    24/7
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Tracking
                  </p>
                </div>


                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <h3 className="text-3xl font-bold text-blue-600">
                    100%
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Focus
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="bg-blue-600 text-white px-6 py-16 text-center">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-bold mb-4">
            Ready to Simplify Your Shipments?
          </h2>

          <p className="text-blue-100 mb-8">
            Start managing your logistics operations with ShipFlow.
          </p>

          <a
            href="/register"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </a>

        </div>

      </section>

    </div>
  );
}

export default OurCustomers;

