import "./App.css";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
    
    
      {/* http://localhost:3000/Read
      http://localhost:3000/create */}


        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Create />}></Route>{/*-home page-*/}
              <Route exact path="/read" element={<Read />}></Route>
              <Route path="/update" element={<Update />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
