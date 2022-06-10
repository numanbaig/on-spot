import type { NextPage } from "next";
import Head from "next/head";

import "../styles/Home.module.css";
import ImageSection from "../components/ImageSection/ImageSection";
import Service from "../components/Service/Service";
import Form from "../components/Form/Form";
import ThirdSection from "../components/ThirdSection/ThirdSection";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>On Spot</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImageSection />
      <Service />
      <ThirdSection />
      <Form />
    </div>
  );
};

export default Home;
