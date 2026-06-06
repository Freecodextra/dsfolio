import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../App.jsx";
import Navbar from "../components/ui/Navbar.jsx";
import Hero from "../components/sections/Hero.jsx";
import About from "../components/sections/About.jsx";
import Skills from "../components/sections/Skills.jsx";
import Projects from "../components/sections/Projects.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";

function Homepage() {
  const { theme } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    // If Preline static methods are active, re-init
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  }, [location.pathname]);

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      {/* Sticky glassmorphic navbar */}
      <Navbar />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto border-x border-zinc-150/40 dark:border-zinc-900/40 bg-white dark:bg-zinc-900/20 shadow-xl shadow-zinc-100/10 dark:shadow-none min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />

        <hr className="border-zinc-200 dark:border-zinc-800/80" />
        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default Homepage;