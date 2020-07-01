// import statements
import React from 'react'
import ReactDOM from 'react-dom'




//react components
const App = () => {


function getButtonText(){

  return 'Click Me';
  
}



   return (<div>
     <label className="label" htmlFor="name">Enter your name:</label>
     <input name="name" type="text"></input>
     <button style={{backgroundColor: 'red', color:'white'}}>
       { getButtonText() }
     </button>




   </div>);
  
};




//display them

ReactDOM.render(
  <App />,
  document.querySelector('#root')

);