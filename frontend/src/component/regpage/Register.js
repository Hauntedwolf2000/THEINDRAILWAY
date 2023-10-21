import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import validation from './Signupvalidation';

const Register = () => {
    const [values,setValues]=useState({
        name:"",
        email:"",
        password:""
    })

    const handleInput = (e) => {
      const { name, value } = e.target;
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };
    const[errors,setErrors]= useState({})

    const Navigate = useNavigate();

const handleSubmit = (event) => {
  event.preventDefault();
  const validationErrors = validation(values); // Validate the values

  if (Object.keys(validationErrors).length === 0) {
    axios.post('http://localhost:8081/register', values)
      .then(res => {
        if (res.data.Status === 'Sucess') {
          Navigate('/login'); // Navigate to login only on successful registration
        } else {
          // Handle the case when registration isn't successful
          alert("Error during registration");
        }
      })
      .catch(err => console.log(err));
  } else {
    // Handle the case when validation errors exist
    setErrors(validationErrors);
  }
};



  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded-3 w-25'>
        <h2>Sign-Up</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='name'><strong>Name</strong></label>
              <input type='text'  placeholder='Enter name'  name='name' className='form-control rounded-1' onChange={handleInput}/>
              {errors.name && <span className='text-danger'> {errors.name}</span>}
            </div>
            <div className='mb-3'>
              <label htmlFor='e-email'><strong>Email</strong></label>
              <input type='email'  placeholder='Enter email' name='email' className='form-control rounded-1' onChange={handleInput}/>
              {errors.email && <span className='text-danger'> {errors.email}</span>}
            </div>
            <div className='mb-3'>
              <label htmlFor='password'><strong>Password</strong></label>
              <input type='Password'  placeholder='Enter Password' name='password' className='form-control rounded-1' onChange={handleInput}/>
              {errors.password && <span className='text-danger'> {errors.password}</span>}
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-2'>Sign up</button>
            <p className='pt-1'>Already Registered?Login here👇</p>
            <Link to='/login' className='btn btn-default border w-100 bg-light rounded-2 text-decoration-none pt-2'>LOGIN</Link>
        </form>
      </div>
    </div>
  )
}

export default Register