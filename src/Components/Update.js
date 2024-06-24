import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setid] = useState(0);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    setid(localStorage.getItem("id"));
    setname(localStorage.getItem("name"));
    setemail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://665d91c8e88051d604073ecd.mockapi.io/crud2/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        Navigate("/read");
      });
  };
  return (
    <>
      <h2 className=" bg-blue-500 text-white m-2 p-2 rounded-md">
        Update page :
      </h2>
      <form className="border-blue-700 border-1 my-3 p-4  rounded-md">
        <div className="mb-3  ">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => setname(e.target.value)}
            type="text"
            value={name}
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
            value={email}
            className="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="flex justify-around">
          <button
            type="submit"
            className="btn btn-primary "
            onClick={handleUpdate}
          >
            Update
          </button>
          <Link to="/read">
            <button className="bg-green-600 px-3 text-white rounded-md py-1">Back</button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Update;
