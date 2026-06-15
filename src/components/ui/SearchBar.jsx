const SearchBar = ({ value, onChange, placeholder = 'Search listings...', onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) onSubmit(value)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <span className="input-group-text bg-white">
          <i className="bi bi-search text-muted" aria-hidden="true" />
        </span>
        <input
          type="search"
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search"
        />
        <button type="submit" className="btn btn-adwuma">
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar
