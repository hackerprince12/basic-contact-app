import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setdata] = useState([]);

  function getdata() {
    axios
      .get("https://665d91c8e88051d604073ecd.mockapi.io/crud2")
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      });
  }

  function handelDelete(id) {
    axios
      .delete(`https://665d91c8e88051d604073ecd.mockapi.io/crud2/${id}`)
      .then(() => {
        getdata();
      });
      //https://665d91c8e88051d604073ecd.mockapi.io/crud2
  }
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className="d-flex justify-between">
       
        <h2 className=" text-blue-600 text-2xl font-bold m-2 p-2 rounded-md">Read oparation</h2>
        <Link to="/">
         
          <button className="bg-blue-500 p-2 rounded-md text-white m-2">Create</button>
        </Link>
       
      </div>

      <table className="table border-1 p-2 m-2 rounded-md bg-slate-200 border-blue-800">
        <thead className="bg-slate-300">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachdata) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachdata.id}</th>

                  <td>{eachdata.name}</td>
                  <td>{eachdata.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn-success rounded-sm px-1 text-white"
                        onClick={() =>
                          setToLocalStorage(
                            eachdata.id,
                            eachdata.name,
                            eachdata.email
                          )
                        }
                      >
                        Edict
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger rounded-sm px-1 text-white"
                      onClick={() => handelDelete(eachdata.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
