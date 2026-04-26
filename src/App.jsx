import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./components/Home";
import AboutSection from "./components/AboutSection";
import Courses from "./components/Courses";
import Gallery from "./components/Gallery";
import MainLayout from "./components/MainLayout";

export default function App() {
  return (
    <Routes>
      {/* Loader (No Navbar/Footer) */}
      <Route path="/" element={<Loader />} />

      {/* Pages with Navbar + Footer */}
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}