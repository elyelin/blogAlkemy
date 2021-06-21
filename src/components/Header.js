import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="px-1 px-md-4 text-white py-2 bg-dark ">
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
        <Link to="/" className="navbar-brand">
          Blog
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
        </div>

        <Link to="/post/new" className="btn btn-success">
          New Post
        </Link>
      </nav>
    </header>
  );
}
