import React from 'react';
import Header from './Header';
import Navigation from './Navigation';

const MainLayout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <Navigation />
      {children}
    </div>
  );
};

export default MainLayout;
