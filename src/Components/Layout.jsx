import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
