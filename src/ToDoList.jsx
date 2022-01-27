import React, { useState } from 'react';
import './index.css';
import Make from './Li';
function App(){
   
    const [num,set]=useState("");
    const [full,set2]=useState([]);
    function add(){
        set2([...full,num]);
    }
    function text(event){
        set(event.target.value);
    }
    const no=(event)=>{
        event.preventDefault();
    }
    const del = (id)=>{
        return (<>
            {set2(full.filter((arr,index)=>{
                return index!==id;
            }))}
        </>);
    }
    
    return(
        <>
        <div className='cover'>
            <br/>
            <h2>ToDoList</h2>
            <br/>
            <form onSubmit={no} className='input'><input type="text" placeholder='Add a items' onChange={text}/><button type="submit" className='button' onClick={add}>+</button></form>
            <br/>
            <div className='list'>
            {full.map((old,index)=>{
                return <><Make id={index}
                key={index}
                onsubmit={del}
                text={old}
                /></>
            })}
            </div>
        </div>
        </>
    );
}

export default App;