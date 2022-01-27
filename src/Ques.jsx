import React, { useState } from 'react';
import './index.css';
const Ques=(props)=>{
    const [fun,set2]=useState(false);
    function open(){
        set2(!fun);
    }
    return (<>
        <div className='box'>
            <button onClick={open}>{fun? "-" : "+" }</button>
            <span>{props.question}</span>
            <span className='ques'>{fun && <p><b>Answer:-</b> {props.answer}</p>}</span>
       </div>
    </>);
}
export default Ques;