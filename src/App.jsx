import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './navbar/nav.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* CORE PAGES */}
        <Route path="/" element={<Nav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
