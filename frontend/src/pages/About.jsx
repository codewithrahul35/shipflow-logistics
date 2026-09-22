
function About() {
  return (
    <div className="min-h-screen bg-gray-100">

      <section className="bg-blue-600 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            About ShipFlow
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            ShipFlow is a modern shipment management platform designed
            to make logistics simple, transparent, and reliable.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              Making Logistics Simple
            </h2>

            <p className="text-gray-600 leading-7 mb-4">
              ShipFlow helps businesses manage their shipments from
              booking to delivery through one simple platform.
            </p>

            <p className="text-gray-600 leading-7">
              Users can create shipments, track delivery status,
              manage shipment information, and keep important
              logistics data organized in one place.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">

            <div className="grid grid-cols-2 gap-6">

              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">
                  24/7
                </h3>
                <p className="text-gray-500 mt-2">
                  Shipment Tracking
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">
                  100%
                </h3>
                <p className="text-gray-500 mt-2">
                  Digital Management
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">
                  Easy
                </h3>
                <p className="text-gray-500 mt-2">
                  To Use
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">
                  Secure
                </h3>
                <p className="text-gray-500 mt-2">
                  Data Management
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-white py-16 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Why Choose ShipFlow?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Easy Shipment Management
              </h3>

              <p className="text-gray-600">
                Create and manage shipment records through a simple
                and user-friendly interface.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Real-Time Tracking
              </h3>

              <p className="text-gray-600">
                Track shipment status and important delivery
                information from one place.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Reliable Platform
              </h3>

              <p className="text-gray-600">
                Keep your logistics information organized and
                accessible whenever you need it.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;

