import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>FS-App-Template</h1>
      <nav>
        <div>
          <Link to="/home">Home</Link>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
