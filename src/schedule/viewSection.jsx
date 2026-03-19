import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import AddScheduleModal from "./AddScheduleModal";
import back from "../assets/photo/arrow.png";
import adminLogo from "../dashboard/dashboardLOGO/adminLogo.png";
import next from "../assets/photo/next.png";
import view from "../assets/photo/view.png";
import add from "../assets/photo/add.png";

const sections = [
  { name: "BSIT 2A", active: true },
  { name: "BSIT 2B" },
  { name: "BSIT 2C" },
  { name: "BSIT 2D" },
  { name: "BSIT 2E" },
  { name: "BSIT 2F" },
  { name: "BSIT 2G", active: true },
  { name: "BSIT 2H" },
  { name: "BSIT 2I" },
  { name: "BSIT 2J" },
  { name: "BSIT 2K" },
  { name: "BSIT 2L" },
];

const ViewSection = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-gray-100 h-full pl-[55%] md:pl-88 font-RB w-full">
      {/* Header */}
      <div className="p-5 pt-14 flex justify-between border-b-5 border-[#D9D9D9]">
        <div className="flex flex-col items-start gap-1 text-[25px]">
          <Link to="/schedule">
            <img src={back} alt="Back" className="w-4 h-4" />
          </Link>

          <div className="flex items-center gap-3">
            <span className="font-bold text-black/50">BSIT 1st Year</span>
            <img src={next} alt="Next" className="w-4 h-4" />
            <span className="font-bold text-black">Sections</span>
          </div>
        </div>

        {/* Admin */}
        <div className="flex-col cursor-pointer active:scale-95">
          <img src={adminLogo} alt="admin" className="h-10.5 w-10.5" />
          <h1 className="text-xs text-center">Admin</h1>
        </div>
      </div>

      {/* Sections Grid */}
      <div className="p-6 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl border border-[#D5D5D5] shadow-md w-57.25 h-62.75 overflow-hidden"
            >
              {/* Top Header */}
              <div
                className={`px-4 py-3 ${
                  section.active ? "bg-green-700 text-white rounded-t-2xl" : ""
                }`}
              >
                <h3
                  className={`font-semibold ${
                    section.active ? "text-white" : "text-gray-700"
                  }`}
                >
                  {section.name}
                </h3>

                <p
                  className={`text-sm ${
                    section.active ? "text-white" : "text-gray-500"
                  }`}
                >
                  Schedule
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full border-t border-[#D5D5D5] px-4 py-4 flex justify-end gap-3 bg-white">
                <Link to="/viewSchedule">
                  <img src={view} alt="view" />
                </Link>
                <img
                  src={add}
                  alt="add"
                  className="cursor-pointer"
                  onClick={() => setShowModal(true)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <AddScheduleModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default ViewSection;
