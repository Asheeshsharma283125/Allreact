import React from 'react';
import { useState } from 'react/cjs/react.development';
import './index.css';
function App(){
    const [name,set]=useState();
    const [pass,set1]=useState();
    const [sub,set2]=useState();
    function Nav(){
        return (<>
            <div className='nav'>
                <h2>This is mine</h2>
            </div>
        </>);
    }
    const click = (event)=> {
        console.log(event.target.value);
        set(event.target.value);
    };
   const click1=(event)=>{
        set1(event.target.value);
   }
   const click2= (event)=>{
       event.preventDefault();
       set2(name);
   }
    return <>
        <Nav/>
        <div>
        <h1>Hello {sub}</h1>
       <form onSubmit={click2}>
        <input className='text' type="text" placeholder="Enter the Name" onChange={click} required/>
        <input className='text' type="password" placeholder="Enter the Name" onChange={click1} value={pass} required/>
        <input type="submit" placeholder='Submit' className='button'/>
       </form>
       
        </div>
    </>
}

export default App;