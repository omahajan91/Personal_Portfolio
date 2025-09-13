// src/layouts/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#111111] overflow-x-hidden">
      <Header />
      <main>
        {/* The Outlet component renders the matched child route component */}
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
