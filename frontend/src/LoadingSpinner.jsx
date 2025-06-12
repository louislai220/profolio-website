const LoadingSpinner = ({ size = '40px', color = '#007bff', ariaLabel = 'Loading' }) => (
  <div
    className="loading-spinner"
    style={{
      width: size,
      height: size,
      border: `4px solid ${color}`,
      borderTop: '4px solid transparent',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      margin: '20px auto'
    }}
    role="status"
    aria-label={ariaLabel}
  />
);

export default LoadingSpinner;
