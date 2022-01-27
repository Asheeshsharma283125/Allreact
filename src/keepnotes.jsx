import React, { useState } from 'react';
import './index.css';
import List from './keeplist';

const App=()=>{
    const [arr,set]=useState([]);
    const [arr2,set2]=useState({
        title:"",
        des:""
    });
    const [show,set3]=useState(false);
    function Nav(){
        return (<>
            <div className="nav">
            <i class="fa fa-book"></i><span>Asheesh Notes</span>
            </div>
        </>);
    }
    function titlef(event){
        const ass=event.target.value;
        set2({
            ...arr2,
            title:ass
        });
    }
    function desf(event){
        const as=event.target.value;
        set2({
            ...arr2,
            des:as
        });
    }
    function open(){
        set3(!show);
    }
    const dele=(id)=>{
        alert(id);
    //    set((old)=>{
    //     old.filter((current,ind)=>{
    //         return ind!==id;
    //     })
    //    })
    }

    function save(){
        set([...arr,{
            title1:arr2.title,
            des1:arr2.des
        }]);
    }
    return (<>
        <Nav/>
        <div className="main">
                <div className='main-box'>
                    {!show && <input type='text' placeholder='Title...' onClick={open} className="input" /> }
                    {show && <input type='text' placeholder='Title' onChange={titlef} className="input" value={arr2.title}/> }
                    {show && <textarea type='text' placeholder='Write a note...' onChange={desf} className="input1" value={arr2.des}/>}
                    <span onClick={save}>+</span>
                </div>
            </div>
        <div className='whole'>
        {arr.map((arrr,index)=>{
            return (<>
                <List 
                id={index}
                key={index}
                des={arrr.des1}
                title={arrr.title1}
                fun={dele}
                />
            </>);
        })}
        </div>

    </>);
}
export default App;