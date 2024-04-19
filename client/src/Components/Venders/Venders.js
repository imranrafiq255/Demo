import React from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "./Venders.css";
const Venders = () => {
  return (
    <>
      <div className="home-container custom-home-background w-screen h-full p-4 flex">
        <SideBar />
        <div className="right-sidebar-container w-10/12">
          <Header />
          <div className="venders-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
            <div className="h-20 w-11/12 custom-venders-bg absolute -top-6 left-14 rounded-lg"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Venders;
