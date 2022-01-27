import React, { useState } from 'react';
import './index.css';



function Time (){
   var [ashu,run]=useState(0);
   var [ashu1,run1]=useState(0);
   var [ashu2,run2]=useState(0);
   var [ashu3,run3]=useState(0);
    
    function Start(){
        if(ashu2<59){
            run2(ashu2+1);
        }
        else if(ashu1<60){
            run2(0);
            run1(ashu1+1);
        }
        else{
            run(ashu+1);
            run1(0);
            run2(0);
        }
    }
    
    // setInterval(Start,10000);
    
    function Reset(){
        run(0);
        run1(0);
        run2(0);
        run3(0);
    }
    function Stop(){
        run(0);
        run1(0);
        run2(0);
        run3(0);
    }
    
   
    return (
        <>
        <Nav/>
        <h1 className="number"><span>{ashu}</span>:<span>{ashu1}</span>:<span>{ashu2}</span>:<span>{ashu3}</span></h1>
        <div className='bottonhead'>
            <button onClick={Start} className="button">
                Start
            </button>
            <button onClick={Stop} className="button">
                Stop
            </button>
            <button onClick={Reset} className="button">
                Reset
            </button>
            </div>
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