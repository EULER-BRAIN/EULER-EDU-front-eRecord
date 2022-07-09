import { useState } from 'react';
import InOutSelect from './components/InOutSelect/InOutSelect';
import In from './components/InOut/In';

import './App.css';

const App = () => {
  const [page, setPage] = useState("inOutSelect");
  let body = null;
  
  console.log(page === "inOutSelect");
  if (page === "inOutSelect") {
    body = <InOutSelect
      setPage = { (x) => setPage(x) }
    />
  }
  else if (page === "in") {
    body = <In
      setPage = { (x) => setPage(x) }
    />
  }

  return (
    <div style={{
      width: '100%',
      height: '100%'
    }}>
      { body }
    </div>
  );
}

export default App;
