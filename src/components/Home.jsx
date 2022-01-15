import React,{useState,useEffect} from 'react'
import fireDb from "../firebase";
import { Link } from 'react-router-dom';
import "../css/Home.css";
export const Home = () => {
    const [data, setData] = useState({});
    useEffect(()=>{
        fireDb.child("contact").on("value",(snapshot)=>{
            if(snapshot.val()!== null){
                setData({...snapshot.val()})
            }else{
                setData({})
            }
        });
        return()=>{
            setData({});
        }
    }, []);
    return (
        <>
        <div style={{marginTop:"100px"}}>
       <table className='style-table'>
       <thead>
           <tr>
               <th style={{textAlign:"center"}}>No.</th>
               <th style={{textAlign:"center"}}>Name.</th>
               <th style={{textAlign:"center"}}>email.</th>
               <th style={{textAlign:"center"}}>contact.</th>
               <th style={{textAlign:"center"}}>Action.</th>
           </tr>
       </thead>
       <tbody> 
           {Object.keys(data).map((id, index)=>{
               return (
                   <tr key={id}>
                       <th scope='row'>{index +1}</th>
                       <td>{data[id].name}</td>
                       <td>{data[id].comment}</td>

                        <td>{data[id].email}</td>
                       <td>{data[id].contact}</td>

                       {/* <h1>{data[id].name}</h1> */}
                       
                   </tr>
               )
           })}
       </tbody>
       </table>
        <h2>Home  </h2>
        </div>
        </>
    )
}

export default Home;