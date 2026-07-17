import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

// Lazy load route pages for code-splitting
const Home = lazy(() => import("../pages/Home/Home"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Solutions = lazy(() => import("../pages/Solutions/Solutions"));
const SapService = lazy(() => import("../pages/SapService/SapService"));
const Industries = lazy(() => import("../pages/Industries/Industries"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs"));
const Career = lazy(() => import("../pages/Career/Career"));
const ServiceDetails = lazy(() => import("../pages/ServiceDetails/ServiceDetails"));
const BlogDetails = lazy(() => import("../pages/BlogDetails/BlogDetails"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const CaseStudyDetails = lazy(() => import("../pages/CaseStudyDetails/CaseStudyDetails"));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={null}>
        <Routes>
          <Route path="sitemap.xml" element={null} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="solutions/:type" element={<Solutions />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="services/:category/:type" element={<Solutions />} />
            <Route path="services/:type" element={<Solutions />} />
            <Route path="sap-service" element={<SapService />} />
            <Route path="industries" element={<Industries />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="career" element={<Career />} />
            <Route path="blog/:id" element={<BlogDetails />} />
            <Route path="case-study/:id" element={<CaseStudyDetails />} />
            <Route path="service-details/:type" element={<ServiceDetails />} />
            <Route path="service-details" element={<ServiceDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
