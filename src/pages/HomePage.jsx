import { Link } from 'react-router-dom'
import Hero from '../components/layout/Hero'
import FeaturedCarousel from '../components/cards/FeaturedCarousel'
import CategoryChips from '../components/ui/CategoryChips'

const HomePage = () => {
  const steps = [
    { icon: 'bi-megaphone', title: 'Post', text: 'Companies and artisans share openings in minutes.' },
    { icon: 'bi-search', title: 'Discover', text: 'Browse jobs and apprenticeships near your city.' },
    { icon: 'bi-send-check', title: 'Apply', text: 'Tap apply — no long signup, no stress.' },
  ]

  return (
    <>
      <Hero />

      <div className="container pb-5">
        <FeaturedCarousel />

        <section className="mb-5 text-center">
          <h2 className="fw-bold text-adwuma-green mb-2">Browse by trade</h2>
          <p className="text-muted mb-4">Tap a category to see matching opportunities</p>
          <CategoryChips basePath="/jobs" />
        </section>

        <section className="mb-5">
          <div className="row g-3 d-lg-none mb-4">
            <div className="col-6">
              <div className="card border-0 shadow-sm text-center p-3 bg-white rounded-4">
                <div className="fw-bold text-adwuma-green fs-4">500+</div>
                <div className="small text-muted">Local jobs</div>
              </div>
            </div>
            <div className="col-6">
              <div className="card border-0 shadow-sm text-center p-3 bg-white rounded-4">
                <div className="fw-bold text-adwuma-green fs-4">120+</div>
                <div className="small text-muted">Apprenticeships</div>
              </div>
            </div>
          </div>

          <h2 className="fw-bold text-adwuma-green text-center mb-4">How Adwumapa works</h2>
          <div className="row g-4">
            {steps.map((step) => (
              <div key={step.title} className="col-md-4 text-center">
                <div className="how-step-icon">
                  <i className={`bi ${step.icon}`} aria-hidden="true" />
                </div>
                <h5 className="fw-bold">{step.title}</h5>
                <p className="text-muted small mb-0">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center py-4 px-3 bg-white rounded-4 shadow-sm">
          <h3 className="fw-bold mb-3">Ready to get started?</h3>
          <p className="text-muted mb-4">Whether you need work or want to train someone — Adwumapa connects you locally.</p>
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            <Link to="/jobs" className="btn btn-adwuma px-4">
              Browse Jobs
            </Link>
            <Link to="/apprenticeships" className="btn btn-adwuma-outline px-4">
              Find Apprenticeship
            </Link>
            <Link to="/post" className="btn btn-gold px-4">
              Post a Listing
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

export default HomePage
