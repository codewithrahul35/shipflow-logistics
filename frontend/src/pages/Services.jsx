import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Shipment Management",
      description:
        "Create, manage, and monitor your shipments from a single platform with all important shipment information in one place.",
      icon: "📦"
    },
    {
      title: "Real-Time Tracking",
      description:
        "Track your shipment using a Tracking ID or Consignment ID and view the latest shipment status and tracking timeline.",
      icon: "📍"
    },
    {
      title: "Fast Delivery",
      description:
        "Manage shipment routes and delivery information efficiently to keep your logistics process organized.",
      icon: "🚚"
    },
    {
      title: "Secure Shipments",
      description:
        "Keep sender, receiver, payment, and shipment information organized with secure access through user authentication.",
      icon: "🔒"
    },
    {
      title: "Shipment Status",
      description:
        "Monitor shipment progress with statuses such as Pending, In Transit, and Delivered.",
      icon: "📊"
    },
    {
      title: "Delivery Information",
      description:
        "Access expected delivery dates, actual delivery dates, package details, and payment information.",
      icon: "🗓️"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      <section className="bg-blue-600 text-white px-4 py-16 md:py-20">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-blue-100 font-semibold mb-3">
            SHIPFLOW SERVICES
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-5">
            Logistics Solutions Made Simple
          </h1>

          <p className="max-w-2xl mx-auto text-blue-100 text-base md:text-lg">
            ShipFlow provides simple and efficient tools to create,
            manage, and track your shipments.
          </p>

        </div>

      </section>

      <section className="px-4 py-12 md:py-16">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-10">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Our Services
            </h2>

            <p className="text-gray-500 mt-2">
              Everything you need to manage your shipments efficiently.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service) => (

              <div
                key={service.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >

                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-5">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-500 leading-7">
                  {service.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="px-4 pb-16">

        <div className="max-w-7xl mx-auto">

          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

              <div>

                <p className="text-blue-600 font-semibold mb-3">
                  EASY TRACKING
                </p>

                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                  Know Where Your Shipment Is
                </h2>

                <p className="text-gray-500 leading-7 mb-6">
                  Enter your Tracking ID or Consignment ID to view your
                  shipment details, current status, delivery information,
                  and tracking timeline.
                </p>

                <button
                  onClick={() => navigate("/trackshipment")}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Track Shipment
                </button>

              </div>

              <div className="bg-blue-50 rounded-2xl p-8">

                <div className="space-y-6">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">
                      📦
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Shipment Created
                      </h3>
                      <p className="text-sm text-gray-500">
                        Your shipment is registered.
                      </p>
                    </div>

                  </div>

                  <div className="border-l-2 border-blue-200 ml-6 h-6"></div>

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">
                      🚚
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800">
                        In Transit
                      </h3>
                      <p className="text-sm text-gray-500">
                        Shipment is on its way.
                      </p>
                    </div>

                  </div>

                  <div className="border-l-2 border-blue-200 ml-6 h-6"></div>

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">
                      ✅
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Delivered
                      </h3>
                      <p className="text-sm text-gray-500">
                        Shipment reaches the destination.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-blue-600 px-4 py-12">

        <div className="max-w-4xl mx-auto text-center text-white">

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Manage Your Shipments?
          </h2>

          <p className="text-blue-100 mb-6">
            Create a shipment and manage your logistics from ShipFlow.
          </p>

          <button
            onClick={() => navigate("/createshipment")}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Create Shipment
          </button>

        </div>

      </section>

    </div>
  );
}

export default Services;

