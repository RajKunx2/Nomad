import React from "react";
import Slides from "./Slides";
import Typewriter from "typewriter-effect";
import { easeIn, motion } from "framer-motion";
import { Transition } from "@headlessui/react";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="w-screen h-screen" id="front-page">
        <motion.nav
          animate={{
            x: 0,
          }}
          initial={{
            x: "-100vh",
          }}
          transition={{
            ease: "easeOut",
            duration: 1.8,
          }}
          className="flex md:mr-0 justify-between items-center w-[92%] pt-4 pl-4 flex-col md:flex-row mr-0 md:bg-black/0 "
        >
          <div className="align-logo">
            <Image
              alt=""
              width={160}
              height={100}
              className="w-40 pt-2 object-contain md:mx-4"
              src="https://i.ibb.co/Fm28TLK/logo-no-background.png"
              class="img-fluid rounded-top"
            ></Image>
          </div>
          <div className="">
            <ul className="flex items-center flex-row mt-4 md:flex-row md:mt-0 gap-[4vw]">
              <li className="mx-2 mt-3">
                <a
                  className=" text-white hover:text-slate-300 md:text-white  md:hover:text-slate-700"
                  href="a"
                >
                  Hotels
                </a>
              </li>
              <li className="mx-2 mt-3">
                <a
                  className=" text-white hover:text-slate-300 md:text-white  md:hover:text-slate-700"
                  href="a"
                >
                  Flights
                </a>
              </li>
              <li className="mx-2 mt-3">
                <a
                  className=" text-white hover:text-slate-300 md:text-white  md:hover:text-slate-700"
                  href="a"
                >
                  Tours
                </a>
              </li>
              <li className="mx-2 mt-3">
                <a
                  className=" text-white hover:text-slate-300 md:text-white  md:hover:text-slate-700 "
                  href="a"
                >
                  About-Us
                </a>
              </li>
            </ul>
          </div>
        </motion.nav>
        <span
          className="text-sky-50 text-[4em] sm:text-[6em] lg:text-[12em] mt-[20%] ml-[0.6em] lg:mt-0 lg:ml-0"
          id="animation"
        >
          <Typewriter
            options={{
              strings: ["Explore New Places", "Find Your New Home!"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
    </>
  );
}
