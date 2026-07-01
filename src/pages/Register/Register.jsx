import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Register.css";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

  const validateForm = () => {
    const newErrors = {};

    const fullName = formData.fullName.trim();
    const email = formData.email.trim();
    const password = formData.password.trim();
    const confirmPassword = formData.confirmPassword.trim();

    /* ==========================
          Full Name Validation
    ========================== */

    if (!fullName) {
      newErrors.fullName = "Full name is required.";
    } else if (fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters.";
    }

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

    /* ==========================
      Confirm Password Validation
    ========================== */

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
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

      <section className="register-page">
        <div className="register-container">
          <h1 className="register-title">Create Your Account 🚀</h1>

          <p className="register-subtitle">
            Join CartVerse and start shopping today.
          </p>

          <form className="register-form" onSubmit={handleSubmit}>
            {/* Full Name */}

            <div className="input-group">
              <label>Full Name</label>

              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? "input-error" : ""}
              />

              {errors.fullName && (
                <p className="error-message">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}

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

            {/* Password */}

            <div className="input-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "input-error" : ""}
              />

              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}

            <div className="input-group">
              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? "input-error" : ""}
              />

              {errors.confirmPassword && (
                <p className="error-message">{errors.confirmPassword}</p>
              )}
            </div>

            <button type="submit" className="register-btn">
              Create Account
            </button>
          </form>

          <p className="login-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Register;
