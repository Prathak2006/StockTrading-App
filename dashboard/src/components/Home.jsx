import { useEffect } from "react";


import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

function Home() {
 

  useEffect(() => {
    const verifyCookie = async () => {
    
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/verify`,
          {},
          {
            withCredentials: true,
          }
        );

        // Backend se status false aaya
        if (!data.status) {
          removeCookie("token");
          window.location.href =  `${import.meta.env.VITE_FRONTEND_URL}/login`;
        }
      } catch (error) {
        console.log("Verification error:", error);

        removeCookie("token");
        
        window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
      }
    };

    verifyCookie();
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
}

export default Home;