import React, { useState } from "react";
 import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import AuthUser from "../../api/AuthUser";
import Anavbar from "./Anavbar";
import { toast } from "react-toastify";


function AddData() {
  const {http} = AuthUser();
  const [place, setPlace] = useState("");
  const [cateogory, setCateogory] = useState("");
  const [detail, setDetail] = useState("");
  const [gmap, setGmap] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState([]);
  const [error, setError] = useState({});
  const navigate = useNavigate()
console.log(photo);
  const handleAdd =async (e)=> {
    e.preventDefault();
    console.log(place, cateogory, detail, gmap, photo, price)
    setError({
      place: "",
      cateogory: "",
      detail: "",
      gmap: "",
      price: "",
      photo: "",
    });
    if (
      place === "" &&
      cateogory === "" &&
      detail === "" &&
      gmap === "" &&
      photo === ""
    ) {
      setError({
        place: "Place is required to fill",
        category: "Choose one",
        detail: "  It is required to fill",
        gmap: " It is required to fill",
        price: " Price is required to fill",
        photo: "select",
      });
    }

    const data = new FormData();
    
    data.append('nameOfProperty',place);
    data.append('category',cateogory);
    data.append('description',detail);
    data.append('gmap',gmap);
    data.append('price',price);
    photo.forEach(element => {
      data.append('image',element);
      
    });


const res= await http.post ("/formstore",data, 
  {headers: {'Content-Type': 'multipart/form-data',Authorization:`Bearer${sessionStorage.getItem('token')}`}})
    .then((res1)=>{
      toast.success(res1.data.message)
      navigate('/bookingList')
    })
    .catch((err)=>toast.error(err));
    
// if(res.data.status == 1){
//   toast.success('successfully added',{position: toast.POSITION.TOP_RIGHT})
//  navigate('/bookingList')
//     // const res = await http.post("/register", data);
//     //   if (res.data.status == 1) {
//     //     navigate("/bookingList");
//     //   }
//   }

  }

  return (
    <div>
    <Anavbar/>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card textBlack" style={{ borderRadius: "25px;" }}>
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <form className="mx-1 mx-md-4" onSubmit={(e)=>handleAdd(e)}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" for="form3Example1c">
                        Your Property Location
                      </label>
                      <input
                        type="text"
                        id="form3Example1c"
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        className="form-control"
                      />
                      {Object.values(error).length > 0 && (
                        <span style={{color:"red"}}>{error.place}</span>
                      )}
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" for="form3Example3c">
                        Your Property cateogory
                      </label>{Object.values(error).length > 0 && (
                          <span  style={{color:"red"}}>{error.cateogory}</span>
                        )}
                      <Form.Select
                        aria-label="Select Role"
                        value={cateogory}
                        onChange={(e) => setCateogory(e.target.value)}
                      > 
                        <option>Choose</option>
                        <option value="Room">Room</option>
                        <option value="Flat">Flat</option>
                       
                      </Form.Select>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" for="form3Example3c">
                        Your Property Description
                      </label>
                      <textarea
                        rows="4"
                        cols="50"
                        type="text"
                        id="form3Example3c"
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                        className="form-control"
                      />
                       {Object.values(error).length > 0 && (
                          <span  style={{color:"red"}}>{error.detail}</span>
                        )}
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" for="form3Example4c">
                        Google map location
                      </label>
                      <input
                        type="text"
                        id="form3Example4c"
                        value={gmap}
                        onChange={(e) => setGmap(e.target.value)}
                        className="form-control"
                      />
                       {Object.values(error).length > 0 && (
                          <span  style={{color:"red"}}>{error.gmap}</span>
                        )}
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" for="form3Example1c">
                        Price of property:
                      </label>
                      <input
                        type="text"
                        id="form3Example1c"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="form-control"
                      />
                       {Object.values(error).length > 0 && (
                          <span  style={{color:"red"}}>{error.price}</span>
                        )}
                    </div>
                  </div>

                  <div className="form-outline flex-fill mb-0">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <input type="file" id="actual-btn" onChange={(e)=>setPhoto((prev)=>[...prev,e.target.files[0]])} hidden />
                    <label
                      style={{
                        backgroundColor: "gray",
                        color: "white",
                        borderRadius: "0.2rem",
                        cursor: "pointer",
                        padding: "0.5rem",
                        marginTop: "1rem",
                      }}
                      htmlFor="actual-btn"
                    >
                      Choose File
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}
export default AddData;
