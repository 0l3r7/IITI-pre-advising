import { useState } from "react";

export default function AddScheduleModal({ show, onClose }) {
  if (!show) return null;

  const subjects = {
    "HCI 101": "Human - Computer Interaction",
    "IAS 101": "Information Assurance and Security",
    "PF 101": "Programming Fundamentals",
  };

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const times = [
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:30 PM",
  ];

  const [subjectCode, setSubjectCode] = useState("HCI 101");
  const [day, setDay] = useState("Monday");
  const [startTime, setStartTime] = useState("3:00 PM");
  const [endTime, setEndTime] = useState("5:00 PM");
  const [room, setRoom] = useState("");

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 font-RB">
      {/* Modal */}
      <div className="bg-white w-175 rounded-lg shadow-lg p-6">
        {/* Top line */}
        <div className="border-b border-black/20 mb-6"></div>

        <div className="space-y-5 text-sm">
          {/* Subject */}
          <div className="flex items-center gap-4">
            <label className="w-32">Subject Code:</label>

            <select
              value={subjectCode}
              onChange={(e) => setSubjectCode(e.target.value)}
              className="border p-2 rounded w-32 border-gray-400"
            >
              {Object.keys(subjects).map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>

            <input
              type="text"
              value={subjects[subjectCode]}
              className="border px-4 py-2 rounded w-[320px] border-gray-400"
              readOnly
            />
          </div>

          {/* Instructor */}
          <div className="flex items-center gap-4">
            <label className="w-32">Instructor:</label>

            <select className="border p-2 rounded w-56 border-gray-400">
              <option>Carmeli Marie Joy Ancan</option>
              <option>Juan Dela Cruz</option>
            </select>
          </div>

          {/* Day */}
          <div className="flex items-center gap-4">
            <label className="w-32">Day:</label>

            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="border p-2 rounded w-48 border-gray-400"
            >
              {days.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Time */}
          <div className="flex items-center gap-4">
            <label className="w-32">Time:</label>

            <select
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="border p-2 rounded w-32 border-gray-400"
            >
              {times.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            <span>-</span>

            <select
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="border p-2 rounded w-32 border-gray-400"
            >
              {times
                .filter((t) => times.indexOf(t) > times.indexOf(startTime))
                .map((t) => (
                  <option key={t}>{t}</option>
                ))}
            </select>
          </div>

          {/* Room */}
          <div className="flex items-center gap-4">
            <label className="w-32">Room:</label>

            <input
              type="text"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="border p-2 rounded w-[320px] border-gray-400"
              placeholder="Enter room"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            className="px-6 border border-gray-400 text-black/50 rounded"
          >
            Cancel
          </button>

          <button className="px-6 bg-[#1C6100] shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)] text-white rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
