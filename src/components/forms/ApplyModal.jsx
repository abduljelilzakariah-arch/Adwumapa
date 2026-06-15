import { useState } from 'react'

const ApplyModal = ({ show, listing, onClose, onSuccess }) => {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
    cvLink: '',
  })
  const [errors, setErrors] = useState({})

  if (!show || !listing) return null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const next = {}
    if (!form.fullName.trim()) next.fullName = 'Name is required'
    if (!form.phone.trim()) next.phone = 'Phone is required'
    if (!form.email.trim()) next.email = 'Email is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    onSuccess()
    onClose()
    setForm({ fullName: '', phone: '', email: '', message: '', cvLink: '' })
  }

  return (
    <>
      <div className="modal fade show d-block" tabIndex={-1} role="dialog" aria-modal="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg rounded-4">
            <div className="modal-header border-0 pb-0">
              <div>
                <h5 className="modal-title fw-bold">Apply Now</h5>
                <p className="text-muted small mb-0">{listing.title}</p>
              </div>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label fw-semibold" htmlFor="apply-name">
                    Full name *
                  </label>
                  <input
                    id="apply-name"
                    name="fullName"
                    type="text"
                    className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                    value={form.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && (
                    <div className="invalid-feedback">{errors.fullName}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold" htmlFor="apply-phone">
                    Phone *
                  </label>
                  <input
                    id="apply-phone"
                    name="phone"
                    type="tel"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    placeholder="024XXXXXXX"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold" htmlFor="apply-email">
                    Email *
                  </label>
                  <input
                    id="apply-email"
                    name="email"
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold" htmlFor="apply-message">
                    Short message
                  </label>
                  <textarea
                    id="apply-message"
                    name="message"
                    className="form-control"
                    rows={3}
                    placeholder="Why are you a good fit?"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-0">
                  <label className="form-label fw-semibold" htmlFor="apply-cv">
                    CV link (optional)
                  </label>
                  <input
                    id="apply-cv"
                    name="cvLink"
                    type="url"
                    className="form-control"
                    placeholder="https://..."
                    value={form.cvLink}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="modal-footer border-0">
                <button type="button" className="btn btn-outline-secondary rounded-pill" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-adwuma rounded-pill px-4">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={onClose} aria-hidden="true" />
    </>
  )
}

export default ApplyModal
