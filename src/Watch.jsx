import React, { useState } from 'react';
import './index.css';



function Time (){
    var a = new Date().toLocaleTimeString();
    var [hour,run]=useState(a);
    
    function Click(){
            a = new Date().toLocaleTimeString();
            run(a);
    }
    setInterval(Click,1000);
    // setInterval(Click,1000);
    return (
        <>
        <Nav/>
        <h1 className="number">{hour} <span>{"PM"}</span></h1>
            <button onClick={Click} className="button">
                Click Me
            </button>
        </>
    );
}

function Nav(){
    return (
     <div className="nav">
         <h2>List of my favourate webseries</h2>
     </div>
 );
 }


function App(){
    return(
        <>
        <Nav/>
        <Time/>
        </>
    );
}
export default App;