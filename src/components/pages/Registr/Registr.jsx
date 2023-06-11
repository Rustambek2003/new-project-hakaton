import React, { useState } from 'react'
import './registr.css'
import { toast } from "react-toastify"
import axios from 'axios'
import { Spin } from 'antd'
import { useNavigate } from 'react-router-dom'

const Registr = () => {
    const [fio,setFio]=useState('')
    const [login,setLogin]=useState('')
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false)
    const navigate =useNavigate()
    
    const notify = () => toast("Оправлено");
  const getPosts = async()=>{
   setLoading(false)
    try{
        const response = await axios.post('https://jsonplaceholder.typicode.com/users')
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            notify()
            navigate("/")
           }, 1000);
    }catch(error){
        console.log(error)
    }

  }
    
      const handleSubmit = () => {
        setLogin('')
        setPassword('')
       getPosts()
        setFio('')
        notify()
     
      };
      
    
  return (
    <div className='block-regirstr-wrapp'>
    <img src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/wolfgang-hasselmann-br-gllg7bs-unsplash-2_ver_1.jpg" alt="" />
     <div className='block-cardd'>
       {loading ===true? <Spin/>:''
       }
        <input type="text" value={fio} className='input-form' placeholder='Ф И О'onChange={(e) => setFio(e.target.value)}/>
        <input type="email" value={login} className='input-form' placeholder='Email' onChange={(e) => setLogin(e.target.value)}/>
        <input type="password" value={password} className='input-form' placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
        <div><button onClick={handleSubmit}>Отправить</button></div>
     </div>
    </div>
    
  )
  }  

   

 

export default Registr
