import EnterLay from "./EnterLay"

const In = (props) => {
  return (
    <EnterLay
      title="등원"
      onClose={ () => props.setPage("inOutSelect") }
    />
  )
}

export default In
