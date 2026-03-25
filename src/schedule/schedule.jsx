import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import adminLogo from "../dashboard/dashboardLOGO/adminLogo.png";
import ViewSchedule from "./viewSchedule";

// Generate sections (1A–4J)
const generateSections = () => {
  const sections = [];
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  for (let year = 1; year <= 4; year++) {
    letters.forEach((letter) => {
      sections.push(`BSIT ${year}${letter}`);
    });
  }

  return sections;
};

const Schedule = () => {
  const sections = generateSections();
  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");

  return (
    <div className="bg-gray-100 h-screen pl-[55%] md:pl-88 font-RB w-full flex flex-col">
      {/* HEADER */}
      <div className="p-5 pt-14 flex justify-between border-b-5 border-[#D9D9D9]">
        <h1 className="font-bold text-2xl p-5">Schedule</h1>

        <Link to="/profile">
          <div className="flex-col cursor-pointer active:scale-95">
            <img src={adminLogo} alt="admin" className="h-10.5 w-10.5" />
            <h1 className="text-xs text-center">Admin</h1>
          </div>
        </Link>
      </div>

      {/* CONTENT */}

      <main className="flex-1 overflow-y-auto px-5 sm:px-14 py-6">
        <div>
          {/* Top label */}
          <div className="flex justify-end pr-5 mb-3 text-base">
            <span>Schedule</span>
          </div>

          {/* Sections list */}
          <div className="space-y-2">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-gray-300 rounded-lg px-8 py-3 flex justify-between items-center"
              >
                <span className="text-base">{section}</span>

                <button
                  className="text-base hover:underline cursor-pointer"
                  onClick={() => {
                    setSelectedSection(section); // 👈 store clicked section
                    setShowModal(true);
                  }}
                >
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <ViewSchedule
        show={showModal}
        onClose={() => setShowModal(false)}
        yearSection={selectedSection} // 👈 pass prop
      />
    </div>
  );
};

export default Schedule;
