import React from "react";
import MainPage from "../components/HMComponents/HomePage/MainPage";
import Section_2 from "../components/HMComponents/SecondSection/Section_2";
import Section_3 from "../components/HMComponents/ThirdSection/Section_3";
import Section_4 from "../components/HMComponents/FourthSection/Section_4";
import Section_5 from "../components/HMComponents/FifthSection/Section_5";
import Section_last_ from "../components/HMComponents/FinalSection/Section_last_";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MainPage />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_last_ />
      <Footer />
    </div>
  );
};

export default Home;
