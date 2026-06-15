import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getFeatured, formatPay, getInitials } from '../utils/listings'

const FeaturedPage = () => {
  const items = useMemo(() => getFeatured(), [])

  return (
    <div className="container py-4">
      <div className="featured-banner mb-5">
        <div className="position-relative" style={{ zIndex: 1 }}>
          <span className="badge badge-featured mb-3">Premium</span>
          <h1 className="fw-bold display-6 mb-3">Featured Listings</h1>
          <p className="lead mb-4 opacity-90" style={{ maxWidth: 520 }}>
            Top opportunities get seen first. Boost your job or apprenticeship to reach more people in your city.
          </p>
          <Link to="/post" className="btn btn-gold px-4 fw-bold">
            Boost Your Listing
          </Link>
          <p className="small mt-3 mb-0 opacity-75">UI preview — connect a backend to go live</p>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="empty-state">
          <i className="bi bi-star" aria-hidden="true" />
          <h5>No featured listings right now</h5>
        </div>
      ) : (
        <div className="row g-4">
          {items.map((item) => {
            const orgName = item.company || item.artisanName
            return (
              <div key={item.id} className="col-md-6 col-lg-4">
                <article className="card listing-card h-100 position-relative border-0">
                  <div className="featured-ribbon">FEATURED</div>
                  <div className="card-body p-4">
                    <div className="d-flex gap-3 mb-3">
                      <div className="avatar-circle">{getInitials(orgName)}</div>
                      <div>
                        <span className="badge bg-light text-dark border mb-2">
                          {item.type === 'job' ? 'Job' : 'Apprenticeship'}
                        </span>
                        <h5 className="fw-bold mb-1">{item.title}</h5>
                        <p className="text-muted small mb-0">{orgName}</p>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      <span className="badge bg-light text-dark border">
                        <i className="bi bi-geo-alt me-1" aria-hidden="true" />
                        {item.city}
                      </span>
                      <span className="badge bg-light text-dark border">{item.category}</span>
                    </div>
                    <p className="small text-muted mb-3">
                      {item.description.slice(0, 90)}...
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold text-adwuma-green">{formatPay(item)}</span>
                      <Link to={`/listing/${item.id}`} className="btn btn-adwuma btn-sm">
                        View
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default FeaturedPage
