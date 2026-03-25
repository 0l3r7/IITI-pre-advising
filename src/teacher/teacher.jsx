import React from "react";
import { Link } from "react-router-dom";
import adminLogo from "../../src/dashboard/dashboardLOGO/adminLogo.png";
const Card = ({ subject, teacher }) => {
  return (
    <div className="w-[227px] h-[251px] bg-white rounded-[30px] border border-[#D5D5D5] shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-200 relative flex flex-col overflow-hidden cursor-pointer">
      
      {/* Top Bar */}
      <div className="bg-[#1C6100] h-[65px] px-4 py-3 text-white text-sm font-semibold leading-tight rounded-t-[30px]">
        {subject && (
          <>
            {subject}
            <br />
            <span className="text-xs font-normal">{teacher}</span>
          </>
        )}
      </div>

      {/* Content */}
      <div className="flex-1"></div>

      {/* Divider */}
      <div className="absolute bottom-[42px] left-0 w-full border-t border-[#D5D5D5]" />

      {/* Icon */}
      <div className="absolute bottom-3 right-3 w-5 h-5 text-gray-500 opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 6a2 2 0 012-2h4l2 2h8a2 2 0 012 2v1H3V6z" />
          <path d="M3 10h18v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6z" />
        </svg>
      </div>
    </div>
  );
};

const Teachers = () => {
  const cards = Array(12).fill(null);

  return (
    <div className="h-full pl-[55%] md:pl-88 font-RB w-full bg-[#F5F5F5] min-h-screen">
      
      {/* HEADER */}
      <div className="bg-white shadow px-6 py-4 flex items-center justify-between border-b-[5px] border-[#D9D9D9]">
        <span className="text-[25px] font-bold text-black">Teachers</span>

        <Link to="/profile">
          <div className="flex-col cursor-pointer active:scale-95">
            <img src={adminLogo} alt="admin" className="h-10.5 w-10.5" />
            <h1 className="text-xs text-center">Admin</h1>
          </div>
        </Link>
      </div>

      {/* GRID */}
      <div className="p-6 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((_, index) => (
            <Card
              key={index}
              subject={index === 0 ? "Subject Code" : ""}
              teacher={index === 0 ? "Marvic Albaza" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;