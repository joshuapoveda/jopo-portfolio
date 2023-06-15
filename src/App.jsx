import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Github from "./components/Github";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between border-4 border-red-700">
        <BrowserRouter>
          <Nav></Nav>
          <div className="border-4 h-full border-blue-700">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/projects" element={<Projects />} />

              <Route path="/github" element={<Github />} />

              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
