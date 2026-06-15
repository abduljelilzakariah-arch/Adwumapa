import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getListingById, formatPay, getInitials } from '../utils/listings'
import ApplyModal from '../components/forms/ApplyModal'
import ToastAlert from '../components/ui/ToastAlert'

const ListingDetailPage = () => {
  const { id } = useParams()
  const listing = useMemo(() => getListingById(id), [id])
  const [showApply, setShowApply] = useState(false)
  const [saved, setSaved] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' })

  const handleSave = () => {
    const nextSaved = !saved
    setSaved(nextSaved)
    setToast({
      show: true,
      message: nextSaved ? 'Saved for this visit!' : 'Removed from saved',
      type: 'success',
    })
  }

  const handleApplySuccess = () => {
    setToast({
      show: true,
      message: 'Application sent! (UI preview — connect a backend to deliver.)',
      type: 'success',
    })
  }

  if (!listing) {
    return (
      <div className="container py-5">
        <div className="empty-state">
          <i className="bi bi-exclamation-circle" aria-hidden="true" />
          <h5>Listing not found</h5>
          <Link to="/" className="btn btn-adwuma mt-3">
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  const orgName = listing.company || listing.artisanName
  const isJob = listing.type === 'job'

  return (
    <div className="container py-4">
      <ToastAlert
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />

      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={isJob ? '/jobs' : '/apprenticeships'}>
              {isJob ? 'Jobs' : 'Apprenticeships'}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {listing.title}
          </li>
        </ol>
      </nav>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card listing-card border-0 p-4 mb-4">
            <div className="d-flex flex-wrap gap-2 mb-3">
              {listing.isFeatured && (
                <span className="badge badge-featured rounded-pill">Featured</span>
              )}
              {listing.isNew && <span className="badge badge-new rounded-pill">New</span>}
              {listing.isUrgent && <span className="badge badge-urgent rounded-pill">Urgent</span>}
              <span className="badge bg-light text-dark border">
                {isJob ? 'Job' : 'Apprenticeship'}
              </span>
            </div>

            <h1 className="fw-bold mb-2">{listing.title}</h1>
            <p className="text-muted mb-3">{orgName}</p>

            <div className="d-flex flex-wrap gap-2 mb-4">
              <span className="badge bg-light text-dark border px-3 py-2">
                <i className="bi bi-geo-alt me-1" aria-hidden="true" />
                {listing.city}
              </span>
              <span className="badge bg-light text-dark border px-3 py-2">
                {listing.category}
              </span>
              {isJob ? (
                <span className="badge bg-light text-dark border px-3 py-2">
                  {listing.jobType}
                </span>
              ) : (
                <span className="badge bg-light text-dark border px-3 py-2">
                  {listing.durationMonths} months
                </span>
              )}
            </div>

            <div className="fs-4 fw-bold text-adwuma-green mb-4">{formatPay(listing)}</div>

            <h5 className="fw-bold">About this role</h5>
            <p className="text-muted">{listing.description}</p>

            {listing.requirements?.length > 0 && (
              <>
                <h5 className="fw-bold mt-4">Requirements</h5>
                <ul className="text-muted">
                  {listing.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </>
            )}

            <div className="map-placeholder mt-4">
              <div className="text-center">
                <i className="bi bi-map fs-1 d-block mb-2" aria-hidden="true" />
                {listing.city}, Ghana
                <div className="small fw-normal opacity-75">Map preview (demo)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card listing-card border-0 p-4 mb-4 sticky-top" style={{ top: 90 }}>
            <div className="d-flex gap-3 mb-4">
              <div className="avatar-circle" style={{ width: 56, height: 56 }}>
                {getInitials(orgName)}
              </div>
              <div>
                <h6 className="fw-bold mb-0">{orgName}</h6>
                <p className="text-muted small mb-0">
                  Posted {new Date(listing.postedAt).toLocaleDateString('en-GH')}
                </p>
              </div>
            </div>

            {listing.contactPhone && (
              <p className="small mb-2">
                <i className="bi bi-telephone me-2 text-adwuma-green" aria-hidden="true" />
                {listing.contactPhone}
              </p>
            )}
            {listing.contactEmail && (
              <p className="small mb-4">
                <i className="bi bi-envelope me-2 text-adwuma-green" aria-hidden="true" />
                {listing.contactEmail}
              </p>
            )}

            <button
              type="button"
              className="btn btn-adwuma w-100 mb-2 rounded-pill py-2"
              onClick={() => setShowApply(true)}
            >
              Apply Now
            </button>
            <button
              type="button"
              className={`btn w-100 rounded-pill ${saved ? 'btn-gold' : 'btn-adwuma-outline'}`}
              onClick={handleSave}
            >
              <i className={`bi ${saved ? 'bi-bookmark-fill' : 'bi-bookmark'} me-1`} aria-hidden="true" />
              {saved ? 'Saved' : 'Save for later'}
            </button>
          </div>
        </div>
      </div>

      <ApplyModal
        show={showApply}
        listing={listing}
        onClose={() => setShowApply(false)}
        onSuccess={handleApplySuccess}
      />
    </div>
  )
}

export default ListingDetailPage
