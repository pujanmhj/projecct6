import React, { useState } from "react";
import AuthUser from "../api/AuthUser";
import { useNavigate } from "react-router-dom";
import Wrapper from "../common/Wrapper";
import { toast } from 'react-toastify';
import Form from "react-bootstrap/Form";


export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const [password, setPassword] = useState("");
  const [role,setRole]=useState();
  const { http } = AuthUser();

  console.log({ name, email, password });

  const submitData = async (e) => {
    e.preventDefault();
    setError({
      "name":"",
      "email":"",
      "password":"",
      "role":""
    })
    if ((name && email && password && role) !== null | undefined | "") {
      const data = {
        name: name,
        email: email,
        password: password,
        role:role,
      };
      console.log(error);
      const res = await http.post("/register", data);
      if (res.data.status == 1) {
      toast.success('Signup Sucessfull',{position: toast.POSITION.TOP_RIGHT}); 
        navigate("/login");
      }
      else{
      toast.danger('Unvalid form',{position: toast.POSITION.TOP_RIGHT}); 
      }
      console.log(res.data.status);
    }
    else if(
      email === "" && 
    name === "" &&
      password === "" && 
      role === ""
  ){
      setError({
          "email": "Email is required", 
          "password": "Password is required", 
          "name": "name is required", 
          "role": "Role is required", 
      })
  }
  else if(
      email !== "" && 
    name  !== "" &&
      password === "" && 
      role === ""
  ){
      setError({
          "email": "", 
          "password": "Password is required", 
          "name": "name is required", 
          "role": "Role is required", 
      })
  }
  };

  return (
    <div>
      <Wrapper>
      <section className="vh-100" style={{ backgroundcolor: "#eee;" }}>
        <div className="container h-50">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card textBlack" style={{ borderRadius: "25px;" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form
                        className="mx-1 mx-md-4"
                        onSubmit={(e) => submitData(e)}
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example1c">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              onChange={(e) => setName(e.target.value)}
                              className="form-control"
                            />
                             {Object.values(error).length > 0 && (
                           <span style={{color:"red"}}>{error.name}</span>
                           )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example3c">
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              onChange={(e) => setEmail(e.target.value)}
                              className="form-control"
                            />
                             {Object.values(error).length > 0 && (
                              <span style={{color:"red"}}>{error.email}</span>
                            )}
                                </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                            <input
                              type="password"
                              id="form3Example4c"
                              onChange={(e) => setPassword(e.target.value)}
                              className="form-control"
                            />
                             {Object.values(error).length > 0 && (
                                <span style={{color:"red"}}>{error.password}</span>
                              )}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                        <Form.Select
                        aria-label="Select Role"
                        // value={cateogory}
                        onChange={(e) => setRole(e.target.value)}
                      > 
                        <option>Select Role</option>
                        <option value={0}>Owner</option>
                        <option value={1}>User</option>
                      </Form.Select>
                      </div>
                      </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Wrapper>
    </div>
  );
}
