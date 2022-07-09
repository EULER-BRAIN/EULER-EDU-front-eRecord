import EnterLay from "./EnterLay"

const Out = (props) => {
  return (
    <EnterLay
      title="하원"
      onClose={ () => props.setPage("inOutSelect") }
    />
  )
}

export default Out
