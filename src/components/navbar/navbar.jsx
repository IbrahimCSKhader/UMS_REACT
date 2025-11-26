import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
                  <Link className="nav-link active" aria-current="page" to="/"> Ibrahim test  </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/user">
                User
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/users/ADD">
                Users
              </Link>
            </li>



      </ul>
    </div>
  </div>
</nav>
  );
}
