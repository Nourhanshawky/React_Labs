import React from 'react';
import {Link ,useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const NavigationDisable = () => {
        navigate('/');
      };
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" to="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/" onClick={NavigationDisable}>Product</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/add">Add Product</Link>
        </li>
        
        </ul>
    </div>
  </div>
</nav>
  );
};
export default Navbar;
