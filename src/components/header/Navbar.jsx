import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import NotFound from "../NotFound";
import Shop from "../shop/shop";

const Navbar = () => {
  return (
  <Router>
    <nav className="bg-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">MyStore</h1>
        <ul className="flex space-x-6 text-xl">
          <li>
            <Link to="/shop" className="text-white hover:text-gray-300">Shop</Link>
          </li>
          <li>
            <Link to="/order" className="text-white hover:text-gray-300">Order</Link>
          </li>
          <li>
            <Link to="/manage" className="text-white hover:text-gray-300">Manage</Link>
          </li>
        </ul>
      </div>
    </nav>
    <Routes>
      <Route path="/shop" element={<Shop />} />
      <Route path="/order" element={<NotFound />} />
      <Route path="/manage" element={<NotFound />} />
    </Routes>
  </Router>
  );
};

export default Navbar;
