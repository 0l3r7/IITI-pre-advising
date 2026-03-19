import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import back from "../assets/photo/arrow.png";
import adminLogo from "../dashboard/dashboardLOGO/adminLogo.png";

const ViewSchedule = () => {
  // useState for student info
  const [yearSection, setYearSection] = useState("BSIT 2A");
  const [semester, setSemester] = useState("1st");

  const schedules = {
    "1st": [
      {
        code: "GEC-TM",
        unit: 3,
        hours: 3,
        time: "9:00 - 11:00 AM",
        day: "Monday",
        room: "COM LAB 1",
        section: "2-A",
        instructor: "John Doe",
      },
      {
        code: "WS101",
        unit: 3,
        hours: 3,
        time: "1:00 - 3:00 PM",
        day: "Tuesday",
        room: "COM LAB 2",
        section: "2-A",
        instructor: "Jane Smith",
      },
    ],
    "2nd": [
      {
        code: "SA101",
        unit: 3,
        hours: 3,
        time: "10:00 - 12:00 PM",
        day: "Wednesday",
        room: "COM LAB 3",
        section: "2-A",
        instructor: "Mark Lee",
      },
    ],
  };

  const scheduleColumns = [
    "code",
    "unit",
    "hours",
    "time",
    "day",
    "room",
    "section",
    "instructor",
  ];

  return (
    <div className="h-full pl-[55%] md:pl-88 font-RB w-full bg-[#F5F5F5] min-h-screen">
      {/* Header */}
      <div className="p-5 bg-gray-100 pb-12 pt-7 flex justify-between border-b-5 border-[#D9D9D9] sticky top-0">
        <div className="flex-col cursor-pointer active:scale-95">
          <Link to="/viewSection">
            <img src={back} alt="Back" className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex-col cursor-pointer active:scale-95">
          <img src={adminLogo} alt="admin" className="h-10.5 w-10.5" />
          <h1 className="text-xs text-center">Admin</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="pl-8 pr-10">
        <div className="text-xl pt-8 mb-6">
          <h1>Class Schedule</h1>
          <h1>{yearSection}</h1>
        </div>

        {/* Semester Dropdown */}
        <div className="relative inline-block border border-gray-400 rounded px-3 pt-3 pb-2 mb-12">
          <span className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-500">
            Select Semester
          </span>
          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="bg-white text-base focus:outline-none pr-1"
          >
            <option value="1st">2nd Semester 2025 - 2026</option>
            <option value="2nd">1st Semester 2025 - 2026</option>
          </select>
        </div>

        {/* table */}
        <table className="w-full table-fixed">
          <thead>
            <tr className="text-sm">
              <th className="border p-2 wrap-break-words">SUBJECT CODE</th>
              <th className="border p-2 wrap-break-words">UNIT</th>
              <th className="border p-2 wrap-break-words">HOURS</th>
              <th className="border p-2 wrap-break-words">TIME</th>
              <th className="border p-2 wrap-break-words">DAYS</th>
              <th className="border p-2 wrap-break-words">ROOM</th>
              <th className="border p-2 wrap-break-words">SECTION</th>
              <th className="border p-2 wrap-break-words">
                INSTRUCTOR'S NAME/SIGNATURE
              </th>
            </tr>
          </thead>
          <tbody>
            {schedules[semester].map((row, index) => (
              <tr key={index}>
                {scheduleColumns.map((col) => (
                  <td key={col} className="border px-2 py-1 text-center">
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))}

            {/* Fill remaining empty rows */}
            {Array(10 - schedules[semester].length)
              .fill(null)
              .map((_, i) => (
                <tr key={`empty-${i}`}>
                  {Array(8)
                    .fill(null)
                    .map((_, j) => (
                      <td key={j} className="border px-3 py-5" />
                    ))}
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ViewSchedule;
