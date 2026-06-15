import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-adwuma sticky-top py-3">
      <div className="container">
        <Link className="navbar-brand navbar-brand-adwuma" to="/" aria-label="Adwumapa home">
          Adwu<span>mapa</span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/jobs" end>
                Jobs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/apprenticeships">
                Apprenticeships
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/featured">
                Featured
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item ms-lg-2">
              <Link className="btn btn-adwuma btn-sm px-4" to="/post">
                <i className="bi bi-plus-circle me-1" aria-hidden="true" />
                Post Listing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
