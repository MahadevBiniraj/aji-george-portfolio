import React, { useEffect } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "instant" in window ? "instant" : "auto" }); }, [pathname]);
  return null;
}

export default function RootLayout() {
  const location = useLocation();
  const outlet = useOutlet();
  const reduce = useReducedMotion();

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-paper">
      <ScrollReset />
      <Navbar />
      <main className="flex-1">
        <motion.div
          key={location.pathname}
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 1] }}
        >
          {outlet}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
