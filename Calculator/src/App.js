import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React,{useState} from 'react';
import './App.css';

const App = ()=>{

  const [result, setResult] =useState("");

  //Function to show values on screen when clicked on it.
  const clickHandler=(event)=>{
    setResult(result + event.target.value);
  }

  //Function to clear screen/display
  const clearDisplay =()=>{
    setResult("");
  }

  //Function to evaluate the result
  const calculateResult =()=>{
    try{
    setResult(eval(result).toFixed(5)); //fixes to 5 decimal places
    }
    catch{
      setResult("Error");
    }
  }

   //Function to cut or backspace
  const backSpace =()=>{
    setResult(result.slice(0,result.length-1));
  }

  return (
    <>
    <h1 className='title'><i>BASIC CALCULATOR</i></h1>
    <div className="calc">
      <input type="text" placeholder='0' id='answer' value={result} />
      <input type="button" value= 'Cls'  className='button' onClick={clearDisplay}/>
      <input type="button" value= ' C' className='button' onClick={backSpace}/>
      <input type="button" value= '/'  className='button' onClick={clickHandler}/>
      <input type="button" value= '+'  className='button'onClick={clickHandler}/>
      <input type="button" value= '7'  className='button' onClick={clickHandler}/>
      <input type="button" value= '8'  className='button' onClick={clickHandler}/>
      <input type="button" value= '9'  className='button'onClick={clickHandler}/>
      <input type="button" value= '*'  className='button' onClick={clickHandler}/>
      <input type="button" value= '4'  className='button' onClick={clickHandler}/>
      <input type="button" value= '5'  className='button' onClick={clickHandler}/>
      <input type="button" value= '6'  className='button' onClick={clickHandler}/>
      <input type="button" value= '-'  className='button' onClick={clickHandler}/>
      <input type="button" value= '1'  className='button' onClick={clickHandler}/>
      <input type="button" value= '2'  className='button' onClick={clickHandler}/>
      <input type="button" value= '3'  className='button' onClick={clickHandler}/>
      <input type="button" value= '%'  className='button' onClick={clickHandler}/>
      <input type="button" value= '0'  className='button' onClick={clickHandler}/>
      <input type="button" value= '.'  className='button' onClick={clickHandler}/>
      <input type="button" value= '='  className='button btn' onClick={calculateResult}/>

      </div>
      </>
  );
}

export default App;




