import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Youtube from "./components/Youtube/Youtube";
import Footer from "./components/Footer/Footer";
import Partner from "./components/Partner/Partner";
import ImagePart from "./components/ImagePart/ImagePart";
import VideoPart from "./components/VideoPart/VideoPart";
import TextImagePart from "./components/TextImagePart/TextImagePart";

const App = () => {
  return (
    <>
      <div id="header">
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <TextImagePart />
      </div>
      <div id="services">
        <VideoPart />
      </div>

      <div id="Highlights">
        <ImagePart />
      </div>
      <div id="Gallery">
        <Gallery />
      </div>
      <div id="Event">
        <Youtube />
      </div>
      <div id="Sponsers">
        <Partner />
      </div>
      <div id="about">
        <Footer />
      </div>
    </>
  );
};

export default App;
