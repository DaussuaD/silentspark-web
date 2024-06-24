import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/img/logo.png';
import google from '../assets/img/google.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email, password)
      const response = await axios.post('http://localhost:3000/auth/login', { email, password });
      const token = response.data.token;
      // Simpan token dalam local storage atau state management
      localStorage.setItem('token', token); 
      console.log(token ?? 'nothing')
      navigate('/homeguru');
    } catch (error) {
      setError(error.response.data.message)
      // setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div>
      <section className="Login">
        <div className="login-right">
          <div className="row">
            <div className="col-lg-6">
              <img src={logo} className="img" alt="Logo" />
              <h2>Welcome to SilentSpark</h2>
              <p>Belajar dan Mengajar Bahasa Isyarat Praktis, Dimanapun dan Kapanpun</p>
            </div>
          </div>
        </div>

        <div className="login-left w-50 h-150">
          <div className="row">
            <div className="col-6">
              <div className="header">
                <h1>Welcome to SilentSpark</h1>
                <p>Bersiaplah untuk terhubung, belajar, dan menginspirasi di dalamnya. Mari kita mulai!</p>
              </div>
              <div className="login-form">
                {error && <div className="alert alert-danger"> <b>Gagal Melakukan Login</b>: {error}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Masukkan email anda"
                      autoComplete="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />

                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Masukkan password anda"
                      autoComplete="current-password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />

                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">Ingat saya</label>
                    </div>

                    <div>
                      <a href="#" className="text-decoration-none">Lupa password anda?</a>
                    </div>

                    <button type="submit" className="signin btn-primary mt-3">Login</button>
                  </div>
                </form>

                <button className="signin-google btn-outline-primary mt-3">
                  <img src={google} className="signin-img" alt="Google Logo" />
                  Login dengan Google
                </button>

                <div className="text-center mt-3">
                  <span className="d-inline">Apakah anda sudah punya akun?
                    <a href="/signinpages" className="d-inline text-decoration-none"> sign up</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login
