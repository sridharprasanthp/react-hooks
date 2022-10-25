import './App.css';
import Parent from './UseContext/Parent';
import { createContext, useState } from 'react';
import UseReducer from './UseReducer/UseReducer';
import UseRef from "./UseRef/UseRef";

export const Context = createContext();
function App() {
  const [appear, setAppear] = useState(true)
  const [data, setData] = useState([]);

  function datas(get) {
    setData((dat) => {
      return [get, ...dat]
    })
  }

  function dels(id) {
    setData((dat) => {
      return dat.filter((dt) => dt.id !== id)
    })
  }

  function change() {
    setAppear(false)
  }
  function unchange() {
    setAppear(true)
  }
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <hr/>
      {appear && 
      (<div>
        <Context.Provider value={data}>
        <Parent data={datas} del={dels}></Parent>
      </Context.Provider> 
      <UseRef></UseRef>
      <br/>
      <button onClick={change}> Go to useReducer</button> 
      </div>) }
      {!appear &&
       <UseReducer change={unchange}></UseReducer>}
    </div>
  );
}

export default App;
