import { useNavigate } from 'react-router-dom'
import { CATEGORIES } from '../../data/seed'

const CategoryChips = ({ activeCategory, basePath = '/jobs' }) => {
  const navigate = useNavigate()

  const handleClick = (category) => {
    navigate(`${basePath}?category=${encodeURIComponent(category)}`)
  }

  return (
    <div className="d-flex flex-wrap gap-2 justify-content-center">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          type="button"
          className={`category-chip ${activeCategory === cat ? 'active' : ''}`}
          onClick={() => handleClick(cat)}
          aria-pressed={activeCategory === cat}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryChips
