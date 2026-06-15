import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getApprenticeships } from '../utils/listings'
import ApprenticeshipCard from '../components/cards/ApprenticeshipCard'
import FilterPanel from '../components/ui/FilterPanel'
import SearchBar from '../components/ui/SearchBar'

const ApprenticeshipsPage = () => {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    city: searchParams.get('city') || '',
    category: searchParams.get('category') || '',
    hasStipend: '',
    sortBy: 'newest',
    search: searchParams.get('search') || '',
  })

  const items = useMemo(() => getApprenticeships(filters), [filters])

  return (
    <div className="container py-4">
      <div className="page-header">
        <h1 className="fw-bold mb-2">
          <i className="bi bi-tools me-2" aria-hidden="true" />
          Apprenticeships
        </h1>
        <p className="mb-0 opacity-90">Learn a trade from skilled artisans in your community</p>
      </div>

      <div className="row g-4">
        <div className="col-lg-3">
          <div className="d-lg-none mb-3">
            <button
              className="btn btn-outline-secondary w-100 rounded-pill"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#appFilters"
            >
              <i className="bi bi-funnel me-2" aria-hidden="true" />
              Show filters
            </button>
          </div>
          <div className="collapse d-lg-block" id="appFilters">
            <FilterPanel filters={filters} onChange={setFilters} type="apprenticeships" />
          </div>
        </div>

        <div className="col-lg-9">
          <SearchBar
            value={filters.search}
            onChange={(search) => setFilters({ ...filters, search })}
            placeholder="Search trades, artisans, skills..."
          />

          <p className="text-muted small mb-3">
            {items.length} apprenticeship{items.length !== 1 ? 's' : ''} found
          </p>

          {items.length === 0 ? (
            <div className="empty-state">
              <i className="bi bi-tools" aria-hidden="true" />
              <h5>No apprenticeships match your filters</h5>
              <p className="small">Try clearing filters or search for another trade.</p>
            </div>
          ) : (
            <div className="row g-4">
              {items.map((item) => (
                <div key={item.id} className="col-md-6">
                  <ApprenticeshipCard apprenticeship={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ApprenticeshipsPage
