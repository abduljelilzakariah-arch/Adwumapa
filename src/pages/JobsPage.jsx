import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getJobs } from '../utils/listings'
import JobCard from '../components/cards/JobCard'
import FilterPanel from '../components/ui/FilterPanel'
import SearchBar from '../components/ui/SearchBar'

const JobsPage = () => {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    city: searchParams.get('city') || '',
    category: searchParams.get('category') || '',
    jobType: '',
    minSalary: '',
    sortBy: 'newest',
    search: searchParams.get('search') || '',
  })

  const jobs = useMemo(() => getJobs(filters), [filters])

  return (
    <div className="container py-4">
      <div className="page-header">
        <h1 className="fw-bold mb-2">
          <i className="bi bi-briefcase me-2" aria-hidden="true" />
          Local Jobs
        </h1>
        <p className="mb-0 opacity-90">Find full-time, part-time, and contract work across Ghana</p>
      </div>

      <div className="row g-4">
        <div className="col-lg-3">
          <div className="d-lg-none mb-3">
            <button
              className="btn btn-outline-secondary w-100 rounded-pill"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#jobFilters"
            >
              <i className="bi bi-funnel me-2" aria-hidden="true" />
              Show filters
            </button>
          </div>
          <div className="collapse d-lg-block" id="jobFilters">
            <FilterPanel filters={filters} onChange={setFilters} type="jobs" />
          </div>
        </div>

        <div className="col-lg-9">
          <SearchBar
            value={filters.search}
            onChange={(search) => setFilters({ ...filters, search })}
            placeholder="Search jobs, companies, trades..."
          />

          <p className="text-muted small mb-3">
            {jobs.length} job{jobs.length !== 1 ? 's' : ''} found
          </p>

          {jobs.length === 0 ? (
            <div className="empty-state">
              <i className="bi bi-briefcase" aria-hidden="true" />
              <h5>No jobs match your filters</h5>
              <p className="small">Try clearing filters or search for something else.</p>
            </div>
          ) : (
            <div className="row g-4">
              {jobs.map((job) => (
                <div key={job.id} className="col-md-6">
                  <JobCard job={job} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default JobsPage
