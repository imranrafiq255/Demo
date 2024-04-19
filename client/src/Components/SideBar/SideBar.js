import React from "react";
import Vendor from "../../Assets/vendor.png";
import Project from "../../Assets/projects.png";
import Vehicle from "../../Assets/vehicle.png";
import Salary from "../../Assets/salary.png";
import Logout from "../../Assets/logout.png";
import Signup from "../../Assets/signup.png";
import Dashboard from "../../Assets/dashboard.png";
import VerticalLogo from "../../Assets/Horizontal-logo.png";
import Bell from "../../Assets/bell.png";
import User from "../../Assets/user.png";
import { useLocation, useNavigate } from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dashboardNavigator = () => {
    navigate("/");
  };

  const vendersNavigator = () => {
    navigate("/venders");
  };
  return (
    <>
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
          <div
            className={`${
              location.pathname === "/"
                ? "home-sidebar-selected-item-bg-color"
                : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
            } dashboard flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 `}
            onClick={dashboardNavigator}
          >
            <img src={Dashboard} alt="" className="w-4 h-4 invert" />
            <h1 className=" text-white">Dashboard</h1>
          </div>
          <div
            className={`${
              location.pathname === "/venders"
                ? "home-sidebar-selected-item-bg-color"
                : "hover:bg-slate-600 transition-colors duration-500 ease-in-out"
            } vendor flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5`}
            onClick={vendersNavigator}
          >
            <img src={Vendor} alt="" className="w-6 h-5 invert" />
            <h1 className=" text-white">Our Venders</h1>
          </div>
          <div className="project flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 hover:bg-slate-600 transition-colors duration-500 ease-in-out">
            <img src={Project} alt="" className="w-6 h-6 invert" />
            <h1 className=" text-white">Projects</h1>
          </div>
          <div className="vehicle flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 hover:bg-slate-600 transition-colors duration-500 ease-in-out">
            <img src={Vehicle} alt="" className="w-7 h-7 invert" />
            <h1 className=" text-white">Job/Vehicle Type</h1>
          </div>
          <div className="salary flex gap-3 items-center p-2 w-full h-12 rounded-lg mt-5 hover:bg-slate-600 transition-colors duration-500 ease-in-out">
            <img src={Salary} alt="" className="w-6 h-5 invert" />
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
    </>
  );
};

export default SideBar;
