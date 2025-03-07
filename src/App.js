
import './style.css';
import Products from './Components/Products';
import { useState } from 'react';


function clickOnButton() {
  console.log("Radi");
}



function App() {
  //promjena imena i gumba
  let [name, setName] = useState("Hello world"); //"use" -> Hook

  function changeName(e) {
    setName(e.target.value);
    console.log(name);
  }
  //Promjena tax
  let [tax, setTax] = useState(0);

 
  return (
    <>
   
    <hr/>
    <Products tax={tax}/>
    <hr/>
    <Products tax="25"/>
    <hr/>
    <Products tax="55"/>
    <hr/>
    <button onClick={clickOnButton}>{name}</button>
    <h1>my name is {name}</h1>
    <input type='text' placeholder='Unesite novo ime.' onInput={ (e) => {setName(e.target.value)}}/>
    <br/><hr/>
    <input type='text'placeholder='Unesite novu vrijednos poreza.' onInput={ (e) => { setTax(e.target.value)}}/>
        </>
    
  );
}

export default App;
