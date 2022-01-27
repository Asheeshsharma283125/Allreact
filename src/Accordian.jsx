import React, { useState } from 'react';
import './index.css';
import arr from './Apiaccordian';
import Ques from './Ques';
const App=()=>{
    const [full,set]=useState(arr);
    return(<>
        <div className="main-box">
            <h2>Do you have any question?</h2>
            {
                full.map((arr)=>{
                    return <Ques
                        key={arr.id}
                        question={arr.question}
                        answer={arr.answer}
                    />
                })
            }
        </div>
    </>);
}
export default App;