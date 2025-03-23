import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>NeuroBuddy</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/routine">Routine</Link></li>
      <li><Link to="/tools">Tools</Link></li>
      <li><Link to="/support">Support</Link></li>
    </ul>
  </nav>
);

export default Navbar;