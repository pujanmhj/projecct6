import React, { useEffect, useState } from 'react'
import Wrapper from '../common/Wrapper'
import BCard from '../common/BCard'
import AuthUser from '../api/AuthUser'


function Booking () {
  const {http}  = AuthUser();
  const [data,setData]= useState([]);

    useEffect(()=>{
      const allData =async()=>{
        const res= await http.get ("/test");
      setData(res.data.data);
        };
      allData();
    },[]);

      console.log(data)
  return (
    <div>
        <Wrapper>
          {/* <div  className='align-items-center p-2 m-5'>
          <div className=" d-flex  flex-wrap justify-content-center ml-5">
            <p>Property</p>  
          </div>
          <div className=" d-flex  flex-wrap justify-content-center ml-5">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          </div>
          </div> */}
           <div className='d-flex  align-items-center p-2 pd'>
          {
              <div className=" d-flex  flex-wrap justify-content-center mt-3">
                {
                  data?.map((value,key)=>{
                      return (  
                          <BCard
                          place ={value.description}
                          price = {value.price} 
                          img={value.image}
                         
                          />
                      )
                    })
                    // :
                    // loading()

                }
              </div>
          }
        </div>
        </Wrapper>
    </div>
  )
}
export default Booking ;