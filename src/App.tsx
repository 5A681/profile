import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";

// Create simple page components
const About = () => <div style={{ padding: "2rem" }}>About Page</div>;
const Blog = () => <div style={{ padding: "2rem" }}>Blog Page</div>;
const Contact = () => <div style={{ padding: "2rem" }}>Contact Page</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
