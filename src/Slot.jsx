import React from 'react';
import './index.css';

function Blocks(){
    
    return (
        <>
            <Nav/>
            <div className="cover">
            <div className="blocks">
                <Block a="😄" b="😄" c="😄"/>
                <Block a="😄" b="🏹" c="😄"/>
                <Block a="🤣" b="😄" c="🤣"/>
                <Block a="🍎" b="🍎" c="🍍"/>
                <Block a="🍌" b="🍌" c="🍌"/>
            </div>
            </div>
        </>
    );
}
function Block(props){
    let a;
    if((props.a===props.b) && (props.b===props.c)){
        a = "This is matching";
    }
    else{
        a = "this is not matching";
    }
    return (
        <>
            <div className="block"><span>{props.a}{props.b}{props.c}</span><span>{a}</span></div>
        </>
    );
}
function Nav(){
    return (<>
            <div className="nav">
            <h2>🎰 This is Slot Machine Game made by Asheesh sharma 🖐️</h2>
            </div>
    </>);
}

export default Blocks;