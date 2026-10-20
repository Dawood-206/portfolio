import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import SEO from "./components/SEO";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <SidebarLeft />
      <div className="app-body">
        <div className="content">
          <main>
            <PageTransition>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <SEO
                        title="Home"
                        description="Frontend developer building clean, modern web experiences with React."
                        path="/"
                      />
                      <Home />
                    </>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <>
                      <SEO
                        title="About"
                        description="Learn about Muhammad Dawood — an ICS graduate and self-taught frontend developer from Gujarat, Pakistan."
                        path="/about"
                      />
                      <AboutPage />
                    </>
                  }
                />
                <Route
                  path="/skills"
                  element={
                    <>
                      <SEO
                        title="Skills"
                        description="Technologies Dawood works with: HTML, CSS, JavaScript, React, Git, and more."
                        path="/skills"
                      />
                      <SkillsPage />
                    </>
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <>
                      <SEO
                        title="Projects"
                        description="Frontend projects built by Muhammad Dawood — React apps, UIs, and experiments."
                        path="/projects"
                      />
                      <ProjectsPage />
                    </>
                  }
                />
                <Route
                  path="/education"
                  element={
                    <>
                      <SEO
                        title="Education"
                        description="Dawood's academic background — Intermediate (ICS) and Matriculation (Science) with strong grades."
                        path="/education"
                      />
                      <EducationPage />
                    </>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <>
                      <SEO
                        title="Contact"
                        description="Get in touch with Muhammad Dawood — available for freelance projects and collaborations."
                        path="/contact"
                      />
                      <ContactPage />
                    </>
                  }
                />
                <Route
                  path="*"
                  element={
                    <>
                      <SEO
                        title="Page Not Found"
                        description="The page you're looking for doesn't exist."
                        path="/"
                      />
                      <NotFound />
                    </>
                  }
                />
              </Routes>
            </PageTransition>
          </main>
          <Footer />
        </div>
        <SidebarRight />
      </div>
    </div>
  );
}