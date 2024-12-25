import { useEffect, useState } from 'react'
import './App.css'
import usePrevious from './hooks/usePrevious';
import useWindowSize from './hooks/useWindowSize';
import useLocalStorage from './hooks/useLocalStorage';
import useGeoLocation from './hooks/useGeoLocation';

function App() {

  const [count,setCount] = useState(0);
  const prev = usePrevious(count);

  const size = useWindowSize();
  const [v,setV,removeV] = useLocalStorage('v','something');

  const pos = useGeoLocation();
  
  useEffect(()=>{
    console.log(size);
    console.log(pos);
  },[size,pos]);

  return (
    <>
      Current Count : {count}
      <br/>
      Previous Count : {prev}
      <br/>
      <button onClick={() => setCount(count+1)}>Click</button>
      <button onClick={() => setV(count)}>
        Add to local storage
      </button>
      {v}
      <button onClick={() => removeV()}>
        Remove from local storage
      </button>
    </>
  )
}

export default App;
