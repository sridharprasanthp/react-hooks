import { useState,useRef, useEffect, useCallback } from "react";
function UseRef(){
    const[store,setStore]=useState([])
    const[val,setVal]=useState("");
    
    const inputref=useRef("");
    const ref=useCallback(()=>{
        if(val.length===0){
            alert("No input")
        }else{
        // console.log(val)
        const data={
            name:val
        }
        setStore((stor)=>{
            return [data,...stor]
        })
        setVal("")
        }
    },[val])

    useEffect(()=>{
        if(val.length>=10){
            inputref.current.focus() 
        // inputref.current=val;
         }
    },[val]);
   
    return(
        <div>
            <div>
                <h1>useRef</h1>
            <input type='text'  value={val} onChange={(e)=>setVal(e.target.value)}  onKeyPress={(e)=>e.key==="Enter" && ref()}/>
            </div>
            <div>
                
            <button onClick={ref} ref={inputref}>click</button>
            </div>
            {store.map((st,index)=>
            <div key={index}>
                <p>{st.name}</p>
            </div>)}
            {/* <h1>current value:{val}</h1>
            <h2>previous:{inputref.current}</h2> */}
        </div>
    )
}

export default UseRef;