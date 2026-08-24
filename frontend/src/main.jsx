import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import './App.css'
import App from "./App";
import HomePage from "./landing_page/Home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from "./landing_page/products/ProductPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";
import Signup from "./landing_page/signup/SignUp";
import Login from "./landing_page/login/Login";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CookiesProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage/>} />
          <Route path="products" element={<ProductPage />} />
          <Route path="Pricing" element={<PricingPage />} />
          <Route path="support" element={<SupportPage/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="login" element={<Login/>} />
           <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </CookiesProvider>
    </BrowserRouter>
  </StrictMode>
);