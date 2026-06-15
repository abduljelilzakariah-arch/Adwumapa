const LoadingSpinner = ({ message = 'Loading...' }) => {
  return (
    <div className="text-center py-5" role="status" aria-live="polite">
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">{message}</span>
      </div>
      <p className="text-muted mt-3 mb-0">{message}</p>
    </div>
  )
}

export default LoadingSpinner
