import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/accounts" className="nav-link">
              Accounts
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/accounts/create" className="nav-link">
              Create Account
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contacts/create" className="nav-link">
              Create Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
