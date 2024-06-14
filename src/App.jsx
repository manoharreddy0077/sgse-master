import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import NavBar from "../src/components/NavBar/Navbar";
import Services from "./pages/services/Services";
import Projects from "./pages/projects/Projects";
import Footer from "./components/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        {/* <Route path="trainers" element={<Trainers/>}/> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
