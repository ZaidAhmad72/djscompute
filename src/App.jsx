import React from "react";
import Navbar from "./components/navbar";
import aboutUs from "./components/aboutus";
import AboutUs from "./components/aboutus";
import Team from "./components/team";
import Contact from "./components/contact";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Team />
      <Contact />
      <Footer />
    </>

  )
}

export default App;