import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

  const validateForm = () => {
    const newErrors = {};

    const email = formData.email.trim();

    const password = formData.password.trim();

    /* ==========================
          Email Validation
  ========================== */

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    /* ==========================
        Password Validation
  ========================== */

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    } else if (password.length > 20) {
      newErrors.password = "Password cannot exceed 20 characters.";
    } else if (password.includes(" ")) {
      newErrors.password = "Password cannot contain spaces.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log(formData);
    }
  };

  return (
    <>
      <Navbar />
      <section className="login-page">
        <div className="login-container">
          <h1 className="login-title">Welcome Back 👋</h1>

          <p className="login-subtitle">
            Login to continue shopping on CartVerse
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="input-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "input-error" : ""}
              />
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <p className="register-text">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
