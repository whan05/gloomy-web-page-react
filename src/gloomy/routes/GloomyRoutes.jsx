import { Navigate, Route, Routes } from "react-router-dom";
import {
  HomePage,
  DesignPage,
  WebsitesPage,
  OurWorkPage,
  AboutPage,
  ContactPage,
  ProjectDetailPage,
  BrandingPage,
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
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/branding" element={<BrandingPage />} />
        <Route path="/our-work/:projectSlug" element={<ProjectDetailPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
