import { useRef } from "react";
import PLayout from "../Layout/PLayout";
import useCompSize from "../Layout/useCompSize";

const BtnSelect = (props) => {
  const style = {
    width: '100%',
    height: '100%',
    background: props.background,
    borderRadius: '15px'
  }

  return (
    <div
      style={ style }
      className="BTNC"
      onClick={ props.onClick }
    >
      <div
        style={{
          textAlign: 'center',
          color: 'white'
        }}
      >{ props.text }</div>
    </div>
  )
}
const BtnSelectLay = (props) => {
  const bodyRef = useRef();
  const bodySize = useCompSize(bodyRef);
  const boxSize = Math.min(bodySize[0], bodySize[1]);
  
  const style = {
    position: 'absolute',
    width: `${ boxSize }px`,
    height: `${ boxSize }px`,
    top: `${ (bodySize[1] - boxSize) / 2 }px`
  };
  if (props.left) style.right = '0px';
  if (props.right) style.left = '0px';

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}
      ref={ bodyRef }
    >
      <div style={ style }>
        <BtnSelect
          text={ props.text }
          background={ props.background }
          onClick={ props.onClick }
        />
      </div>
    </div>
  )
}

const InOutSelect = (props) => {
  return (
    <PLayout>
      <div style={{
        position: 'absolute',
        top: '0px', left: '0px',
        width: 'calc(50% - 10px)',
        height: '100%'
      }}>
        <BtnSelectLay
          text="등원"
          background="#7fd24b"
          onClick={ () => props.setPage("in") }
          left
        />
      </div>
      <div style={{
        position: 'absolute',
        top: '0px', right: '0px',
        width: 'calc(50% - 10px)',
        height: '100%'
      }}>
        <BtnSelectLay
          text="하원"
          background="#df8382"
          onClick={ () => props.setPage("out") }
          right
        />
      </div>
    </PLayout>
  )
}

export default InOutSelect;
