import { NavLink } from 'react-router-dom'

const MobileBottomNav = () => {
  return (
    <nav className="mobile-bottom-nav d-lg-none" aria-label="Mobile navigation">
      <NavLink to="/" end>
        <i className="bi bi-house-door" aria-hidden="true" />
        Home
      </NavLink>
      <NavLink to="/jobs">
        <i className="bi bi-briefcase" aria-hidden="true" />
        Jobs
      </NavLink>
      <NavLink to="/apprenticeships">
        <i className="bi bi-tools" aria-hidden="true" />
        Learn
      </NavLink>
      <NavLink to="/post">
        <i className="bi bi-plus-circle" aria-hidden="true" />
        Post
      </NavLink>
      <NavLink to="/dashboard">
        <i className="bi bi-person" aria-hidden="true" />
        Me
      </NavLink>
    </nav>
  )
}

export default MobileBottomNav
