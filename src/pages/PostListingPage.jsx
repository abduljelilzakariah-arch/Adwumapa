import { useState } from 'react'
import PostJobForm from '../components/forms/PostJobForm'
import PostApprenticeshipForm from '../components/forms/PostApprenticeshipForm'
import ToastAlert from '../components/ui/ToastAlert'

const PostListingPage = () => {
  const [activeTab, setActiveTab] = useState('job')
  const [toast, setToast] = useState({ show: false, message: '' })

  const handleSuccess = (message) => {
    setToast({ show: true, message })
  }

  return (
    <div className="container py-4">
      <ToastAlert
        show={toast.show}
        message={toast.message}
        onClose={() => setToast({ ...toast, show: false })}
      />

      <div className="page-header">
        <h1 className="fw-bold mb-2">
          <i className="bi bi-plus-circle me-2" aria-hidden="true" />
          Post a Listing
        </h1>
        <p className="mb-0 opacity-90">
          Companies post jobs. Artisans post apprenticeship openings.
        </p>
      </div>

      <div className="card listing-card border-0 p-4">
        <ul className="nav nav-pills mb-4 gap-2" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              type="button"
              className={`nav-link rounded-pill px-4 ${activeTab === 'job' ? 'active bg-adwuma-green' : 'text-adwuma-green'}`}
              onClick={() => setActiveTab('job')}
              role="tab"
              aria-selected={activeTab === 'job'}
            >
              <i className="bi bi-briefcase me-2" aria-hidden="true" />
              Company Job
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              type="button"
              className={`nav-link rounded-pill px-4 ${activeTab === 'apprenticeship' ? 'active bg-adwuma-green' : 'text-adwuma-green'}`}
              onClick={() => setActiveTab('apprenticeship')}
              role="tab"
              aria-selected={activeTab === 'apprenticeship'}
            >
              <i className="bi bi-tools me-2" aria-hidden="true" />
              Artisan Apprenticeship
            </button>
          </li>
        </ul>

        {activeTab === 'job' ? (
          <PostJobForm onSuccess={handleSuccess} />
        ) : (
          <PostApprenticeshipForm onSuccess={handleSuccess} />
        )}
      </div>
    </div>
  )
}

export default PostListingPage
