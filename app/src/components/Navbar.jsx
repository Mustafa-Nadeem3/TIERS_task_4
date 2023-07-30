import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <section id="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="#header">
            <b className="text-white ms-1 mt-5">Blog</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/view">
                  View
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};