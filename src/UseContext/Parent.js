import Child from "./Child";
import { useState,useEffect,useRef, useCallback } from "react";


function Parent({data,del}) {
    const inputref=useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [val, setVal] = useState(true);

    const submit=useCallback((e)=>
    {
        e.preventDefault();
        if (name.length === 0 || email.length === 0) {
            setVal(false)
        }
        else {
            const dat = {
                id: Math.floor(Math.random() * 1000),
                name: name,
                email: email
            }
            data(dat)
            setName('');
            setEmail('');
        }
    },[name,email,data]) 

    function names(e) {
        if (name.length > 0 || email.length > 0) {
            setVal(true)
        }
        setName(e.target.value)
    }
    function emails(e) {
        if (email.length > 0 || name.length > 0) {
            setVal(true)
        }
        setEmail(e.target.value)
    }

    useEffect(()=>{
        if(name.length>3 && email.length>10){
            inputref.current.focus()
        }
    },[name,email])

    return (
        <div>
            <form onSubmit={submit}>
                <h1>Log In</h1>
                <div>
                    <input type='text' value={name} onChange={names} placeholder="Name" style={{ outline: val ? "none" : "3px solid green" }} />
                </div>
                <div>
                    <input type='email' value={email} onChange={emails} placeholder="Email Address" style={{ outline: val ? "none" : "3px solid green" }} />
                </div>
                <div>
                    <input type='submit' value="Submit" ref={inputref}/>
                </div>
            </form>
            <Child del={del}></Child>
        </div>
    )
}
export default Parent;