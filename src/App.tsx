import "./App.scss";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about-us/AboutUs";
import Contact from "./pages/contact/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopButton from "./components/to-the-top-btn/TopButton";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <TopButton />
    </BrowserRouter>
  );
}

export default App;
