import React, { useState } from "react";
import iitiLOGO from "./navbarLOGO/iitiLogo.png";
import dashboardLogo from "./navbarLOGO/dashboardLogo.png";
import yearLevelLogo from "./navbarLOGO/yearLevelLogo.png";
import teacherLogo from "./navbarLOGO/teacherLogo.png";
import scheduleLogo from "./navbarLOGO/scheduleLogo.png";
import settingLogo from "./navbarLOGO/settingLogo.png"

function Nav() {
  // Active state for nav items
  const [active, setActive] = useState("dashboard");

  return (
    <div className="font-RB tracking-wide">
      <div className="fixed h-full bg-[#1C6100] w-87.5">

        {/* IITI Logo */}
        <div className="flex justify-center">
          <img src={iitiLOGO} alt="IITI Logo" className="p-5" />
        </div>

        {/* Title */}
        <div className="bg-[#0E5A12] p-5 shadow-xl">
          <h1 className="font-semibold text-white text-lg text-center tracking-wide">
            Institute of Information
            <br />
            Technology and Innovation
          </h1>
        </div>

        {/* Functions / Nav Items */}
        <div className="pt-10 flex flex-col  ">

          {/* Dashboard */}
          <div
            onClick={() => setActive("dashboard")}
            className={`flex space-x-2   cursor-pointer px-12 py-2 rounded m-2 transition-colors duration-200 ${
              active === "dashboard"
                ? "bg-[#A0FBA333] text-white border-2  border-white/30 rounded-lg " // Active: white bg + green text
                : "text-white hover:bg-green-800" // Inactive: white text + hover effect
            }`}
          >
            <img 
              src={dashboardLogo} 
              alt="Dashboard"
              className="w-5.25 h-5.25"
            />
            <h1 className="">Dashboard</h1>
          </div>

          {/* Year Level */}
          <div
            onClick={() => setActive("yearlevel")}
            className={`flex space-x-2  cursor-pointer px-12 py-2 rounded m-2 transition-colors duration-200 ${
              active === "yearlevel"
                ? "bg-[#A0FBA333] text-white border-2  border-white/30 rounded-lg " // Active: white bg + green text
                : "text-white hover:bg-green-800" // Inactive: white text + hover effect
            }`}
          >
            <img 
              src={yearLevelLogo} 
              alt="yearlevel"
              className="w-5.25 h-5.25"
            />
            <h1 className="">Year Level</h1>
          </div>

          {/* Teacher */}
          <div
            onClick={() => setActive("teacher")}
            className={`flex space-x-2  cursor-pointer px-12 py-2 rounded m-2 transition-colors duration-200 ${
              active === "teacher"
                ? "bg-[#A0FBA333] text-white border-2  border-white/30 rounded-lg " // Active: white bg + green text
                : "text-white hover:bg-green-800" // Inactive: white text + hover effect
            }`}
          >
            <img 
              src={teacherLogo} 
              alt="teacher"
              className="w-5.25 h-5.25"
            />
            <h1 className="">Teacher</h1>
          </div>

          {/* Schedule */}
          <div
            onClick={() => setActive("schedule")}
            className={`flex space-x-2  cursor-pointer px-12 py-2 rounded m-2 transition-colors duration-200 ${
              active === "schedule"
                ? "bg-[#A0FBA333] text-white border-2  border-white/30 rounded-lg " // Active: white bg + green text
                : "text-white hover:bg-green-800" // Inactive: white text + hover effect
            }`}
          >
            <img 
              src={scheduleLogo} 
              alt="schedule"
              className="w-5.25 h-5.25"
            />
            <h1 className="">Schedule</h1>
          </div>

          {/* Settings */}
          <div
            onClick={() => setActive("setting")}
            className={`flex space-x-2 cursor-pointer px-12 py-2 rounded m-2 transition-colors duration-200 ${
              active === "setting"
                ? "bg-[#A0FBA333] text-white border-2  border-white/30 rounded-lg " // Active: white bg + green text
                : "text-white hover:bg-green-800" // Inactive: white text + hover effect
            }`}
          >
            <img 
              src={settingLogo} 
              alt="setting"
              className="w-5.25 h-5.25"
            />
            <h1 className="">Settings</h1>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Nav;
