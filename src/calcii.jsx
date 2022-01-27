import React from "react";
import './index.css';

function App(){
    return (
    <>
    <div className="calc">
        <input type="text" placeholder="Enter values" align="right"/>
        <div className="head">
       <ol>
           <li>C</li>
           <li>%</li>
           <li></li>
           <li>?</li>
       </ol>
       <ol>
            <li>7</li>
           <li>8</li>
           <li>9</li>
           <li>*</li>
       </ol>
       <ol>
           <li>4</li>
           <li>5</li>
           <li>6</li>
           <li>-</li>
       </ol>
       <ol>
           <li>1</li>
           <li>2</li>
           <li>3</li>
           <li>+</li>
       </ol>
       <ol>
           <li>00</li>
           <li>0</li>
           <li>.</li>
           <li>=</li>
       </ol>
       </div>
       </div>
        </>
    );
}
export default App;