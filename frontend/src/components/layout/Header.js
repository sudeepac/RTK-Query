import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import { removeCredentials } from "../services/authSlice";

import { useAuth } from "../../hooks/useAuth";

export const Header = () => {
  const { user } = useAuth();

  const dispatch = useDispatch();
  const history = useHistory();
  const logOutHanlder = () => {
    dispatch(removeCredentials());
    history.push("/");
  };

  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Homepage
            </Link>
          </li>
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
            <Link to="/contacts" className="nav-link">
              Contacts
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contacts/create" className="nav-link">
              Create Contact
            </Link>
          </li>
        </ul>

        {user && (
          <button
            class="btn btn-sm btn-outline-secondary"
            type="button"
            onClick={logOutHanlder}
          >
            Logout
          </button>
        )}
      </nav>
    </div>
  );
};
