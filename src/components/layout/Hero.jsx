import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CITIES } from '../../data/seed'

const Hero = () => {
  const [search, setSearch] = useState('')
  const [searchType, setSearchType] = useState('jobs')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    const path = searchType === 'jobs' ? '/jobs' : '/apprenticeships'
    navigate(`${path}?search=${encodeURIComponent(search)}`)
  }

  const handleCityClick = (city) => {
    navigate(`/jobs?city=${encodeURIComponent(city)}`)
  }

  return (
    <section className="hero-section py-5 py-lg-6 mb-4">
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center">
          <div className="col-lg-7">
            <span className="badge bg-warning text-dark mb-3 px-3 py-2 rounded-pill fw-semibold">
              <i className="bi bi-geo-alt me-1" aria-hidden="true" />
              Jobs & skills across Ghana
            </span>
            <h1 className="display-5 fw-bold mb-3">
              Find work near you.
              <br />
              <span className="text-warning">Learn a trade.</span>
            </h1>
            <p className="lead mb-4 opacity-90">
              Companies post jobs. Artisans train apprentices. You apply in one tap — no long forms, no stress.
            </p>

            <form onSubmit={handleSearch} className="mb-4">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <button
                  type="button"
                  className={`btn btn-sm rounded-pill px-3 ${searchType === 'jobs' ? 'btn-gold' : 'btn-outline-light'}`}
                  onClick={() => setSearchType('jobs')}
                >
                  Jobs
                </button>
                <button
                  type="button"
                  className={`btn btn-sm rounded-pill px-3 ${searchType === 'apprenticeships' ? 'btn-gold' : 'btn-outline-light'}`}
                  onClick={() => setSearchType('apprenticeships')}
                >
                  Apprenticeships
                </button>
              </div>
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-white border-0 ps-3">
                  <i className="bi bi-search text-muted" aria-hidden="true" />
                </span>
                <input
                  type="search"
                  className="form-control search-hero-input"
                  placeholder="Search title, trade, or company..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search listings"
                />
                <button type="submit" className="btn btn-gold px-4 fw-bold">
                  Search
                </button>
              </div>
            </form>

            <div className="d-flex flex-wrap gap-2">
              {CITIES.map((city) => (
                <button
                  key={city}
                  type="button"
                  className="btn btn-sm btn-outline-light rounded-pill"
                  onClick={() => handleCityClick(city)}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          <div className="col-lg-5 d-none d-lg-block">
            <div className="row g-3 mt-2">
              <div className="col-6">
                <div className="stat-pill">
                  <div className="display-6 fw-bold text-warning">500+</div>
                  <div className="small opacity-90">Local jobs</div>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-pill">
                  <div className="display-6 fw-bold text-warning">120+</div>
                  <div className="small opacity-90">Apprenticeships</div>
                </div>
              </div>
              <div className="col-12">
                <div className="stat-pill">
                  <i className="bi bi-star-fill text-warning me-2" aria-hidden="true" />
                  Featured listings get 3× more views
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
