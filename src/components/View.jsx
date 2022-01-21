import React, { useEffect, useState } from "react";
import fire from "../firebase";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../css/View.css";

//fireDb mai yahaa fire rakha means kuchbe raksakta
const View = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();
  
  useEffect(() => {
    fire
      .child(`contact/${id}`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser({ ...snapshot.val() });
        } else {
          setUser({});
        }
      });
  }, [id]);
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-body">
          <p>user contact details</p>
        </div>
        <div className="container">
          <strong>ID:</strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name:</strong>
          <span>{user.name}</span>
          <br />
          <br />
          <strong>Email:</strong>
          <span>{user.email}</span>
          <br />
          <br />
        </div>
      </div>
      <h2>View page</h2>
    </div>
  );
};

export default View;
