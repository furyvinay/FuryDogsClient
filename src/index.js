import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './components/App.jsx';
import App2 from './components2/App2.jsx';
import Navbar from './componentsNavFooter/navbar.jsx';
import Footer from './componentsNavFooter/footer.jsx';
import "./App.css";
import FavouriteDogs from './pages/favouriteDogs.js';
import App3 from './components3/App3.jsx';
import App4 from './components4/App4.js';
import Login from './pages/login.js';
import Register from './pages/register.js';

createRoot(document.getElementById('root')).render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/buy-dogs" element={<App2 />} />
      <Route path="/buy-dogs/login" element={<Login />} />
      <Route path="/buy-dogs/register" element={<Register />} />
      <Route path="/buy-dogs/auth/addDogForm" element={<App3 />} />
      <Route path="/viewDogs" element={<App4 />} />
      <Route path="/favouriteDogs" element={<FavouriteDogs />} />
    </Routes>
    <Footer />
  </Router>
);


