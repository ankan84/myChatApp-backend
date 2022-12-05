import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import ScrollToBottom from 'react-scroll-to-bottom';


const list = [{
    link: '../music/what.mp3',
    photo: '../photos/logo192.png'
}, {

}]

const baseUrl = `http://localhost:5000`




function Card() {
    const chatContainer = useRef();
    const { name } = useParams();
    const [message, setMessage] = useState("");
    const [data, setData] = useState([])



    const apiCall = async () => {

        setMessage("")
        if (message) {
            // let mu=document.getElementById('mu');
            // mu.play();
            const putdata = fetch(`${baseUrl}/chat`, {
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

            const res = await fetch(`${baseUrl}/chat`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }

            })
            if (res.status === 200) {

                const response = await res.json();
                setData(response);

            }


        } catch (e) {

        }
    }




    useEffect(() => {
        userData()
    }, [])
    useEffect(() => {
        scrollToMyRef()
    }, [data])



    const scrollToMyRef = () => {
        const scroll = chatContainer.current.scrollHeight - chatContainer.current.clientHeight;

        chatContainer.current.scrollTo(0, scroll);

    };




    return (<>


        <div className="card" id="card">


            <div className='main_content' ref={chatContainer}>
                {
                    data.map((ele, index) => {

                        return (<div key={index} className="main_content_div">
                            <p><span>{ele.name}</span></p>
                            <span className='horizental-line'></span>
                            <p>{ele.message}</p>

                        </div>


                        )
                    })

                }




            </div>

            <div className="lower">

                <input type="text" value={message} onChange={(e) => {


                    setMessage(e.target.value);
                }} />
                <section onClick={
                    (e) => {
                        apiCall()
                        userData()
                        e.stopPropagation()

                    }
                } ><i className="fab fa-asymmetrik"></i></section>

                <a onClick={() => {
                    userData()
                }} className='refresh'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                    </svg>
                </a>
            </div>




        </div>






    </>
    )



}

export default Card
