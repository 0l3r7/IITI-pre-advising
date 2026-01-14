import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Login from "./login/login.jsx";
import Nav from './navbar/nav.jsx';

import YearLevel from './yearLevel/yearLevel.jsx';
import Teacher from './teacher/teacher.jsx';
import Schedule from './schedule/schedule.jsx';
import Settings from './settings/settings.jsx';

// Lazy loaded dashboard (CSS loads only when needed)
const Dashboard = lazy(() => import("./dashboard/dashboard.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login page (NO navbar) */}
        <Route path="/" element={<Login />} />

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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
