import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

const list = [{
    link: '../music/what.mp3',
    photo: '../photos/logo192.png'
}, {

}]



function Card() {
    const { name } = useParams();
    const [message, setMessage] = useState("");
    const [data, setData] = useState([])
    const [lock,setLock]=useState(false);
   
    
    function goDown(){
       let main_test=document.getElementById('main_test');
       let card=document.getElementById('card');
       main_test.scrollTo({
           top:(window.innerHeight+data.length)*100,
           behavior:"smooth"
       })
       
      
   }
    const apiCall = async () => {

        setMessage("")
        if(message){
        // let mu=document.getElementById('mu');
        // mu.play();
        const putdata = fetch('/chat', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, message })

        }
        )
       
    }


    }


    const userData = async () => {
        try {
           
            const res = await fetch('/chat', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            if (res.status === 200) {

                const tData = await res.json();
                setData(tData);

            }
               

        } catch (e) {

        }
    }
    function lock_func(){
        if(lock===false){
            setLock(true)
        }
        else{
           setLock(false)
        }

      
       
    }




    useEffect(() => {
        userData();
        
    },[userData])

    useEffect(()=>{
        setTimeout(()=>{
            goDown()
        },1000)
    },[])


    

    return (<>

        
            <div className="card" id="card">
                
                <div className="main_content" id="main_test">
               <i className="fas fa-angle-double-down down_btn " onClick={()=>{
                       goDown();
                       
                      
                  
               }}></i>
               <i class="fas fa-unlock lock_btn" onClick={lock_func}></i>
                    {
                        data.map((ele, index) => {
                            return (<div key={index} className="main_content_div">
                                <p><span className="hello">{ele.name}</span><hr style={{ margin: 0 }} />
                                    {ele.message}</p>
                                    
                            </div>
 

                            )
                        })

                    }
                   
                </div>

                <input type="text" value={message} onChange={(e) => {

                    setMessage(e.target.value);
                }} />
                <section onClick={
                    () => {
                      
                        apiCall()
                    
                    }
                } ><i className="fab fa-asymmetrik"></i></section>
            </div>

     


    </>
    )



}

export default Card
