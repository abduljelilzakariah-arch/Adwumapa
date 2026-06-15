import { CATEGORIES, CITIES, JOB_TYPES } from '../../data/seed'

const FilterPanel = ({ filters, onChange, type = 'jobs' }) => {
  const handleChange = (key, value) => {
    onChange({ ...filters, [key]: value })
  }

  return (
    <div className="filter-panel">
      <h6 className="fw-bold text-adwuma-green mb-3">
        <i className="bi bi-funnel me-2" aria-hidden="true" />
        Filters
      </h6>

      <div className="mb-3">
        <label className="form-label small fw-semibold" htmlFor="filter-city">
          City
        </label>
        <select
          id="filter-city"
          className="form-select form-select-sm"
          value={filters.city || ''}
          onChange={(e) => handleChange('city', e.target.value)}
        >
          <option value="">All cities</option>
          {CITIES.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label small fw-semibold" htmlFor="filter-category">
          {type === 'jobs' ? 'Category' : 'Trade'}
        </label>
        <select
          id="filter-category"
          className="form-select form-select-sm"
          value={filters.category || ''}
          onChange={(e) => handleChange('category', e.target.value)}
        >
          <option value="">All categories</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {type === 'jobs' && (
        <>
          <div className="mb-3">
            <label className="form-label small fw-semibold" htmlFor="filter-job-type">
              Job type
            </label>
            <select
              id="filter-job-type"
              className="form-select form-select-sm"
              value={filters.jobType || ''}
              onChange={(e) => handleChange('jobType', e.target.value)}
            >
              <option value="">All types</option>
              {JOB_TYPES.map((jt) => (
                <option key={jt} value={jt}>
                  {jt}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label small fw-semibold" htmlFor="filter-salary">
              Min salary (GHS/mo)
            </label>
            <input
              id="filter-salary"
              type="number"
              className="form-control form-control-sm"
              placeholder="e.g. 1500"
              value={filters.minSalary || ''}
              onChange={(e) => handleChange('minSalary', e.target.value)}
            />
          </div>
        </>
      )}

      {type === 'apprenticeships' && (
        <div className="mb-3">
          <label className="form-label small fw-semibold" htmlFor="filter-stipend">
            Stipend
          </label>
          <select
            id="filter-stipend"
            className="form-select form-select-sm"
            value={filters.hasStipend || ''}
            onChange={(e) => handleChange('hasStipend', e.target.value)}
          >
            <option value="">Any</option>
            <option value="yes">Paid stipend</option>
            <option value="no">Unpaid</option>
          </select>
        </div>
      )}

      <div className="mb-3">
        <label className="form-label small fw-semibold" htmlFor="filter-sort">
          Sort by
        </label>
        <select
          id="filter-sort"
          className="form-select form-select-sm"
          value={filters.sortBy || 'newest'}
          onChange={(e) => handleChange('sortBy', e.target.value)}
        >
          <option value="newest">Newest first</option>
          <option value="featured">Featured first</option>
          <option value="pay-high">Highest pay</option>
        </select>
      </div>

      <button
        type="button"
        className="btn btn-outline-secondary btn-sm w-100 rounded-pill"
        onClick={() =>
          onChange({
            city: '',
            category: '',
            jobType: '',
            minSalary: '',
            hasStipend: '',
            sortBy: 'newest',
            search: filters.search || '',
          })
        }
      >
        Clear filters
      </button>
    </div>
  )
}

export default FilterPanel
