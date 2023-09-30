import React from 'react'
import {useNavigate, Link } from "react-router-dom";
import { useState,useEffect,useRef } from "react";
import Wrapper from '../common/Wrapper';

export default function Alogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState('');
    const [error,setError]= useState('');
    const focus= useRef("")
    const navigate = useNavigate();
  return (
    <div>
          <div>
        <Wrapper>
        <div className='container col-10 col-sm-8 col-md-6 col-lg-5"'>
          <div className="text-center mb-5 ">
            <label htmlFor="position-none" className="h2">
               Admin LOG-IN
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
          {/* <div  class="mb-3">
            <select class="form-select" aria-label="">
              <option selected>Choose </option>
              <option value="admin">Admin</option>
              <option value="client">Client</option>
            </select>
          </div > */}
          <button type="submit"
        //    onClick={submitLogin}
           class="btn btn-primary">
            Login
          </button>
          <div>
          
          </div>
        </div>
        </Wrapper>
    </div>
    </div>
  )
}
