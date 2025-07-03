import Navbar from "./components/Navbar/Navbar";
import ProfileContent from "./components/ProfileContent/ProfileContent";
import ProfileImage from "./components/ProfileImage/ProfileImage";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="Content">
        <ProfileImage></ProfileImage>
        <ProfileContent></ProfileContent>
      </div>
    </>
  );
}

export default App;
