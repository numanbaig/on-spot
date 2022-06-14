import type { NextPage } from "next";

import "../styles/Home.module.css";
import ImageSection from "../components/ImageSection/ImageSection";
import Service from "../components/Service/Service";
import Dedicamos from "../components/Dedicamos/Dedicamos";

import Form from "../components/Form/Form";
import ThirdSection from "../components/ThirdSection/ThirdSection";
import Head from "next/head";
import HeroSection from "../components/HeroSection/Index";
import Section7 from "../components/Section7";
import WherePage from "../components/WherePage";
import "../styles/Home.module.css";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>On Spot</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ImageSection />
          <HeroSection />
            <WherePage />
            <Dedicamos />
            <ThirdSection />
            <Service />
            <Section7 /> 
        <Form />
      </div>
      {/* <Form /> */}
    </div>
  );
};

export default Home;
