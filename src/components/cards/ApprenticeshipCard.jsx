import { Link } from 'react-router-dom'
import { formatPay, getInitials } from '../../utils/listings'

const ApprenticeshipCard = ({ apprenticeship }) => {
  const orgName = apprenticeship.artisanName || 'Artisan'

  return (
    <article className="card listing-card h-100 position-relative">
      {apprenticeship.isFeatured && <div className="featured-ribbon">FEATURED</div>}
      <div className="card-body p-4">
        <div className="d-flex gap-3 mb-3">
          <div className="avatar-circle">{getInitials(orgName)}</div>
          <div className="flex-grow-1 min-w-0">
            <div className="d-flex flex-wrap gap-1 mb-1">
              {apprenticeship.isFeatured && (
                <span className="badge badge-featured rounded-pill">Featured</span>
              )}
              {apprenticeship.isNew && (
                <span className="badge badge-new rounded-pill">New</span>
              )}
            </div>
            <h5 className="card-title fw-bold mb-1 text-truncate">
              <Link
                to={`/listing/${apprenticeship.id}`}
                className="text-decoration-none text-dark stretched-link"
              >
                {apprenticeship.title}
              </Link>
            </h5>
            <p className="text-muted small mb-0">{orgName}</p>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-2 mb-3">
          <span className="badge bg-light text-dark border">
            <i className="bi bi-geo-alt me-1" aria-hidden="true" />
            {apprenticeship.city}
          </span>
          <span className="badge bg-light text-dark border">{apprenticeship.category}</span>
          <span className="badge bg-light text-dark border">
            {apprenticeship.durationMonths} months
          </span>
        </div>

        <p className="card-text small text-muted mb-3">
          {apprenticeship.description.slice(0, 100)}...
        </p>

        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold text-adwuma-green">{formatPay(apprenticeship)}</span>
          <span className="small text-muted">View details →</span>
        </div>
      </div>
    </article>
  )
}

export default ApprenticeshipCard
