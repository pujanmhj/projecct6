import React from 'react'
import {useNavigate, Link } from "react-router-dom";
import { useState,useEffect,useRef } from "react";
import Wrapper from '../common/Wrapper';
import AuthUser from '../api/AuthUser'
import { toast } from 'react-toastify';
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role,setRole]= useState('');
    const focus= useRef("")
    const navigate = useNavigate();
    const {http,setToken} = AuthUser();
    const submitLogin = ()=>{
        //aapi
        http.post('auth/login',{email:email,password:password}).then((res)=>{
        toast.success('Login Sucessfull',{position: toast.POSITION.TOP_RIGHT});
            sessionStorage.setItem('role', res.data.role)
            sessionStorage.setItem('token', res.data.token.access_token)
            navigate('/dashboard') 
        }).catch(e=>toast.error(e.response.data.error))}
       
    useEffect(()=>{
      focus.current.focus();
    },[]);
  return (
    <div>
        <Wrapper>
        <div className='container col-10 col-sm-8 col-md-6 col-lg-5"'>
          <div className="text-center mb-5 ">
            <label htmlFor="position-none" className="h2">
              LOG-IN
            </label>
          </div>
          <div class="mb-3">
            <label>Email address</label>
            <input
               ref={focus}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* {
              Object.values(error).length > 0 &&
              <span>{error.email}</span>
            } */}
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
             
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* {
              Object.values(error)> 0 &&
              <span>{error.password}</span>
            } */}
          </div>
          <button type="submit"
           onClick={submitLogin}
           class="btn btn-primary">
            Login
          </button>
          <div>
          <Link to={"/signup"}>Regsiter</Link>
          </div>
        </div>
        </Wrapper>
    </div>
  )
}
