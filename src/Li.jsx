import React from 'react';

function Make(props){
    return(<>
       <div><span>{props.text}</span><i className="fa fa-trash" onClick={()=>{
           props.onsubmit(props.id);
       }}></i></div>
    </>);
}
export default Make;