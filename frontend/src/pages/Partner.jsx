import { Link } from "react-router-dom";

function Partner() {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="bg-blue-600 text-white px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">

          <p className="text-blue-200 font-semibold mb-4">
            PARTNER WITH US
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Grow Together with ShipFlow
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-blue-100">
            Build stronger logistics solutions, expand your services,
            and create better experiences for businesses with ShipFlow.
          </p>

        </div>
      </section>


      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-12">

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Partner with ShipFlow?
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600">
            Our partner ecosystem is designed to create opportunities
            for businesses, logistics providers, technology companies,
            and service partners.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition">

            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-5">
              🤝
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Business Partnerships
            </h3>

            <p className="text-gray-600 leading-7">
              Work with ShipFlow to provide businesses with better
              shipment management and logistics solutions.
            </p>

          </div>


          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition">

            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-5">
              🚚
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Logistics Partners
            </h3>

            <p className="text-gray-600 leading-7">
              Connect logistics operations and improve shipment
              visibility through a centralized platform.
            </p>

          </div>


          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition">

            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-5">
              💻
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Technology Partners
            </h3>

            <p className="text-gray-600 leading-7">
              Build technology integrations that help businesses
              simplify and automate their logistics workflows.
            </p>

          </div>

        </div>

      </section>


      <section className="bg-white px-6 py-16">

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>

              <p className="text-blue-600 font-semibold mb-3">
                PARTNERSHIP OPPORTUNITY
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Let's Build Better Logistics Together
              </h2>

              <p className="text-gray-600 leading-7 mb-5">
                ShipFlow brings shipment management and tracking
                capabilities together to help businesses manage their
                logistics operations more efficiently.
              </p>

              <p className="text-gray-600 leading-7">
                Whether you provide logistics services, technology,
                transportation, or business solutions, there are
                opportunities to build meaningful partnerships.
              </p>

            </div>


            <div className="bg-blue-50 rounded-2xl p-8">

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Partnership Benefits
              </h3>

              <div className="space-y-5">

                <div className="flex gap-4">

                  <div className="text-blue-600 text-xl">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Expand Your Reach
                    </h4>

                    <p className="text-gray-600 text-sm mt-1">
                      Connect with businesses looking for modern
                      logistics solutions.
                    </p>
                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="text-blue-600 text-xl">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Build Better Solutions
                    </h4>

                    <p className="text-gray-600 text-sm mt-1">
                      Combine your expertise with ShipFlow's
                      shipment management platform.
                    </p>
                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="text-blue-600 text-xl">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Long-Term Collaboration
                    </h4>

                    <p className="text-gray-600 text-sm mt-1">
                      Create sustainable partnerships focused on
                      logistics innovation.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="bg-blue-600 text-white px-6 py-16 text-center">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-bold mb-4">
            Interested in Partnering with Us?
          </h2>

          <p className="text-blue-100 mb-8">
            Let's explore how we can create value together.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Partner;
