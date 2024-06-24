import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setname] = useState([]);
  const [email, setemail] = useState([]);
  const header = { "Access-Control-Allow-Origin": "*" };
  const history = useNavigate();

  const handelsubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
    axios.post("https://665d91c8e88051d604073ecd.mockapi.io/crud2", {
      name: name,
      email: email,
      header,
    })
    // history("/read");
    .then(()=>{
      history("/read");
    })
  };

  return (
    <>
    <div className="d-flex justify-between  "> <h2 className="font-bold text-3xl p-2 text-blue-600" >Create page</h2>
    <Link to='/read'> <button className="bg-blue-500 m-2 p-1 rounded-md text-xl text-white">Show data</button>
    </Link>
   </div>
   
      <form className="border-blue-700 border-1 p-4 m-2 rounded-md">
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => setname(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setemail(e.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary "
          onClick={handelsubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
