import React, { useContext, useState } from "react";
import { MyContext } from "../App";
import { Link } from "react-router-dom";

function Header() {
  const contextData = useContext(MyContext);

  const [navstate, setnavstate] = useState(false);
  const closenav = () => {
    setnavstate(false);
  };
  const oepnnav = () => {
    setnavstate(true);
  };
  return (
    <div className="navbar">
      <div className="navbar-start">
        <Link to="/home" className="navbar-item btn-shine">
          {contextData.title}
        </Link>
      </div>
      <div
        className={`navbar-center fixed md:static top-0 left-0 flex py-4 md:p-0 md:flex md:flex-row bg-black flex-col md:bg-transparent z-10 
          ${navstate ? "flex" : "hidden"}
        `}
      >
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/employee" className="navbar-item">
          Employees
        </Link>
        <Link to="/addemployee" className="navbar-item">
          Add Employee
        </Link>
        <Link to="/learn" className="navbar-item">
          learn
        </Link>
        <Link to="/login" className="navbar-item md:hidden inline">
          Login
        </Link>
        <span
          onClick={closenav}
          className="navbar-item text-red md:hidden inline"
        >
          Close
        </span>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="navbar-item hidden md:inline">
          Login
        </Link>
        <span onClick={oepnnav} className="navbar-item md:hidden inline">
          Menu
        </span>
      </div>
    </div>
  );
}

export default Header;
