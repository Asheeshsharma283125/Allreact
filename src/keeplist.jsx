import React from 'react';
const List =(props)=>{
    return (<>
        <div className='box'>
            <h3>{props.title}</h3>
            <textarea>{props.des}</textarea>
            <i className="fa fa-trash" onClick={()=>{props.fun(props.id);}}></i>
        </div>
    </>);
}
export default List; 