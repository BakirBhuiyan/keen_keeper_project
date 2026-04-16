import React from 'react';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/footer';
import { Outlet } from 'react-router';

const Root = () => {
      return (
            <div>
                  <NavBar />
                  <Outlet />
                  <Footer />
            </div>
      );
};

export default Root;