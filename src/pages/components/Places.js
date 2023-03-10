import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
export default function Places(props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.4 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="bg-[#221b20] border-2 mb-6 pt-0 place-content-stretch border-[#bd8371] w-[300px] h-[400px] rounded-3xl md:flex-wrap md:m-auto flex flex-col md:flex-row justify-center align-middle m-auto md:mx-10 md:mt-[50px]"
      >
        <div className="flex flex-col mt-0 pt-0 md:flex-col justify-center align-middle text-center w-[100%]">
          <Image width={200} height={200} alt=""
            src={props.url}
            className="rounded-[50%] object-cover m-auto border-2 pt-0 text-center border-[#aa705f] w-[200px] h-[200px] mt-[20px] justify-center"
          ></Image>
          <h1 className="font-bold mt-6 text-[#D45D39]">
            <u>{props.name}</u>
          </h1>
          <p className="font-semibold text-xs w-[90%] m-4 text-[#D45D39]">
            {props.des}
          </p>
          <button className="text-[#202020] align-middle m-auto mb-4 bg-[#95503b] hover:bg-[#be8776] rounded-lg w-[120px]">
            LEARN MORE
          </button>
        </div>
      </motion.div>
    </>
  );
}
