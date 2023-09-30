import Anavbar from './Anavbar'
import AuthUser from '../../api/AuthUser';
import { useEffect,useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Images } from '../../assets';
import {useNavigate } from "react-router-dom";

const styles={
  package:{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      border: "2px solid black",
      marginBottom: "10px",
      padding: "10px",
   },
  
  product:{
      width:" 80%"
   },
  
  main:{
      display: "flex",
      justifyContent: "center",
   },
  
  parts:{
      padding: "10px",
   },
};

 function propertyList() {
  const [data, setData] = useState([]);
  const { http } = AuthUser();
  const navigate = useNavigate();

const editNext= ()=>{
  navigate('/edit');
}
  const historyData = async () => {
    const res = await http.get("/test")
    if (res.status == 1 || 200) {
      setData(res.data.data);
    }
  }

useEffect(()=>{
  historyData();
},[]);
  return (
    <>
    <Anavbar/>
    <div  style={styles.main}>
    <div style={styles.product}>
         {
          data?.map((value,key)=>(
            <div style={styles.package} key={key}>
            <div class="parts" style={styles.parts}>
            {/* <img  src={`http://localhost:8000/storage/${encodeURIComponent(value.image)}` ?? ''}
             alt="img1" style={{height:"200px",width:"200px"}}/> */}
           <Carousel interval={8000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`http://localhost:8000/storage/${encodeURIComponent(value.image)}` ?? ''}
              style={{height:"200px",width:"400px"}}

            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`http://localhost:8000/storage/${encodeURIComponent(value.image)}` ?? ''}
              style={{height:"200px",width:"400px"}}
            />
          </Carousel.Item>
           </Carousel>
            </div>
            <div class="parts" style={styles.parts}>
              <h4>{value.nameOfProperty}</h4>
              <p>{value.price}</p>
            </div>
            <div  class="parts" style={styles.parts}>
            <img src={Images.edit} style={{width: 20, height: 20, cursor: 'pointer', margin:'8px'}}  onClick={editNext}/>
             <img src={Images.delete}  style={{width: 20, height: 20, cursor: 'pointer', margin:'8px'}} />             
            </div>
            </div>
          ))
         }
    </div>
    </div>
    </>
  )
}
export default propertyList;