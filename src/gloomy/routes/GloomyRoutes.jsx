import { Navigate, Route, Routes } from "react-router-dom";
import {
  HomePage,
  DesignPage,
  WebsitesPage,
  OurWorkPage,
  AboutPage,
  ServicesPage,
  ContactPage,
} from "../pages";
import { MainLayout } from "../Layout/Main/MainLayout";

export const GloomylRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/websites" element={<WebsitesPage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/our-work" element={<OurWorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
