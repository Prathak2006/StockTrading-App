import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import './Responsive.css'
import Home from "./components/Home";
import { CookiesProvider } from "react-cookie";


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
         <CookiesProvider>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
      </CookiesProvider>
    </BrowserRouter>

  </StrictMode>,
)
