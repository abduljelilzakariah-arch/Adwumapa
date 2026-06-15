import { useState } from 'react'
import { Link } from 'react-router-dom'
import ToastAlert from '../components/ui/ToastAlert'

const DashboardPage = () => {
  const [tab, setTab] = useState('applications')
  const [user, setUser] = useState({ name: 'Guest User', phone: '', email: '' })
  const [toast, setToast] = useState({ show: false, message: '' })

  const handleUserSave = (e) => {
    e.preventDefault()
    setToast({ show: true, message: 'Profile updated for this visit!' })
  }

  const tabs = [
    { id: 'applications', label: 'My Applications' },
    { id: 'listings', label: 'My Listings' },
    { id: 'saved', label: 'Saved' },
    { id: 'profile', label: 'Profile' },
  ]

  return (
    <div className="container py-4">
      <ToastAlert
        show={toast.show}
        message={toast.message}
        onClose={() => setToast({ ...toast, show: false })}
      />

      <div className="page-header">
        <h1 className="fw-bold mb-2">
          <i className="bi bi-person-circle me-2" aria-hidden="true" />
          My Dashboard
        </h1>
        <p className="mb-0 opacity-90">Track applications, listings, and saved jobs</p>
      </div>

      <div className="alert alert-light border mb-4 small">
        <i className="bi bi-info-circle me-2 text-adwuma-green" aria-hidden="true" />
        Dashboard is UI-only right now. Connect a backend to save applications, listings, and profile data.
      </div>

      <ul className="nav nav-pills flex-nowrap overflow-auto mb-4 gap-2 pb-2">
        {tabs.map((t) => (
          <li key={t.id} className="nav-item">
            <button
              type="button"
              className={`nav-link rounded-pill ${tab === t.id ? 'active bg-adwuma-green' : 'text-adwuma-green border'}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          </li>
        ))}
      </ul>

      {tab === 'applications' && (
        <div className="card listing-card border-0 p-4">
          <div className="empty-state py-4">
            <i className="bi bi-inbox" aria-hidden="true" />
            <h5>No applications yet</h5>
            <p className="small">Browse jobs or apprenticeships and tap Apply.</p>
            <Link to="/jobs" className="btn btn-adwuma mt-2">
              Browse Jobs
            </Link>
          </div>
        </div>
      )}

      {tab === 'listings' && (
        <div className="card listing-card border-0 p-4">
          <div className="empty-state py-4">
            <i className="bi bi-megaphone" aria-hidden="true" />
            <h5>No listings posted yet</h5>
            <p className="small">Post a job or apprenticeship — forms are ready for a backend hook-up.</p>
            <Link to="/post" className="btn btn-adwuma mt-2">
              Post Listing
            </Link>
          </div>
        </div>
      )}

      {tab === 'saved' && (
        <div className="card listing-card border-0 p-4">
          <div className="empty-state py-4">
            <i className="bi bi-bookmark" aria-hidden="true" />
            <h5>No saved listings</h5>
            <p className="small">Tap Save on a listing — it stays saved while you browse this session.</p>
          </div>
        </div>
      )}

      {tab === 'profile' && (
        <div className="card listing-card border-0 p-4">
          <p className="text-muted small mb-4">
            Preview profile form — data is not stored without a backend.
          </p>
          <form onSubmit={handleUserSave} className="row g-3" style={{ maxWidth: 480 }}>
            <div className="col-12">
              <label className="form-label fw-semibold" htmlFor="user-name">
                Display name
              </label>
              <input
                id="user-name"
                className="form-control"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold" htmlFor="user-phone">
                Phone
              </label>
              <input
                id="user-phone"
                className="form-control"
                value={user.phone || ''}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold" htmlFor="user-email">
                Email
              </label>
              <input
                id="user-email"
                type="email"
                className="form-control"
                value={user.email || ''}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-adwuma">
                Save Profile
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default DashboardPage
