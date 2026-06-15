import { useState } from 'react'
import { CATEGORIES, CITIES } from '../../data/seed'

const initialForm = {
  title: '',
  artisanName: '',
  city: 'Accra',
  category: 'Tailoring',
  durationMonths: 6,
  stipend: '',
  hasStipend: true,
  description: '',
  requirements: '',
  contactPhone: '',
  contactEmail: '',
  isFeatured: false,
}

const PostApprenticeshipForm = ({ onSuccess }) => {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title || !form.artisanName || !form.description) {
      setError('Please fill in title, artisan name, and description.')
      return
    }

    setError('')
    onSuccess('Apprenticeship form submitted! (UI preview — connect a backend to publish.)')
    setForm(initialForm)
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row g-3">
        <div className="col-md-8">
          <label className="form-label fw-semibold" htmlFor="app-title">Apprenticeship title *</label>
          <input id="app-title" name="title" className="form-control" value={form.title} onChange={handleChange} required />
        </div>
        <div className="col-md-4">
          <label className="form-label fw-semibold" htmlFor="app-duration">Duration (months)</label>
          <input id="app-duration" name="durationMonths" type="number" className="form-control" value={form.durationMonths} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label fw-semibold" htmlFor="app-artisan">Artisan / shop name *</label>
          <input id="app-artisan" name="artisanName" className="form-control" value={form.artisanName} onChange={handleChange} required />
        </div>
        <div className="col-md-3">
          <label className="form-label fw-semibold" htmlFor="app-city">City</label>
          <select id="app-city" name="city" className="form-select" value={form.city} onChange={handleChange}>
            {CITIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label fw-semibold" htmlFor="app-category">Trade</label>
          <select id="app-category" name="category" className="form-select" value={form.category} onChange={handleChange}>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <div className="form-check mt-4">
            <input id="app-stipend-check" name="hasStipend" type="checkbox" className="form-check-input" checked={form.hasStipend} onChange={handleChange} />
            <label className="form-check-label" htmlFor="app-stipend-check">Offers stipend</label>
          </div>
        </div>
        <div className="col-md-4">
          <label className="form-label fw-semibold" htmlFor="app-stipend">Stipend (GHS/mo)</label>
          <input id="app-stipend" name="stipend" type="number" className="form-control" value={form.stipend} onChange={handleChange} disabled={!form.hasStipend} />
        </div>
        <div className="col-md-4">
          <label className="form-label fw-semibold" htmlFor="app-phone">Contact phone</label>
          <input id="app-phone" name="contactPhone" className="form-control" value={form.contactPhone} onChange={handleChange} />
        </div>
        <div className="col-12">
          <label className="form-label fw-semibold" htmlFor="app-email">Contact email</label>
          <input id="app-email" name="contactEmail" type="email" className="form-control" value={form.contactEmail} onChange={handleChange} />
        </div>
        <div className="col-12">
          <label className="form-label fw-semibold" htmlFor="app-desc">Description *</label>
          <textarea id="app-desc" name="description" className="form-control" rows={4} value={form.description} onChange={handleChange} required />
        </div>
        <div className="col-12">
          <label className="form-label fw-semibold" htmlFor="app-req">Requirements (one per line)</label>
          <textarea id="app-req" name="requirements" className="form-control" rows={3} value={form.requirements} onChange={handleChange} />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input id="app-featured" name="isFeatured" type="checkbox" className="form-check-input" checked={form.isFeatured} onChange={handleChange} />
            <label className="form-check-label" htmlFor="app-featured">
              Feature this listing (demo — no payment)
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-adwuma px-5">
            Post Apprenticeship
          </button>
        </div>
      </div>
    </form>
  )
}

export default PostApprenticeshipForm
