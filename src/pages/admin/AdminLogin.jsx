import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import chevronLeft from "../../assets/icons/chevronleft.svg";
import logo from "../../assets/logo_small.png";
import Loader from "../../components/Loader";

export default function AdminLogin() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    //API call
    try {
      const response = await axiosInstance.post("/auth/login", loginData);

      if (response.status === 200) {
        navigate("/admin");
      }

      console.log("Success:", response.data);
    } catch (error) {
      setError(true);
      console.error("Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axiosInstance.get("/auth/verify");
        navigate("/admin");
      } catch (err) {
        console.error(err);
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <div className="bg-secondary  h-screen flex justify-center items-center">
      <div className="absolute top-0 left-0 m-4">
        <Link
          to={"/"}
          className=" text-primary flex cursor-pointer text-nowrap"
        >
          <img src={chevronLeft} alt="Left Chevron" />
          Back to Home
        </Link>
      </div>
      <div className="relative -top-12 max-w-100 w-full space-y-8 mx-4">
        <div className="flex justify-center">
          <img src={logo} alt="Thrive East Logo" className="h-16" />
        </div>
        <div className="bg-tertiary h-fit rounded-xl text-white p-6">
          <h2 className="text-2xl text-center font-medium mb-4">Admin Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={loginData.username}
                onChange={handleChange}
                className="bg-white w-full px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="bg-white w-full px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {error && (
              <div className="text-red-600">
                Wrong username or password. Try again
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center bg-blue-600 cursor-pointer py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {loading ? <Loader /> : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
