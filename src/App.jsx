import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./components/Home";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Loader />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutSection />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
      <Footer />
      </>
  );
}
