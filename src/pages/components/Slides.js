import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const images = [
  {
    url: "https://i.ibb.co/WFp2Y3h/kyran-low-Mvk-LKGt-Bc-UA-unsplash.jpg",
  },
  {
    url: "https://i.ibb.co/6FpZD4p/vivek-kumar-JS-ohjocm00-unsplash.jpg",
  },
  {
    url: "https://i.ibb.co/fqCpJHv/aditya-siva-Hl-Qi14-Q-i-O0-unsplash.jpg",
  },
  {
    url: "https://i.ibb.co/Wt8qJh0/julian-yu-Wu-Pj-E-MPHo-unsplash.jpg",
  },
];

export default function Slides() {
  const images = [
    "https://i.ibb.co/PjBc2xc/Adobe-Stock-371514201-Preview.jpg",
    "https://i.ibb.co/R9XPbZr/Adobe-Stock-297399719-Preview.jpg",
    "https://i.ibb.co/HGKrD9c/Adobe-Stock-206169681-Preview.jpg",
    "https://i.ibb.co/RBM2xDt/Adobe-Stock-227762989-Preview.jpg",
  ];
  return (
    <>
      <div className="flex justify-center bg-opacity-60 backdrop-blur-sm">
        <h1 className="text-transparent font-bold text-5xl m-10 bg-clip-text bg-gradient-to-r from-[#ff8f4f] via-[#ffffff] to-[#42da3f]">EXPLORE INDIA</h1>
      </div>
      <Fade>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[0]})` }}></div>
        </div>
        {/* <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[1]})` }}></div>
        </div> */}
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[2]})` }}></div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[3]})` }}></div>
        </div>
      </Fade>
    </>
  );
}
