import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.email || !formData.password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
       `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          email: formData.email,
          password: formData.password
        }
      );

      localStorage.setItem("token", response.data.token);

      if (response.data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );
      }

      navigate("/shipments");

    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Shipflow
        </h2>

        <h2 className="text-2xl text-center text-gray-600 mb-6">
          Welcome Back!
        </h2>

        {error && (
          <p className="text-red-600 text-center mb-4">
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-3 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-3 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="text-center text-gray-700 mt-4">
          Don't have an account?{" "}

          <Link
            to="/register"
            className="font-semibold text-blue-600 cursor-pointer hover:underline"
          >
            Register here
          </Link>

        </p>

      </div>
    </div>
  );
}

export default Login;