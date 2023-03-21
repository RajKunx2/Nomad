import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
export default function Places(props) {
  const controls = useAnimation();
  const [ref, inView] = useInView({threshold:0.4});

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <>
      <motion.div id="places_div"
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.4 }}
        variants={{
          visible: { opacity: 1,  },
          hidden: { opacity: 0,  },
        }}
        className="bg-opacity-60 backdrop-blur-lg border-2 mb-6 pt-0 place-content-stretch border-[#7372b5] outline outline-[#7372b5] outline-offset-1 w-[300px] h-[400px] rounded-3xl md:flex-wrap md:m-auto flex flex-col md:flex-row justify-center align-middle m-auto md:mx-10 md:mt-[50px]"
      >
        <div className="flex flex-col mt-0 pt-0 md:flex-col justify-center align-middle text-center w-[100%]">
          <Image width={200} height={200} alt=""
            src={props.url}
            className="rounded-[50%] object-cover m-auto border-2 pt-0 text-center border-[#7372b5] outline outline-[#7372b5] outline-offset-1 w-[200px] h-[200px] mt-[20px] justify-center"
          ></Image>
          <h1 className="font-bold mt-6 text-[#ffffff]">
            <u>{props.name}</u>
          </h1>
          <p className="font-semibold text-xs w-[90%] m-4 text-[#cfcbc9]">
            {props.des}
          </p>
          <button className="text-[#dddbdb] align-middle m-auto mb-4 bg-[#848abd] hover:bg-[#908987] rounded-lg w-[120px]">
            LEARN MORE
          </button>
        </div>
      </motion.div>
    </>
  );
}
