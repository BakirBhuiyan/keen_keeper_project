import React from 'react';
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import Toast from '../components/toast/Toast';
import { Outlet } from 'react-router';

const Root = () => {
      return (
            <div className="min-h-screen flex flex-col">
                  <NavBar />
                  <main className="flex-1">
                        <Outlet />
                  </main>
                  <Footer />
                  <Toast />
            </div>
      );
};

export default Root;