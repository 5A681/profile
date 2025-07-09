import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProfileContent from "./components/ProfileContent/ProfileContent";
import ProfileImage from "./components/ProfileImage/ProfileImage";

// Create simple page components
const Home = () => <div style={{ padding: "2rem" }}>Home Page</div>;
const Projects = () => <div style={{ padding: "2rem" }}>Projects Page</div>;
const About = () => <div style={{ padding: "2rem" }}>About Page</div>;
const Blog = () => <div style={{ padding: "2rem" }}>Blog Page</div>;
const Contact = () => <div style={{ padding: "2rem" }}>Contact Page</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <div className="Content">
        <ProfileImage />
        <ProfileContent />
      </div>
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
