import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {

    if (email.trim() === "") {
      alert("Please Enter Email");
      return;
    }

    if (!email.includes("@")) {
      alert("Please Enter Valid Email");
      return;
    }

    if (password.trim() === "") {
      alert("Please Enter Password");
      return;
    }

    if (password.length < 6) {
      alert("Password Must Be At Least 6 Characters");
      return;
    }
    localStorage.setItem("email", email);

    localStorage.setItem("isLogin", "true");

    alert("Login Successful");

    navigate("/");

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-pink-50">

      <div className="bg-white shadow-xl rounded-xl p-8 w-[400px]">

        <h1 className="text-3xl font-bold text-center text-pink-600 mb-8">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg p-3 mb-5 outline-none"
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg p-3"
        />

        <button
          onClick={() => setShowPassword(!showPassword)}
          className="text-pink-600 mt-2 mb-5"
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </button>

        <button
          onClick={handleLogin}
          className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700"
        >
          Login
        </button>

        <p className="text-center mt-5">
          Don't have an account?
          <span className="text-pink-600 cursor-pointer ml-2">
            Register
          </span>
        </p>

      </div>

    </div>

  );

};

export default Login;