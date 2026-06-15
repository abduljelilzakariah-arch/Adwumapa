import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import MobileBottomNav from './components/layout/MobileBottomNav'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import ApprenticeshipsPage from './pages/ApprenticeshipsPage'
import FeaturedPage from './pages/FeaturedPage'
import ListingDetailPage from './pages/ListingDetailPage'
import PostListingPage from './pages/PostListingPage'
import DashboardPage from './pages/DashboardPage'

const App = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/apprenticeships" element={<ApprenticeshipsPage />} />
          <Route path="/featured" element={<FeaturedPage />} />
          <Route path="/listing/:id" element={<ListingDetailPage />} />
          <Route path="/post" element={<PostListingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>
      <Footer />
      <MobileBottomNav />
    </BrowserRouter>
  )
}

export default App
