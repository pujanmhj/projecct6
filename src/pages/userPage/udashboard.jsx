import UnavBar from './UnavBar'
import React, { useEffect, useState } from 'react'
import BCard from '../../common/BCard'
import AuthUser from '../../api/AuthUser'
export default function udashboard() {
  const {http}  = AuthUser();
  const [data,setData]= useState([]);

    useEffect(()=>{
      const allData =async()=>{
        const res= await http.get ("/test");
      setData(res.data.data);
        };
      allData();
    },[]);
  return (
    <div>
      <UnavBar/>
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
    </div>
  )
}
