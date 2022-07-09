const PLayout = (props) => {
  return (
    <div
      style={{
        padding: '20px',
        width: 'calc(100% - 40px)',
        height: 'calc(100% - 40px)',
      }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        { props.children }
      </div>
    </div>
  );
}

export default PLayout
