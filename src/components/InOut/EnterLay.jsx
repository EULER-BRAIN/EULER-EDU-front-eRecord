import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import PLayout from "../Layout/PLayout"

const LeftLay = (props) => {
  return (
    <div>
      <div
        style={{
          fontSize: '20px',
          height: '23px',
          lineHeight: '23px'
        }}
        className="FBold"
      >
        { props.title }
      </div>
      <div>
        { props.number }
      </div>
    </div>
  )
}

const BtnNumer = (props) => {
  const style = useSpring({
    width: 'calc(calc(100% - 10px) / 3)',
    background: `rgba(120,120,120,0.1)`,
    border: '1px solid rgb(200,200,200)',
    borderRadius: '10px'
  })
  const styleText = {
    textAlign: 'center'
  }
  return (
    <animated.div
      style={ style }
      className="BTNC"
      onClick={ props.onClick }
    >
      <div
        style={ styleText }
      >
        { props.children }
      </div>
    </animated.div>
  )
}
BtnNumer.defaultProps = {
  onClick: () => {}
}

const RightLay = (props) => {
  const styleLine = {
    width: '100%', height: 'calc(calc(100% - 40px) / 5)',
    display: 'flex',
    gap: '10px'
  }

  const addNumFunc = (x) => {
    return () => props.setNumber(props.number + x);
  }

  return (
    <div
      style={{
        width: '100%', height: '100%'
      }}
    >
      <div style={ styleLine }>
        <BtnNumer onClick={ addNumFunc(1) }>1</BtnNumer>
        <BtnNumer onClick={ addNumFunc(2) }>2</BtnNumer>
        <BtnNumer onClick={ addNumFunc(3) }>3</BtnNumer>
      </div>
      <div style={{ height: '10px' }}/>
      <div style={ styleLine }>
        <BtnNumer onClick={ addNumFunc(4) }>4</BtnNumer>
        <BtnNumer onClick={ addNumFunc(5) }>5</BtnNumer>
        <BtnNumer onClick={ addNumFunc(6) }>6</BtnNumer>
      </div>
      <div style={{ height: '10px' }}/>
      <div style={ styleLine }>
        <BtnNumer onClick={ addNumFunc(7) }>7</BtnNumer>
        <BtnNumer onClick={ addNumFunc(8) }>8</BtnNumer>
        <BtnNumer onClick={ addNumFunc(9) }>9</BtnNumer>
      </div>
      <div style={{ height: '10px' }}/>
      {
        props.number === "" ? (
          <div style={ styleLine }>
            <BtnNumer
              onClick={ () => props.setNumber('010') }
            >010</BtnNumer>
            <BtnNumer
              onClick={ addNumFunc(0) }
            >0</BtnNumer>
            <BtnNumer
            >취소</BtnNumer>
          </div>
        ) : (
          <div style={ styleLine }>
            <BtnNumer
              onClick={ () => props.setNumber('') }
            >정정</BtnNumer>
            <BtnNumer
              onClick={ addNumFunc(0) }
            >0</BtnNumer>
            <BtnNumer
              onClick={ () => props.setNumber(props.number) }
            >지우기</BtnNumer>
          </div>
        )
      }
    </div>
  )
}

const EnterLay = (props) => {
  const [number, setNumber] = useState('');
  const numberHandler = (x) => {
    setNumber(x);
  }

  return (
    <PLayout>
      <div
        style={{
          position: 'absolute',
          top: '0px', left: '0px',
          height: '100%',
          width: '50%'
        }}
      >
        <LeftLay
          title={ props.title }
          number={ number }
        />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '0px', right: '0px',
          height: '100%',
          width: '50%'
        }}
      >
        <RightLay
          number={ number }
          setNumber={ numberHandler }
        />
      </div>
    </PLayout>
  )
}

export default EnterLay
