import { useState } from 'react'
import { CATEGORIES, CITIES, JOB_TYPES } from '../../data/seed'

const initialForm = {
  title: '',
  company: '',
  city: 'Accra',
  category: 'Retail',
  jobType: 'Full-time',
  salary: '',
  salaryPeriod: 'month',
  description: '',
  requirements: '',
  contactPhone: '',
  contactEmail: '',
  isFeatured: false,
}

const PostJobForm = ({ onSuccess }) => {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title || !form.company || !form.description) {
      setError('Please fill in title, company, and description.')
      return
    }

    setError('')
    onSuccess('Job form submitted! (UI preview — connect a backend to publish.)')
    setForm(initialForm)
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row g-3">
        <div className="col-md-8">
          <label className="form-label fw-semibold" htmlFor="job-title">Job title *</label>
          <input id="job-title" name="title" className="form-control" value={form.title} onChange={handleChange} required />
        </div>
        <div className="col-md-4">
          <label className="form-label fw-semibold" htmlFor="job-type">Job type</label>
          <select id="job-type" name="jobType" className="form-select" value={form.jobType} onChange={handleChange}>
            {JOB_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label fw-semibold" htmlFor="job-company">Company name *</label>
          <input id="job-company" name="company" className="form-control" value={form.company} onChange={handleChange} required />
        </div>
        <div className="col-md-3">
          <label className="form-label fw-semibold" htmlFor="job-city">City</label>
          <select id="job-city" name="city" className="form-select" value={form.city} onChange={handleChange}>
            {CITIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label fw-semibold" htmlFor="job-category">Category</label>
          <select id="job-category" name="category" className="form-select" value={form.category} onChange={handleChange}>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label fw-semibold" htmlFor="job-salary">Salary (GHS)</label>
          <input id="job-salary" name="salary" type="number" className="form-control" value={form.salary} onChange={handleChange} />
        </div>
        <div className="col-md-4">
          <label className="form-label fw-semibold" htmlFor="job-period">Pay period</label>
          <select id="job-period" name="salaryPeriod" className="form-select" value={form.salaryPeriod} onChange={handleChange}>
            <option value="month">Per month</option>
            <option value="day">Per day</option>
            <option value="hour">Per hour</option>
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label fw-semibold" htmlFor="job-phone">Contact phone</label>
          <input id="job-phone" name="contactPhone" className="form-control" value={form.contactPhone} onChange={handleChange} />
        </div>
        <div className="col-12">
          <label className="form-label fw-semibold" htmlFor="job-email">Contact email</label>
          <input id="job-email" name="contactEmail" type="email" className="form-control" value={form.contactEmail} onChange={handleChange} />
        </div>
        <div className="col-12">
          <label className="form-label fw-semibold" htmlFor="job-desc">Description *</label>
          <textarea id="job-desc" name="description" className="form-control" rows={4} value={form.description} onChange={handleChange} required />
        </div>
        <div className="col-12">
          <label className="form-label fw-semibold" htmlFor="job-req">Requirements (one per line)</label>
          <textarea id="job-req" name="requirements" className="form-control" rows={3} value={form.requirements} onChange={handleChange} />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input id="job-featured" name="isFeatured" type="checkbox" className="form-check-input" checked={form.isFeatured} onChange={handleChange} />
            <label className="form-check-label" htmlFor="job-featured">
              Feature this listing (demo — no payment)
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-adwuma px-5">
            Post Job
          </button>
        </div>
      </div>
    </form>
  )
}

export default PostJobForm
