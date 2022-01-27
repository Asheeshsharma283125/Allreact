import React,{useState} from 'react';
import './index.css';

function App(){
    function Nav(){
        return (<>
            <div className='nav'>
                <h2>This is mine</h2>
            </div>
        </>);
    }
    const [fullname,set]=useState({
        fname:"",
        lname:"",
        as:""
        
    });
    const click=(event)=>{
        const valu=event.target.value;
        const nam=event.target.name;
        set((prev)=>{
            if("fname"===nam){
               return {fname:valu,
                lname:prev.lname
            };
            }
            else{
                return{
                    fname:prev.fname,
                    lname:valu
                };
            }
        });
    }
    const click2= (event)=>{
        event.preventDefault();
        const ashu=fullname.fname+" "+fullname.lname;
        set((prev)=>{
            return {as:ashu}
        })
    }

    return (<>
    <Nav/>
    <div>
    <h1>Hello {fullname.as}</h1>
   <form onSubmit={click2}>
    <input className='text' type="text" placeholder="Enter the Name" name="fname" onChange={click} required/>
    <input className='text' type="text" placeholder="Enter the Name" name="lname" onChange={click} required/>
    <input type="submit" placeholder='Submit' className='button'/>
   </form>
   
    </div>
</>);
}
export default App;







