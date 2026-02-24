import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

import adminLogo from '../../dashboard/dashboardLOGO/adminLogo.png';
import SecondSemester from "./secondSemester"

const StudentGrades = () => {

  const [showSecondSemester, setShowSecondSemester] = useState(false);

  // Year tab click handler
  const handleYearClick = (e) => {
    const buttons = document.querySelectorAll(".year-btn");
    buttons.forEach((btn) => {
      btn.classList.remove("rounded-full", "border-black");
      btn.classList.add("border-transparent");
    });
    e.currentTarget.classList.add("rounded-full", "border-black");
    e.currentTarget.classList.remove("border-transparent");
  };

  return (
    <div className="bg-gray-100 h-full pl-[55%] md:pl-88 font-RB w-full">

      {/* Header */}
      <div className='p-5 bg-gray-100 pt-14 flex justify-end border-b-5 border-[#D9D9D9] sticky top-0'>

        <div className='flex-col cursor-pointer active:scale-95'>
          <img
            src={adminLogo}
            alt="admin"
            className='h-10.5 w-10.5'
          />
          <h1 className='text-xs text-center'>Admin</h1>
        </div>

      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-8">

        {/* Student Info */}
        <div className="text-center mb-8">
          <h1 className="font-normal text-[27px] text-black">
            Rein Paul Asinas
          </h1>
          <p className="text-[27px] font-normal text-black">
            BSIT 3A
          </p>
        </div>

        {/* Year Tabs */}
        <div id="yearTabs" className="flex justify-center gap-16 mb-10">
          {["1st Year", "2nd Year", "3rd Year", "4th Year"].map((year, index) => (
            <button
              key={index}
              onClick={handleYearClick}
              className={`year-btn px-5 py-2 text-[25px] text-black border border-transparent cursor-pointer ${
                index === 0 ? "rounded-full border-black" : ""
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Semester Card */}
        <div className="border border-black rounded-[20px] p-6 bg-white">
          <h2 className="text-center font-normal mb-6 text-[25px] text-black">
            1st Semester
          </h2>

          {/* Table Header */}
          <div className="grid grid-cols-6 gap-4 mb-3 text-[20px] font-normal text-center text-black">
            <div></div>
            <div>Prelim</div>
            <div>Midterm</div>
            <div>Pre-final</div>
            <div>Finals</div>
            <div>Final Grade</div>
          </div>

          {/* Subjects */}
          <div className="space-y-3 text-black font-normal text-[20px]">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="grid grid-cols-6 gap-4 items-center">
                <div>Subject {i + 1}</div>

                {[...Array(4)].map((_, j) => (
                  <input
                    key={j}
                    className="border border-black text-center bg-white w-34 h-9.75 ring-1 ring-black"
                  />
                ))}

                <input className="border border-black text-center bg-white w-34 h-9.75 ring-1 ring-black" />
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-8">

          <Link to="/list">
            <button className="bg-[#D9D9D9] rounded-[20px] px-6 py-2 hover:bg-gray-200 transition-colors duration-200">
              Back
            </button>
          </Link>

          {/* 🔥 2nd Semester Popup Button */}
          <button
            onClick={() => setShowSecondSemester(true)}
            className="bg-[#D9D9D9] rounded-[20px] px-6 py-2 hover:bg-gray-200 transition-colors duration-200"
          >
            2nd Semester
          </button>

        </div>

      </main>

      {/* 🔥 Popup Modal */}
      {showSecondSemester && (
        <SecondSemester onClose={() => setShowSecondSemester(false)} />
      )}

    </div>
  );
};

export default StudentGrades;