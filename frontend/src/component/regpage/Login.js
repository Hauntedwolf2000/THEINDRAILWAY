import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginValidation'
import validation from './LoginValidation';
import './Signup.css';


const Login = () => {
    const [values,setValues]=useState({
        email:"",
        password:""
    })
    const Navigate =useNavigate();
    axios.defaults.withCredentials=true;
    useEffect(()=>{
        axios.get('http://localhost:8081')
        .then(res =>{
          if(res.data.Status){
            Navigate('/')
            Navigate('bok')
            Navigate('cancel')
          } else{
            Navigate('/login')
          } 
        })
        .catch(err =>console.log(err));
      },[Navigate])

     const [errors,setErrors]=useState({})

     
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values))
        axios.post('http://localhost:8081/login', values)
        .then(res => {
            if(res.data.Status ==='Sucess'){
                Navigate('/')
            }else{
                alert(res.data.Error)
            }
        })
        .catch(err =>console.log(err));
    }


  return (
    <div><div className='d-flex justify-content-center align-items-center bg-primary  back vh-100' >
    <div className='bg-white p-3 rounded w-25'>
    <form action="" onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input type='email' placeholder='Enter email' className='form-control rounded-1' name='email' onChange={e=>setValues({...values,email:e.target.value})}/>
            {errors.email && <span className='text-danger'> {errors.email}</span>}    
        </div>
        <div className='mb-3'>
            <label htmlFor='password'><strong>Pasword</strong></label>
            <input type='password' placeholder='Enter Pasword' className='form-control rounded-1' name='password'  onChange={e=>setValues({...values,password:e.target.value})}/>
            {errors.password && <span className='text-danger'> {errors.password}</span>}
        </div>
        <button type='submit' className='btn btn-success w-100 rounded-2'>Log in</button><br></br>
        <p>New Here? Please Register 👇</p>
        <Link to="/register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
    </form>
    </div>
</div></div>
  )
}

export default Login