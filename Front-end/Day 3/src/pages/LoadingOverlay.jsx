const LoadingOverlay = () => {
  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  };

  const imgStyles = {
    width: '300px', 
    height: '300px', 
  };

  return (
    <div style={overlayStyles}>
      <img
        src='https://res.cloudinary.com/dbhfpccxj/image/upload/v1708935179/loading_qbrywf.gif' 
        alt="Loading..."
        style={imgStyles}
      />
    </div>
  );
};

export default LoadingOverlay;