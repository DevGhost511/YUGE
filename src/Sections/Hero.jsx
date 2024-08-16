import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div id="home"
      className="w-full sm:h-[55vw] h-[210vw] bg-no-repeat sm:bg-[url(/public/images/Hero3.png)] bg-[url(/public/images/smHero1.png)] "
      style={{
        
        backgroundSize: "100%, 100%",
      }}
    >
        <Navbar/>
      
      <div className="sm:px-[10vw] sm:pt-[0.5vw] px-[10vw] pt-[24vw] justify-end flex flex-row gap-[1vw]">
        <button
          onClick={() =>
            window.open(
              "https://oc.app/community/scah5-eyaaa-aaaaf-bmzsq-cai/channel/281335575344703310511895461186893503918",
              "_blank"
            )
          }
          className="sm:w-[6vw] sm:h-[6vw] w-[12vw] h-[12vw] rounded-[1vw] bg-black hover:scale-110"
          style={{
            backgroundImage: "url(images/icon1.png)",
            backgroundSize: "100%, 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></button>
        <button
          onClick={() =>
            window.open(
              "https://x.com/yuge_icp",
              "_blank"
            )
          }
          className="sm:w-[6vw] sm:h-[6vw] w-[12vw] h-[12vw] rounded-[1vw] bg-black hover:scale-110"
          style={{
            backgroundImage: "url(images/icon2.png)",
            backgroundSize: "100%, 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></button>
      </div>
      <div className="sm:px-[29vw] sm:pt-[1vw] px-[16vw] pt-[40vw] justify-end flex items-center flex-row gap-8">
        <button
          onClick={() =>
            window.open(
              "https://info.icpswap.com/swap/token/details/nc4uk-iiaaa-aaaai-qpf5q-cai",
              "_blank"
            )
          }
          className="sm:px-[2vw] sm:py-[1vw] px-[10vw] py-[5vw] justify-end flex flex-row items-center  text-white font-medium hover:text-[#FF4A4A] hover:font-bold sm:text-[7vw] text-[12vw]"
          style={{
            backgroundImage: "url(images/border.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%, 100%",
          }}
        >
          BUY YUGE
        </button>
      </div>
    </div>
  );
};

export default Hero;
