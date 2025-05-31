import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AOS from 'aos';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
