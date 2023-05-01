
import React,{useState} from 'react';
import logo from "./logo.svg";
import "./App.css";
//import User from './User';


function  App() {
const [data,setSHOW]=useState(true)


  

    return (
      <div className="App">
      
      <h1>SHOW and HIDE</h1>
      {
        data ? <h2>Hello World!</h2>:null
        
      }
     
 { /*
  <button onClick={()=>{setSHOW(false)}}>HIDE</button>
      <button onClick={()=>{setSHOW(true)}}>SHOW</button> */

    }

    <button onClick={()=>{setSHOW(!data)}}>Toggle</button>
    
     </div>

    );
  
  

  }
  export default App

 
  



