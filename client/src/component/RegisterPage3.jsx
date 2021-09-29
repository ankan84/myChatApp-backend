import React,{useState} from 'react'
import { useHistory } from "react-router-dom";

function RegisterPage3() {
    const  history=useHistory();
   const [name,setName]=useState('')
    return (
        <div className="container">
            <div className="information">
                <h1>Name</h1>
                <input type="text" onChange={(e)=>{
                    setName(e.target.value);

                }}   className="input_style"/>
                <button onClick={()=>{
                        history.push(`/chat/${name}`)
                }}> Enter</button>
            </div>
             
        </div>
    )
}

export default RegisterPage3
