import React from 'react';
import { useState } from 'react/cjs/react.development';
import Card,{Nav} from "./Cards";
import Arr from "./Cardsarray";
import "./index.css";

const f="Netflix";


function Rof(){
    
    const [count,run]=useState("Amazon");
    function Chnet(){
        run("Netflix");
    }
    function Chamz(){
        run("Amazon");
    }

    if("Netflix" === count){
        return (<>
        <div className="radio">
        <div className='span' onClick={Chnet}>Netflix</div>
        <div className='span' onClick={Chamz}>Amazon</div>
        </div>
         <Card key={Arr[0].id} imgsrc={Arr[0].imgsrc} link={Arr[0].link} name={Arr[0].name}/>
         <Card key={Arr[2].id} imgsrc={Arr[2].imgsrc} link={Arr[2].link} name={Arr[2].name}/>
         <Card key={Arr[4].id} imgsrc={Arr[4].imgsrc} link={Arr[4].link} name={Arr[4].name}/>
    </>
    );
    }
    else{
        return (<>
        <div className='radio'>
        <div className='span' onClick={Chnet}>Netflix</div>
        <div className='span' onClick={Chamz}>Amazon</div>
        </div>
         <Card key={Arr[1].id} imgsrc={Arr[1].imgsrc} link={Arr[1].link} name={Arr[1].name}/>
         <Card key={Arr[3].id} imgsrc={Arr[3].imgsrc} link={Arr[3].link} name={Arr[3].name}/>
         </>
        );
    }
}
function Cardarr(){
    return (
        <>
    <Nav/>

    <div className="whole">
    <Rof/>
    </div>
        </>
    )
}
export default Cardarr;