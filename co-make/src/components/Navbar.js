// Yen
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IssueContext } from "../IssueContext";
import { Division } from "./Style";
import Logo from "./Logo/logo.png";
import "../App.css";

const Navbar = () => {
  const [issues, setIssues] = useContext(IssueContext);

  return (
    <nav className="navigation">
      <Division>
        <img src={Logo} alt="website logo" />
        {/* Switched order of "Logo" and "Neighborhood issues" */}
        <h4>Total Neighborhood Issues: {issues.length}</h4>
        <Link className="nav-links" to="/register">Register</Link>
        <Link className="nav-links" to="/login">Login</Link> {/* link to /login */}
        <Link className="nav-links" to="/accountInfo">Profile</Link>
        <Link className="nav-links" to="/about">About</Link>
        <Link className="nav-links" to="/issue-list">Issue List</Link>
        {/* <Link to="/issue">Issue</Link> */}
        <Link className="nav-links" to="/addIssue">AddIssue</Link>
      </Division>
    </nav>
  );
};

export default Navbar;
