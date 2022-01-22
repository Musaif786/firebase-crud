import React, { useState, useEffect } from "react";
import fireDb from "../firebase";
import { Link } from "react-router-dom";
import "../css/Home.css";
import { toast } from "react-toastify";
export const Home = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fireDb.child("contact").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, []);

const onDelete=(id)=>{
  if(window.confirm("are you sure that you want deleted comment")){
      fireDb.child(`contact/${id}`).remove((err)=>{
          if(err){
              toast.error(err);
          }else{
              toast.success("successFully deleted");
          }
      })
  }
}

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <table className="style-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>No.</th>
              <th style={{ textAlign: "center" }}>Name.</th>
              <th style={{ textAlign: "center" }}>email.</th>
              <th style={{ textAlign: "center" }}>comment.</th>
              <th style={{ textAlign: "center" }}>Ph no.</th>
              <th style={{ textAlign: "center" }}>Action.</th>
            </tr>
          </thead>
        
          <tbody>
            {Object.keys(data).map((id, index) => {
              return (
                <tr key={id}>
                  <th scope="row">{index + 1}</th>
                  <td>{data[id].name}</td>

                  <td>{data[id].email}</td>
                  <td>{data[id].comment}</td>
                  <td>{data[id].contact}</td>
                  <td> 
                  <Link to={`/update/${id}`}>
                      <button className="btn btn-success">Edit</button>
                  </Link>
                  <button className="btn btn-danger" onClick={()=> onDelete(id)} >Delete</button>
                  <Link to={`/view/${id}`}>
                      <button className="btn btn-primary">view</button>
                  </Link>
                  </td>

                  {/* <h1>{data[id].name}</h1> */}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <h2>Home </h2> */}
      </div>
    </>
  );
};

export default Home;
