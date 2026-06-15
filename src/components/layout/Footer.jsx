import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer-adwuma py-5 d-none d-lg-block">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5 className="fw-bold text-white mb-3">
              Adwu<span className="text-warning">mapa</span>
            </h5>
            <p className="small mb-0">
              Your map to local work and real skills. Jobs for everyone, apprenticeships for the next generation — across Ghana.
            </p>
          </div>
          <div className="col-lg-2">
            <h6 className="text-white fw-semibold mb-3">Explore</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link to="/jobs" className="text-white-50 text-decoration-none">
                  Browse Jobs
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/apprenticeships" className="text-white-50 text-decoration-none">
                  Apprenticeships
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/featured" className="text-white-50 text-decoration-none">
                  Featured Listings
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h6 className="text-white fw-semibold mb-3">For Posters</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link to="/post" className="text-white-50 text-decoration-none">
                  Post a Job
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/post" className="text-white-50 text-decoration-none">
                  Post Apprenticeship
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="text-white fw-semibold mb-3">Connect</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-white-50" aria-label="Facebook">
                <i className="bi bi-facebook fs-5" />
              </a>
              <a href="#" className="text-white-50" aria-label="Instagram">
                <i className="bi bi-instagram fs-5" />
              </a>
              <a href="#" className="text-white-50" aria-label="WhatsApp">
                <i className="bi bi-whatsapp fs-5" />
              </a>
            </div>
            <p className="small text-white-50 mt-3 mb-0">
              Accra · Kumasi · Takoradi · Tamale
            </p>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <p className="small text-white-50 mb-0 text-center">
          © 2026 Adwumapa. Built for Ghana — UI preview site.
        </p>
      </div>
    </footer>
  )
}

export default Footer
