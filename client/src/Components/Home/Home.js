import React from "react";
import "./Home.css";
import VerticalLogo from "../../Assets/Horizontal-logo.png";
import Star from "../../Assets/star.png";
import User from "../../Assets/user.png";
import Setting from "../../Assets/setting.png";
import Bell from "../../Assets/bell.png";
import Boy from "../../Assets/boy.jpg";
import Vendor from "../../Assets/vendor.png";
import Project from "../../Assets/projects.png";
import Vehicle from "../../Assets/vehicle.png";
import Salary from "../../Assets/salary.png";
import Logout from "../../Assets/logout.png";
import Signup from "../../Assets/signup.png";
import Dashboard from "../../Assets/dashboard.png";
const Home = () => {
  return (
    <>
      <div className="home-container custom-home-background w-screen h-full p-4 flex">
        <div className="left-sidebar h-screen w-2/12">
          <div className="h-full w-64 bg-slate-700 rounded-lg p-2 flex flex-col">
            <div className="first p-2">
              <div className="flex items-center justify-center pb-4">
                <img src={VerticalLogo} alt="" className="w-24 h-20" />
              </div>
              <div className="bottom-line">
                <div className="line w-full bg-white h-0.5"></div>
              </div>
            </div>
            <div className="second flex flex-col"></div>
            <div className="dashboard home-sidebar-selected-item-bg-color flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 hover:bg-slate-600 transition-colors duration-500 ease-in-out">
              <img src={Dashboard} alt="" className="w-4 h-4 invert" />
              <h1 className=" text-white">Dashboard</h1>
            </div>
            <div className="vendor flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 hover:bg-slate-600 transition-colors duration-500 ease-in-out">
              <img src={Vendor} alt="" className="w-5 h-5 invert" />
              <h1 className=" text-white">Our Venders</h1>
            </div>
            <div className="project flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 hover:bg-slate-600 transition-colors duration-500 ease-in-out">
              <img src={Project} alt="" className="w-5 h-5 invert" />
              <h1 className=" text-white">Projects</h1>
            </div>
            <div className="vehicle flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 hover:bg-slate-600 transition-colors duration-500 ease-in-out">
              <img src={Vehicle} alt="" className="w-6 h-6 invert" />
              <h1 className=" text-white">Job/Vehicle Type</h1>
            </div>
            <div className="salary flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 hover:bg-slate-600 transition-colors duration-500 ease-in-out">
              <img src={Salary} alt="" className="w-5 h-5 invert" />
              <h1 className=" text-white">Employees Salaries</h1>
            </div>
            <div className="notification flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 hover:bg-slate-600 transition-colors duration-500 ease-in-out">
              <img src={Bell} alt="" className="w-5 h-5 invert" />
              <h1 className=" text-white">Notifications</h1>
            </div>
            <div className="account flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 hover:bg-slate-600 transition-colors duration-500 ease-in-out">
              <h1 className=" text-white">Account Pages</h1>
            </div>
            <div className="profile flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 hover:bg-slate-600 transition-colors duration-500 ease-in-out">
              <img src={User} alt="" className="w-5 h-5 invert" />
              <h1 className=" text-white">My Profile</h1>
            </div>
            <div className="logout flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 hover:bg-slate-600 transition-colors duration-500 ease-in-out">
              <img src={Logout} alt="" className="w-5 h-5 invert" />
              <h1 className=" text-white">Sign Out</h1>
            </div>
            <div className="signin flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 hover:bg-slate-600 transition-colors duration-500 ease-in-out">
              <img src={Signup} alt="" className="w-4 h-4 invert" />
              <h1 className=" text-white">Sign Up</h1>
            </div>
            <div className="third flex flex-col justify-end h-full">
              <div className="documentation flex justify-center items-center w-full h-12 sidebar-bottom-btn-border-color custom-home-color documentation-btn-custom-css rounded-lg cursor-pointer transition-colors ease-in-out duration-500">
                Documentation
              </div>
              <div className="documentation flex justify-center items-center w-full h-12 sidebar-bottom-upgrade-btn-bg-color upgrade-btn-custom-css rounded-lg text-white mt-4 cursor-pointer transition-colors ease-in-out duration-500 mb-4">
                Upgrade to Pro
              </div>
            </div>
          </div>
        </div>
        <div className="right-sidebar-container w-10/12">
          <div className="header flex h-10">
            <div className="left-header basis-1/2">
              <h1 className=" text-sm">
                Pages / <span className="text-slate-600">Dashboard</span>
              </h1>
              <h1 className="text-base ml-3 text-slate-600">Dashboard</h1>
            </div>
            <div className="right-header flex basis-1/2 gap-1">
              <input
                type="text"
                className="w-3/12 h-full outline-none header-input-border-custom px-4"
                placeholder="Type something ..."
              />
              <button className="w-3/12 h-full outline-none header-btn-builder-custom px-4">
                Online Builder
              </button>
              <div className="w-3/12 flex py-1">
                <div className="rating flex gap-2 w-full h-full justify-center items-center rating-left-custom-css">
                  <img src={Star} alt="" className="w-4 h-4" />
                  <h1>Star</h1>
                </div>
                <div className="rating flex gap-2 w-full h-full justify-center items-center rating-right-custom-css">
                  <h1>10,000</h1>
                </div>
              </div>
              <div className="w-3/12 flex py-1 gap-2 items-center justify-evenly">
                <img src={Setting} alt="" className="w-4 h-4" />
                <img src={Bell} alt="" className="w-4 h-4" />
                <img src={User} alt="" className="w-4 h-4" />
                <h1>Sign In</h1>
              </div>
            </div>
          </div>
          {/* sales-card-container */}
          <div className="sales-card-container flex h-40 mt-14">
            <div className="card-1-container w-3/12 px-2">
              <div className="card w-full h-full bg-white rounded-lg shadow-lg relative">
                <h1 className=" text-right px-4 pt-3 font-thin">
                  Today's money
                </h1>
                <h1 className=" text-right px-4 text-2xl font-extrabold">
                  $53K
                </h1>
                <div className="line w-full flex justify-center mt-7">
                  <div className="card-bottom-line w-9/12"></div>
                </div>
                <div className="progress-index mt-4 ml-5">
                  <h1>
                    <span className=" text-green-500">+50%</span>{" "}
                    <span className="font-thin">than last week</span>
                  </h1>
                </div>
                <div className="card-box w-16 h-16 bg-slate-700 rounded-xl flex justify-center items-center absolute -top-4 left-4">
                  <img src={User} alt="" className="w-6 h-6 invert" />
                </div>
              </div>
            </div>
            <div className="card-2-container w-3/12 px-2">
              <div className="card w-full h-full bg-white rounded-lg shadow-lg relative">
                <h1 className=" text-right px-4 pt-3 font-thin">
                  Today's money
                </h1>
                <h1 className=" text-right px-4 text-2xl font-extrabold">
                  $53K
                </h1>
                <div className="line w-full flex justify-center mt-7">
                  <div className="card-bottom-line w-9/12"></div>
                </div>
                <div className="progress-index mt-4 ml-5">
                  <h1>
                    <span className=" text-green-500">+50%</span>{" "}
                    <span className="font-thin">than last week</span>
                  </h1>
                </div>
                <div className="card-box w-16 h-16 bg-slate-700 rounded-xl flex justify-center items-center absolute -top-4 left-4">
                  <img src={User} alt="" className="w-6 h-6 invert" />
                </div>
              </div>
            </div>
            <div className="card-3-container w-3/12 px-2">
              <div className="card w-full h-full bg-white rounded-lg shadow-lg relative">
                <h1 className=" text-right px-4 pt-3 font-thin">
                  Today's money
                </h1>
                <h1 className=" text-right px-4 text-2xl font-extrabold">
                  $53K
                </h1>
                <div className="line w-full flex justify-center mt-7">
                  <div className="card-bottom-line w-9/12"></div>
                </div>
                <div className="progress-index mt-4 ml-5">
                  <h1>
                    <span className=" text-green-500">+50%</span>{" "}
                    <span className="font-thin">than last week</span>
                  </h1>
                </div>
                <div className="card-box w-16 h-16 bg-slate-700 rounded-xl flex justify-center items-center absolute -top-4 left-4">
                  <img src={User} alt="" className="w-6 h-6 invert" />
                </div>
              </div>
            </div>
            <div className="card-4-container w-3/12 px-2">
              <div className="card w-full h-full bg-white rounded-lg shadow-lg relative">
                <h1 className=" text-right px-4 pt-3 font-thin">
                  Today's money
                </h1>
                <h1 className=" text-right px-4 text-2xl font-extrabold">
                  $53K
                </h1>
                <div className="line w-full flex justify-center mt-7">
                  <div className="card-bottom-line w-9/12"></div>
                </div>
                <div className="progress-index mt-4 ml-5">
                  <h1>
                    <span className=" text-green-500">+50%</span>{" "}
                    <span className="font-thin">than last week</span>
                  </h1>
                </div>
                <div className="card-box w-16 h-16 bg-slate-700 rounded-xl flex justify-center items-center absolute -top-4 left-4">
                  <img src={User} alt="" className="w-6 h-6 invert" />
                </div>
              </div>
            </div>
          </div>
          {/* sales graph container  */}
          <div className="graph-container flex mt-14">
            <div className="graph-1-container w-4/12 h-80 px-2">
              <div className="graph-card bg-white w-full h-full shadow-lg rounded-lg relative">
                <div className="graph-table w-11/12 h-2/3 bg-pink-600 absolute -top-10 left-4 rounded-xl"></div>
                <div className="flex w-full h-full flex-col">
                  <div className="temp basis-1/2"></div>
                  <div className="details basis-1/2 mt-16 ml-6">
                    <h1 className="text-lg font-semibold">Website views</h1>
                    <h1 className=" font-thin text-base">
                      Last campaign performance
                    </h1>
                    <div className="line w-full flex justify-center mt-4">
                      <div className="card-bottom-line w-9/12"></div>
                    </div>
                    <div className="campaign-timer flex gap-2 items-center mt-4">
                      <img src={Bell} alt="" className="w-2 h-2" />
                      <h1 className="font-thin">campaign sent 2 days ago</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-2-container w-4/12 h-80 px-2">
              <div className="graph-card bg-white w-full h-full shadow-lg rounded-lg relative">
                <div className="graph-table w-11/12 h-2/3 bg-pink-600 absolute -top-10 left-4 rounded-xl"></div>
                <div className="flex w-full h-full flex-col">
                  <div className="temp basis-1/2"></div>
                  <div className="details basis-1/2 mt-16 ml-6">
                    <h1 className="text-lg font-semibold">Website views</h1>
                    <h1 className=" font-thin text-base">
                      Last campaign performance
                    </h1>
                    <div className="line w-full flex justify-center mt-4">
                      <div className="card-bottom-line w-9/12"></div>
                    </div>
                    <div className="campaign-timer flex gap-2 items-center mt-4">
                      <img src={Bell} alt="" className="w-2 h-2" />
                      <h1 className="font-thin">campaign sent 2 days ago</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-3-container w-4/12 h-80 px-2">
              <div className="graph-card bg-white w-full h-full shadow-lg rounded-lg relative">
                <div className="graph-table w-11/12 h-2/3 bg-pink-600 absolute -top-10 left-4 rounded-xl"></div>
                <div className="flex w-full h-full flex-col">
                  <div className="temp basis-1/2"></div>
                  <div className="details basis-1/2 mt-16 ml-6">
                    <h1 className="text-lg font-semibold">Website views</h1>
                    <h1 className=" font-thin text-base">
                      Last campaign performance
                    </h1>
                    <div className="line w-full flex justify-center mt-4">
                      <div className="card-bottom-line w-9/12"></div>
                    </div>
                    <div className="campaign-timer flex gap-2 items-center mt-4">
                      <img src={Bell} alt="" className="w-2 h-2" />
                      <h1 className="font-thin">campaign sent 2 days ago</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* overview container */}
          <div className="overview-container flex mt-10">
            <div className="left-side w-8/12 px-3 h-96">
              <div className="bg-white w-full h-full shadow-lg rounded-lg px-8">
                <div className="projects w-full flex justify-between pt-6">
                  <h1 className="text-base font-semibold">Projects</h1>
                  <img src={Bell} alt="" className="w-6 h-6" />
                </div>
                <div className="30-done flex gap-2 items-center mt-3 ">
                  <img src={Bell} alt="" className="w-3 h-3" />
                  <h1>
                    <span className="font-semibold">30 done </span>{" "}
                    <span className="font-thin text-sm">This month</span>
                  </h1>
                </div>
                <div className="bottom-table flex mt-3 w-full relative">
                  <div className="left-side w-5/12 ">
                    <div className="name">
                      <h1 className="font-thin">Companies</h1>
                      <div className="flex gap-3 mt-4 items-center">
                        <img src={Bell} alt="" className="w-7 h-7" />
                        <h1 className="text-xl">Material XD Version</h1>
                      </div>
                      <div className="flex gap-3 mt-4 items-center">
                        <img src={Bell} alt="" className="w-7 h-7" />
                        <h1 className="text-xl">Material XD Version</h1>
                      </div>
                    </div>
                  </div>
                  <div className="right-side w-7/12">
                    <div className="name flex justify-between w-full">
                      <div>
                        <h1 className="font-thin">Members</h1>
                        <div className="members-list mt-4 flex relative items-center">
                          <img
                            src={Boy}
                            alt=""
                            className="w-5 h-5 absolute left-0 top-0 rounded-full border-2 border-solid border-slate-600"
                          />
                          <img
                            src={Boy}
                            alt=""
                            className="w-5 h-5 absolute left-4 top-0 rounded-full"
                          />
                          <img
                            src={Boy}
                            alt=""
                            className="w-5 h-5 absolute left-8 top-0 rounded-full"
                          />
                          <img
                            src={Boy}
                            alt=""
                            className="w-5 h-5 absolute left-12 top-0 rounded-full"
                          />
                        </div>
                        <div className="members-list mt-12 flex relative items-center">
                          <img
                            src={Boy}
                            alt=""
                            className="w-5 h-5 absolute left-0 top-0 rounded-full border-2 border-solid border-slate-600"
                          />
                          <img
                            src={Boy}
                            alt=""
                            className="w-5 h-5 absolute left-4 top-0 rounded-full"
                          />
                          <img
                            src={Boy}
                            alt=""
                            className="w-5 h-5 absolute left-8 top-0 rounded-full"
                          />
                          <img
                            src={Boy}
                            alt=""
                            className="w-5 h-5 absolute left-12 top-0 rounded-full"
                          />
                        </div>
                      </div>
                      <div>
                        <h1 className="font-thin">Budget</h1>
                      </div>
                      <div>
                        <h1 className="font-thin">Compeletion</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-side w-4/12 px-3 h-96">
              <div className="bg-white w-full h-full shadow-lg rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
