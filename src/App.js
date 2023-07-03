import Header from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import { Routes,Route } from "react-router-dom";
import Albums from "./components/Albums";
import Footer from "./components/Footer";
import About from "./components/About";
import News from "./components/News";
import AlbumDetails from "./components/AlbumDetails";
import Home from "./components/Home";
import Add from "./components/Add";
function App() {
  return (
<>
   
    <Header/>
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="about" element={<About />} />
        <Route path="news/add" element={<Add />} />
        <Route path="albums/:albumId" element={<AlbumDetails />} />
      </Routes>


    <Footer/>
   </>
  );
}

export default App;
