import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import PLayout from "../Layout/PLayout"

const LeftLay = (props) => {
  const styleText = {
    fontSize: '30px', 
    textAlign: 'center',
    color: 'rgb(120,120,120)'
  }
  return (
    <div style={{
      width: '100%',
      height: '100%'
    }}>
      <div
        style={{
          fontSize: '30px',
          height: '35px',
          lineHeight: '35px'
        }}
        className="FBold"
      >
        { props.title }
      </div>
      <div style={{ height: 'calc(50% - 120px)' }} />
      {
        props.number === "" ? (
          <div
            style={{
              ...styleText,
              color: 'rgb(200,200,200)'
            }}
            className="FBold"
          >번호를 입력하세요</div>

        ) : (
          <div
            style={ styleText }
            className="FBold"
          >
            { props.number }
          </div>
        )
      }
    </div>
  )
}

const BtnNumer = (props) => {
  const style = useSpring({
    position: 'relative',
    width: 'calc(calc(100% - 10px) / 3)',
    background: `rgba(120,120,120,0.1)`,
    border: '1px solid rgb(200,200,200)',
    borderRadius: '10px'
  })
  const styleText = {
    position: 'absolute',
    top: 'calc(50% - 12px)',
    left: '0px',
    width: '100%',
    height: '24px',
    lineHeight: '24px',
    textAlign: 'center',
    fontSize: '24px'
  }
  return (
    <animated.div
      style={ style }
      className="BTNC"
      onClick={ props.onClick }
    >
      <div
        style={ styleText }
        className="FRegular"
      >
        { props.children }
      </div>
    </animated.div>
  )
}
BtnNumer.defaultProps = {
  onClick: () => {}
}

const BtnRightBtm = (props) => {
  const style = useSpring({
    position: 'relative',
    width: '100%',
    background: `rgba(48,101,172,0.5)`,
    border: '1px solid rgb(200,200,200)',
    borderRadius: '10px'
  })

  return (
    <animated.div
      style={ style }
      className="BTNC"
    >

    </animated.div>
  )
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
  const onDelete = () => {
    const len = props.number.length;
    props.setNumber(props.number.slice(0, len - 1));
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
              onClick={ props.onClose }
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
              onClick={ onDelete }
            >지우기</BtnNumer>
          </div>
        )
      }
      <div style={{ height: '10px' }}/>
      <div style={ styleLine }>
        <BtnRightBtm s/>
      </div>
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
          onClose={ props.onClose }
        />
      </div>
    </PLayout>
  )
}

export default EnterLay
