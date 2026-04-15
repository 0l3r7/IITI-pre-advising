import React, { useState } from "react";
import { Link } from "react-router-dom";

import arrow from "../assets/photo/arrow.png";
import adminLogo from "../dashboard/dashboardLOGO/adminLogo.png";

const StudentList = () => {
  const [search, setSearch] = useState("");

  const students = [
    {
      name: "Rein Paul Asinas",
      section: "1A",
      email: "202310010@btech.ph.education",
      number: "202310010",
    },
    {
      name: "John Doe",
      section: "1A",
      email: "202310011@btech.ph.education",
      number: "202310011",
    },
    {
      name: "Jane Smith",
      section: "1A",
      email: "202310012@btech.ph.education",
      number: "202310012",
    },
  ];

  // FILTER SEARCH
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.email.toLowerCase().includes(search.toLowerCase()) ||
    student.number.includes(search)
  );

  return (
    <div className="w-full min-h-screen bg-gray-100 font-sans md:pl-88 pl-[55%]">

      {/* HEADER */}
      <div className="p-5 pt-14 flex justify-between items-center border-b-[5px] border-[#D9D9D9]">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-start gap-2">
          <Link to="/pre-advising">
            <img src={arrow} alt="back" className="w-4 h-4" />
          </Link>

          <span className="font-bold text-black text-[28px]">
            BSIT First Year Students
          </span>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* SEARCH BAR */}
          <div className="flex items-center bg-[#E5E5E5] rounded-full px-4 py-2 w-65">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>

            <div className="w-px h-5 bg-gray-400 mr-2"></div>

            <input
              type="text"
              placeholder="Search Student"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-sm w-full placeholder-gray-500"
            />
          </div>

          {/* ADMIN PROFILE */}
          <Link to="/profile">
            <div className="flex-col cursor-pointer active:scale-95 text-center">
              <img src={adminLogo} className="h-10 w-10 mx-auto" alt="admin" />
              <h1 className="text-xs">Admin</h1>
            </div>
          </Link>

        </div>
      </div>

      {/* MAIN */}
      <main className="px-8 py-6">

        {/* TABLE HEADER */}
        <div className="flex px-4 mb-2 text-gray-700 font-semibold text-[16px]">
          <div className="w-1/4">Student Name</div>
          <div className="w-1/6 text-center">Section</div>
          <div className="w-1/3">Student Email</div>
          <div className="w-1/4 text-center">Student Number</div>
        </div>

        {/* TABLE BODY */}
        <div className="shadow-sm">
          <div className="overflow-y-auto">
            <div className="px-4 space-y-1">

              {/* STUDENT ROWS */}
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => (
                  <Link to="/viewGrade" key={index}>
                    <div className="flex border bg-[#D9D9D9]/50 border-black hover:bg-gray-200 cursor-pointer h-6 items-center px-2 text-sm">
                      <div className="w-1/4">{student.name}</div>
                      <div className="w-1/6 text-center">{student.section}</div>
                      <div className="w-1/3">{student.email}</div>
                      <div className="w-1/4 text-center">{student.number}</div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="text-center py-4 text-gray-500">
                  No student found
                </div>
              )}

              {/* EMPTY ROWS (VISUAL PLACEHOLDER LIKE YOUR DESIGN) */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="flex border border-black h-6 items-center px-2 bg-[#D9D9D9]/50"
                ></div>
              ))}

            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default StudentList;