const PLayout = (props) => {
  return (
    <div
      style={{
        padding: '30px',
        width: 'calc(100% - 60px)',
        height: 'calc(100% - 60px)',
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
