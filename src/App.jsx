import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Login from "./login/login.jsx";
import Nav from "./navbar/nav.jsx";

import YearLevel from "./yearLevel/yearLevel.jsx";
import Section from "./yearLevel/section/section.jsx";
import List from "./yearLevel/list/list.jsx";
import ViewGrade from "./yearLevel/viewGrade/viewGrade.jsx";
import SecondSemester from "./yearLevel/viewGrade/secondSemester.jsx";

import Teacher from "./teacher/teacher.jsx";
import Schedule from "./schedule/schedule.jsx";
import ViewSection from "./schedule/viewSection.jsx";
import ViewSchedule from "./schedule/viewSchedule.jsx";
import Settings from "./settings/settings.jsx";

import Profile from "./settings/profile.jsx";

// Lazy loaded dashboard (CSS loads only when needed)
const Dashboard = lazy(() => import("./dashboard/dashboard.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login page (NO navbar) */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={null}>
              <Nav />
              <Dashboard />
            </Suspense>
          }
        />

        {/* Year Level */}
        <Route
          path="/year-level"
          element={
            <>
              <Nav />
              <YearLevel />
            </>
          }
        />

        {/* Teacher */}
        <Route
          path="/teacher"
          element={
            <>
              <Nav />
              <Teacher />
            </>
          }
        />

        {/* Schedule */}
        <Route
          path="/schedule"
          element={
            <>
              <Nav />
              <Schedule />
            </>
          }
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={
            <>
              <Nav />
              <Settings />
            </>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <>
              <Nav />
              <Profile />
            </>
          }
        />

        {/* Section */}
        <Route
          path="/section"
          element={
            <>
              <Nav />
              <Section />
            </>
          }
        />

        {/* List */}
        <Route
          path="/list"
          element={
            <>
              <Nav />
              <List />
            </>
          }
        />

        {/* view grade*/}
        <Route
          path="/viewGrade"
          element={
            <>
              <Nav />
              <ViewGrade />
            </>
          }
        />

        {/* second semester*/}
        <Route
          path="/secondSemester"
          element={
            <>
              <Nav />
              <SecondSemester />
            </>
          }
        />

        {/* view section*/}
        <Route
          path="/viewSection"
          element={
            <>
              <Nav />
              <ViewSection />
            </>
          }
        />

        {/* view schedule*/}
        <Route
          path="/viewSchedule"
          element={
            <>
              <Nav />
              <ViewSchedule />
            </>
          }
        />
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
