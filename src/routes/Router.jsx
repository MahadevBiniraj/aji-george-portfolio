import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import { Loading } from "../components/ui";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Journey = lazy(() => import("../pages/Journey"));
const Experience = lazy(() => import("../pages/Experience"));
const Expertise = lazy(() => import("../pages/Expertise"));
const AuditRisk = lazy(() => import("../pages/AuditRisk"));
const Achievements = lazy(() => import("../pages/Achievements"));
const Credentials = lazy(() => import("../pages/Credentials"));
const Resume = lazy(() => import("../pages/Resume"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

const page = (El) => (
  <Suspense fallback={<Loading />}>
    <El />
  </Suspense>
);

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: page(Home) },
        { path: "about", element: page(About) },
        { path: "journey", element: page(Journey) },
        { path: "experience", element: page(Experience) },
        { path: "expertise", element: page(Expertise) },
        { path: "audit-risk", element: page(AuditRisk) },
        { path: "achievements", element: page(Achievements) },
        { path: "credentials", element: page(Credentials) },
        { path: "resume", element: page(Resume) },
        { path: "contact", element: page(Contact) },
        { path: "*", element: page(NotFound) },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);
