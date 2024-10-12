import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="bg-background h-screen">
      <Navbar />
      <div className="bg-background "> {/* Adjust padding here to offset navbar height */}
        <Outlet /> {/* Content will be rendered here */}
      </div>
    </div>
  );
}

export default Layout;
