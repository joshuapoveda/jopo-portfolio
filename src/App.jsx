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
      <div className="flex flex-col border-4  border-green min-h-screen box-content">
        <BrowserRouter>
          <Nav></Nav>
          <div className="flex flex-grow border-4 border-blue-700 back">
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
