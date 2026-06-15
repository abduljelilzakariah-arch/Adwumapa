import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFeatured, formatPay, getInitials } from '../../utils/listings'

const FeaturedCarousel = () => {
  const items = useMemo(() => getFeatured(), [])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (items.length <= 1) return undefined
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [items.length])

  if (items.length === 0) return null

  const item = items[activeIndex]
  const orgName = item.company || item.artisanName

  return (
    <section className="mb-5 carousel-featured">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold text-adwuma-green mb-0">
          <i className="bi bi-star-fill text-warning me-2" aria-hidden="true" />
          Featured Listings
        </h2>
        <Link to="/featured" className="btn btn-adwuma-outline btn-sm">
          View all
        </Link>
      </div>

      <div className="card listing-card border-0 overflow-hidden">
        <div className="row g-0">
          <div className="col-md-4 bg-adwuma-green text-white p-4 d-flex flex-column justify-content-center">
            <span className="badge badge-featured align-self-start mb-2">Featured</span>
            <div className="avatar-circle mb-3" style={{ width: 56, height: 56 }}>
              {getInitials(orgName)}
            </div>
            <h3 className="fw-bold h4">{item.title}</h3>
            <p className="opacity-90 mb-2">{orgName}</p>
            <p className="fw-bold text-warning mb-0">{formatPay(item)}</p>
          </div>
          <div className="col-md-8 p-4">
            <div className="d-flex flex-wrap gap-2 mb-3">
              <span className="badge bg-light text-dark border">
                <i className="bi bi-geo-alt me-1" aria-hidden="true" />
                {item.city}
              </span>
              <span className="badge bg-light text-dark border">{item.category}</span>
              <span className="badge bg-light text-dark border">
                {item.type === 'job' ? item.jobType : `${item.durationMonths} mo`}
              </span>
            </div>
            <p className="text-muted mb-4">{item.description}</p>
            <div className="d-flex gap-2 align-items-center">
              <Link to={`/listing/${item.id}`} className="btn btn-adwuma">
                View & Apply
              </Link>
              <div className="ms-auto d-flex gap-1">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`btn btn-sm rounded-circle p-0 ${idx === activeIndex ? 'btn-adwuma' : 'btn-outline-secondary'}`}
                    style={{ width: 10, height: 10 }}
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => setActiveIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCarousel
