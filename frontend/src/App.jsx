import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

function App() {

  useEffect(() => {
  const wakeUpBackend = async () => {
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/`);
      console.log("Backend is awake");
    } catch (error) {
      console.log("Backend wake-up request failed");
    }
  };

  wakeUpBackend();
}, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}

export default App;