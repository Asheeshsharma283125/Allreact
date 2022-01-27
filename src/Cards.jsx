import React from "react";
import "./index.css";

function Nav(){
   return (
    <div className="nav">
        <h2>List of my favourate webseries</h2>
    </div>
);
}
function Card(props){
    return(
        <>
            <div className="cardss">
            <div className="card">
                    <img src={props.imgsrc} alt="no image"/>
                    <div className="info">
                    <span>NETFLIX ORIGINAL SERIES</span>
                    <h3>{props.name}</h3>
                    <a href={props.link}>WATCH NOW</a>
                    </div>
            </div> 
            </div>
        </>
    );
}
export default Card;
export {Nav};
