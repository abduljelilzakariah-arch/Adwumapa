import { useEffect } from 'react'

const ToastAlert = ({ show, message, type = 'success', onClose }) => {
  useEffect(() => {
    if (!show) return undefined
    const timer = setTimeout(onClose, 4000)
    return () => clearTimeout(timer)
  }, [show, onClose])

  if (!show) return null

  const bgClass = type === 'success' ? 'text-bg-success' : 'text-bg-danger'

  return (
    <div className="toast-container toast-container-adwuma position-fixed top-0 end-0 p-3">
      <div className={`toast show align-items-center ${bgClass} border-0`} role="alert">
        <div className="d-flex">
          <div className="toast-body fw-semibold">
            <i className={`bi ${type === 'success' ? 'bi-check-circle' : 'bi-exclamation-circle'} me-2`} aria-hidden="true" />
            {message}
          </div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            aria-label="Close"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  )
}

export default ToastAlert
