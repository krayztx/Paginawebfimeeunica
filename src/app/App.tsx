import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Programs } from "./components/Programs";
import { Curriculum } from "./components/Curriculum";
import { Footer } from "./components/Footer";
import { Authorities } from "./components/Authorities";
import { Teachers } from "./components/Teachers";
import { ThemeProvider } from "./providers/ThemeProvider";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "authorities" | "teachers"
  >("home");

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        {currentPage === "home" ? (
          <main>
            <Hero />
            <About />
            <Programs />
            <Curriculum />
          </main>
        ) : currentPage === "authorities" ? (
          <Authorities />
        ) : (
          <Teachers />
        )}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
