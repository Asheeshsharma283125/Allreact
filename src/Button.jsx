import React, { useState } from 'react';
import './index.css';

function Nav(){
    return (
     <div className="nav">
         <h2>This is increment Button with the help of useState function hook</h2>
     </div>
 );
 }


const App = () =>{
    
    const state = useState();
    const [count,run]= useState(0);
    function Ashu(){
        run(count+1);
    
}
     return (
        <>
            <Nav/>
            <h1 className="number">{count}</h1>
            <button onClick={Ashu} className="button">
                Click Me
            </button>
        </>
     );
 }
 export default App;