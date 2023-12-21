// Layout.tsx
import React from 'react';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';


interface IAppProps {
    children: React.ReactNode;
}

const App: React.FC<IAppProps> = ({ children }) => {
  return (
    <>
    <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default App;