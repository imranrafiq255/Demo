import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "./Venders.css";
import Plus from "../../Assets/plus.png";
import Boy from "../../Assets/boy.jpg";
const Venders = () => {
  const [isShowing, setShowing] = useState(false);
  const addVenderHandler = () => {
    setShowing(!isShowing);
  };
  return (
    <>
      <div className="home-container custom-home-background w-screen h-full p-4 flex">
        <SideBar />
        <div className="right-sidebar-container w-10/12">
          <Header />
          <div className="venders-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
            <div className="h-20 w-11/12 custom-venders-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
              <h1 className="text-white text-2xl font-bold">Venders</h1>
              <img
                src={Plus}
                alt=""
                className={`${
                  isShowing
                    ? " rotate-45 transition-transform duration-300 ease-in-out"
                    : "rotate-0 transition-transform duration-300 ease-in-out"
                } w-6 h-6 invert cursor-pointer`}
                onClick={addVenderHandler}
              />
            </div>
            <div className="venders-list flex flex-col pt-20 px-10">
              <div className="flex mt-4">
                <div className="w-5/12">AUTHOR</div>
                <div className="w-7/12 flex justify-between items-center">
                  <h1>FUNCTION</h1>
                  <h1>STATUS</h1>
                  <h1>EMPLOYED</h1>
                </div>
              </div>
              <div className="line w-full mt-4">
                <div className="vender-bottom-line w-full"></div>
              </div>
              {/* first user data  */}
              <div className="flex mt-4">
                <div className="w-5/12 flex">
                  <div className="image">
                    <img
                      src={Boy}
                      alt=""
                      className="w-14 h-14 rounded-full object-fill"
                    />
                  </div>
                  <div className="name flex flex-col justify-center pl-4">
                    <h1>Imran Malik</h1>
                    <h1 className="email">imran@gmail.com</h1>
                  </div>
                </div>
                <div className="w-7/12 flex justify-between items-center">
                  <div>
                    <h1 className="font-bold">Manager</h1>
                    <h1 className="font-thin">Organization</h1>
                  </div>
                  <div>
                    <div className="bg-green-400 text-white w-16 h-7 flex justify-center items-center rounded-lg shadow-lg">
                      Online
                    </div>
                  </div>
                  <div className="employed">
                    <h1>12 Dec 2014</h1>
                  </div>
                </div>
              </div>
              <div className="line w-full mt-4">
                <div className="vender-bottom-line w-full"></div>
              </div>
            </div>
            {isShowing ? (
              <div className="venders-to-add-list absolute top-14 right-16 w-72 h-96 bg-slate-300 rounded-b-lg shadow-lg"></div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Venders;
