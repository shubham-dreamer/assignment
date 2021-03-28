import logo from './logo.svg';
import './App.css';
import React, {useState}from 'react'

function App() {
  const [data,setdata]=useState(null)
  const [print,setPrint]=useState(false)
  function getData(val){
    setdata(val.target.value)
    setPrint(false)
    console.log(val.target.value)
  }
    return (
    <div className="App">
    
      
     <input type="text" onChange={getData}/>

     <button onClick={()=>setPrint(true)}>Submit </button>
       {
        print?
        
        <h1>{data}</h1>
        :null
      }
    </div>
  );
}

export default App;
