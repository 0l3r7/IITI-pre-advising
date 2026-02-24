import React from "react";
import { Link } from "react-router-dom";
const subjects = [
  "Subject 1",
  "Subject 2",
  "Subject 3",
  "Subject 4",
  "Subject 5",
  "Subject 6",
  "Subject 7",
  "Subject 8",
];


const grades = ["Prelim", "Midterm", "Pre-final", "Finals", "Final Grade"];

const SecondSemester = ({onClose}) => {
  return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-[20px] shadow-md w-full max-w-6xl relative">
        {/* Close Button */}

        <button className="absolute top-4 right-4 text-xl font-semibold"
        onClick={onClose}>
            ✕
        </button>

        {/* Title */}
        <h2 className="text-[25px] text-center mb-6 text-black font-normal">
          2nd Semester
        </h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className="text-left font-normal text-[20px] p-2 w-32 text-black"></th>
                {grades.map((grade) => (
                  <th
                    key={grade}
                    className="text-center font-normal text-[20px] p-2 text-black"
                  >
                    {grade}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr key={index}>
                  <td className="p-2 font-normal text-[20px] text-black">{subject}</td>
                  {grades.map((_, i) => (
                    <td key={i} className="p-2">
                      <input
                        className="w-34 h-9.75 border border-black text-black"
                        style={{ boxShadow: "inset 0 0 0 1px #000000" }}
                      />
                    </td>
                  ))}
                </tr>
              ))}

              <tr>
                <td className="p-2"></td>
                {Array(4).fill(0).map((_, i) => (
                  <td key={i} className="p-2"></td>
                ))}
                <td className="p-2">
                  <input
                    className="w-34 h-9.75 border border-black text-center font-normal text-black"
                    style={{ boxShadow: "inset 0 0 0 1px #000000" }}
                    value="GWA"
                    readOnly
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SecondSemester;