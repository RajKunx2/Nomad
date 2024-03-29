import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slides from "./components/Slides";
import Quotes from "./components/Quotes";
import Places from "./components/Places";
import NorthData from "src/NorthData.js";
import WestData from "src/WestData.js";
import SouthData from "src/SouthData.js";
import EastData from "src/EastData.js";
import { motion, useScroll } from "framer-motion";
import Head from "next/head";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const main1 = NorthData.map((item) => {
    return <Places {...item} key={item.id} />;
  });
  const main2 = WestData.map((item) => {
    return <Places {...item} key={item.id} />;
  });
  const main3 = SouthData.map((item) => {
    return <Places {...item} key={item.id} />;
  });
  const main4 = EastData.map((item) => {
    return <Places {...item} key={item.id} />;
  });
  return (
    <>
    <Head>
        <title>Nomads</title>
      </Head>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <Slides />
      <Quotes />
      <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff8f4f] via-[#ffffff] to-[#42da3f] text-center mt-[1em] m-auto mb-[1em] font-bold">
        NORTH INDIA
      </h1>
      <div className="flex flex-col justify-center align-middle">
        <div className=" flex flex-row justify-center align-middle flex-wrap mt-8 m-auto md:flex-col ">
          <div
            className="flex flex-col flex-wrap md:flex-row px-[50px] w-screen"
            id="place-div"
          >
            {main1}
          </div>
        </div>
      </div>
      <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff8f4f] via-[#ffffff] to-[#42da3f] text-center mt-[2em] mb-[0.6em] m-auto font-bold">
        EAST INDIA
      </h1>
      <div className="flex flex-col justify-center align-middle mt-0">
        <div className=" flex flex-col justify-center align-middle flex-wrap mt-8 m-auto md:flex-col ">
          <div
            className="flex flex-col flex-wrap md:flex-row px-[50px] w-screen"
            id="place-div"
          >
            {main4}
          </div>
        </div>
      </div>
      <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff8f4f] via-[#ffffff] to-[#42da3f] text-center mt-[2em] mb-[0.6em] m-auto font-bold">
        SOUTH INDIA
      </h1>
      <div className="flex flex-col justify-center align-middle mt-0">
        <div className=" flex flex-col justify-center align-middle flex-wrap mt-8 m-auto md:flex-col ">
          <div
            className="flex flex-col flex-wrap md:flex-row px-[50px] w-screen"
            id="place-div"
          >
            {main3}
          </div>
        </div>
      </div>
      <h1 className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff8f4f] via-[#ffffff] to-[#42da3f] text-center mt-[2em] mb-[0.6em] m-auto font-bold">
        WEST INDIA
      </h1>
      <div className="flex flex-col justify-center align-middle mt-0">
        <div className=" flex flex-col justify-center align-middle flex-wrap mt-8 m-auto md:flex-col ">
          <div
            className="flex flex-col flex-wrap md:flex-row px-[50px] w-screen"
            id="place-div"
          >
            {main2}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
