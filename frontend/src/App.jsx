import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}

export default App;