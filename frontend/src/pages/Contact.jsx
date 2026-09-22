
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <section className="bg-blue-600 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-blue-100 text-lg">
            Have a question? We'd love to hear from you.
          </p>

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div>

            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              Get In Touch
            </h2>

            <p className="text-gray-600 leading-7 mb-8">
              If you have questions about ShipFlow, shipment
              management, or need assistance, send us a message.
            </p>

            <div className="space-y-6">

              <div>
                <h3 className="font-semibold text-gray-800">
                  Email
                </h3>

                <p className="text-gray-600 mt-1">
                  support@shipflow.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  Phone
                </h3>

                <p className="text-gray-600 mt-1">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  Address
                </h3>

                <p className="text-gray-600 mt-1">
                  Jaipur, Rajasthan, India
                </p>
              </div>

            </div>

          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">

            {submitted && (
              <div className="bg-green-100 text-green-700 px-4 py-3 rounded-lg mb-5">
                Your message has been submitted successfully.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div>
                <label className="block text-gray-700 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;

