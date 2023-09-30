import React from "react";
import Card from "react-bootstrap/Card";
import {useNavigate } from 'react-router-dom';
export default function BCard({place,price,img}) {
  console.log({place,price,img});
  const navigate = useNavigate();

  const visit = ()=>{
    navigate('/login');
  }
  return (
    <div>
      <Card
          style={{
            width: "20rem",
            margin: "5px",
            padding: "3px",
            height: "405px",
          }}
         
        >
          <Card.Img
            variant="top"
            src={`http://localhost:8000/storage/${encodeURIComponent( img )}` ?? ''}
            alt="No image found"
            style={{ height: "250px", alignItems: "center" }}
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "18px" }}>
          {place}
            </Card.Title>
            <Card.Text style={{ textAlign: "center"}}>
         Rs: {price}
            </Card.Text>
            <button type="button" className="btn btn-primary" onClick={visit}>
              Visit
            </button>
          </Card.Body>
        </Card>
    </div>
  );
}
