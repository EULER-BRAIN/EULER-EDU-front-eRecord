
import { useState, useRef, useEffect } from "react";

const useCompSize = (contRef) => {
  const getSize = () => {
    if (!contRef.current) return [0, 0];
    return [
      contRef.current.offsetWidth,
      contRef.current.offsetHeight
    ];
  }

  const stateR = useRef(getSize());
  const [state, setState] = useState(stateR.current);
  
  useEffect(() => {
    const resizeEvent = () => {
      const _state = getSize();
      if (stateR.current !== _state) {
        stateR.current = _state;
        setState(_state);
      }
    };
    resizeEvent();
    window.addEventListener("resize", resizeEvent);
    return () => window.removeEventListener("resize", resizeEvent);
  }, [contRef.current]);

  return state;
}

export default useCompSize
