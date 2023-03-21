import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="justify-center mt-20 flex px-[40px] py-0">
        <Marquee gradient={false} speed={200}>
          <h1 className="text-xl font-bold md:text-2xl lg:text-2xl h-auto font-mono text-slate-300 justify-center m-auto">
            <i>COME ON AS WE EMBARK ON A JOURNEY...</i>
          </h1>
          <h1 className="text-xl font-bold md:text-2xl lg:text-2xl h-auto font-mono text-slate-300 justify-center m-auto">
            <i>COME ON AS WE EMBARK ON A JOURNEY...</i>
          </h1>
        </Marquee>
      </div>
      <div className="w-screen space-around h-auto bg-opacity-60 backdrop-blur-lg mt-20 flex pt-0 flex-col lg:flex-row justify-center align-middle">
        <div className="mt-0 bg-opacity-10 backdrop-blur-xl">
          <div className="font-bold p-auto text-sm text-center justify-center align-middle w-auto text-[#cabbb7] m-auto mt-6 mb-4">
            <div className="align-middle flex justify-center font-bold w-auto h-auto px-6 mx-0 mt-auto">
              &#169; Nomads.Ltd, 143/2 Lane Street, Gurgaon-110043 E-Mail:
              contact@nomadsltd.com 
            </div>
          </div>
        </div>
        <div className="m-auto flex justify-center align-middle flex-col bg-opacity-10 backdrop-blur-xl">
          <div className="flex font-bold justify-center m-auto text-[#cabbb7] flex-col mt-1">
            SECURITY AND PAYMENTS
          </div>
          <div>
            <Image width={240} height={32} alt=""
              className="h-8 mt-3 w-60 m-auto object-contain"
              src="https://www.linkpicture.com/q/pngwing.com_53.png"
            ></Image>
          </div>
        </div>
        <div className="m-auto flex justify-center align-middle flex-col bg-opacity-10 backdrop-blur-xl">
          <div className="flex font-bold justify-center m-auto text-[#cabbb7] flex-col mt-3">
            KEEP IN TOUCH
          </div>
          <div>
            <Image width={240} height={32} alt=""
              className="h-16 bg-opacity-10 w-60 m-auto mt-0 object-contain"
              src="https://www.linkpicture.com/q/logo_734.png"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
