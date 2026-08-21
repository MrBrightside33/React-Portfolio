import "@/styles/global.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"
import { ScrollToTop } from "@/components/common/ScrollToTop"

import GuestLayout from "@/pages/guest/layout";

import HomePage from "@/pages/guest/home/index";
import AboutPage from "@/pages/guest/about/index";
import ContactPage from "@/pages/guest/contact/index";
import ProjectPage from "@/pages/guest/project/index";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <ScrollToTop />
    <Routes>
      {/* Guest Pages */}
      <Route element={<GuestLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Route>

      {/* Dashboard Pages */}
    </Routes>
  </BrowserRouter>,
)