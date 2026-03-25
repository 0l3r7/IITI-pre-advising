import { useState } from "react";
import adminLogo from "../../src/dashboard/dashboardLOGO/adminLogo.png";
import { Link } from "react-router-dom";

export default function EditProfile() {
  const [activeTab, setActiveTab] = useState("Account Details");

  const tabs = ["Account Details", "Get Help", "Notifications", "Privacy"];

  return (
    <div className="h-full pl-[55%] md:pl-88 font-RB w-full bg-[#F5F5F5] min-h-screen">

      {/* HEADER */}
      <div className="bg-white shadow px-6 py-4 flex items-center justify-between border-b-[5px] border-[#D9D9D9]">
        <span className="text-[25px] font-bold text-black">Settings</span>

        <Link to="/profile">
          <div className="flex-col cursor-pointer active:scale-95">
            <img src={adminLogo} alt="admin" className="h-10.5 w-10.5" />
            <h1 className="text-xs text-center">Admin</h1>
          </div>
        </Link>
      </div>

      {/* TABS */}
      <div className="px-10 mt-6">
        <div className="bg-white border border-gray-300 rounded-xl flex justify-between px-6 py-3 text-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={()=> setActiveTab(tab)}
              className={`tab px-3 py-1 rounded-lg font-medium ${
                activeTab === tab
                  ? "bg-[#A0FBA3] text-black"
                  : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* PROFILE CONTENT */}
      <div className="px-10 py-10">

        {/* Profile Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.7 0 4.8-2.2 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8V22h19.2v-2.8c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
          <h2 className="text-[20px] font-bold text-black">Admin Dela Cruz</h2>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {[
            { label: "Full Name", value: "Admin Dela Cruz" },
            { label: "Username", value: "Admin" },
            { label: "Gsuite", value: "999999999999" },
            { label: "Position", value: "Admin" },
          ].map((field) => (
            <div key={field.label}>
              <label className="text-[12px] text-gray-500">{field.label}</label>
              <div className="mt-2 w-[508px] h-[58px] bg-white border border-gray-300 rounded-[20px] flex items-center px-5">
                <input
                  type="text"
                  value={field.value}
                  readOnly
                  className="w-full bg-transparent outline-none text-[14px] text-gray-700"
                />
              </div>
            </div>
          ))}
        </div>

        {/* LOGOUT BUTTON */}
        <div className="mt-10">
          <button className="bg-red-500 text-white text-sm px-5 py-2 rounded-full hover:bg-red-600 transition-colors">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}