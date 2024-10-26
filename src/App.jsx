import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Home, Onboarding } from "./pages";
const App = () => {
  return (
    <div className="relative flex min-h-screen flex-row bg-[#13131a] p-4">
      <div className="relative mr-10 hidden sm:flex">
        {/* Sidebar */}
        <Sidebar />
      </div>

      <div className="max-sm:w-fullsm:pr-5 mx-auto max-w-[1280px] flex-1">
        {/* Navbar */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
