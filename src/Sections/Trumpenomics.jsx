import React from "react";

const Trumpenomics = () => {
  return (
    <div id="lega"
      className="sm:w-full sm:h-[100vw] w-full h-[330vw] bg-no-repeat sm:bg-[url(/public/images/Trump.png)] bg-[url(/public/images/smTrump.png)]"
      style={{
        backgroundSize: "100%, 100%",
      }}
    >
      <div  className=" px-[6vw] pt-[12vw]">
        <div>
          <p className="text-[#FF4A4A] sm:text-[4vw] text-[8vw] font-medium">LEGACY</p>
        </div>
        <div className="sm:w-[40vw] w-[80vw]">
          <p className="text-white sm:text-[1.5vw] text-[4vw] font-normal">
            YUGE is the cryptocurrency that’s as <br /> bold and big as the name
            suggests.
            <br />
            Inspired by the spirit of Donald J.
            <br />
            Trump, YUGE is built on the ICP
            <br />
            blockchain to make waves, create <br />
            opportunities, and shake up the <br /> status quo
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-end px-[4vw] sm:py-[4vw] py-[4vw] pb-[120vw]">
        <div className="sm:w-[25vw] w-[60vw]">
          <p className="text-white sm:text-[1.5vw]  text-[4vw] font-normal">
            We’re here to make crypto YUGE
            <br /> again—one transaction at a time.
            <br /> Get ready to join a movement <br />
            that’s all about winning big.{" "}
          </p>
        </div>
      </div>
      <div id="trum" className=" px-[4vw]  sm:py-[1vw] py-[6vw]">
        <div>
          <p className="px-[2vw] sm:pt-[12vw] pt-[10vw] text-[#FF4A4A] sm:text-[4vw] text-[8vw] font-medium">
            TRUMPENOMICS
          </p>
        </div>
      </div>
      <div className=" flex flex-row sm:px-[20vw] sm:py-[0.5vw] px-[10vw] py-[0.5vw] sm:items-center items-end sm:justify-end justify-end sm:gap-[4vw] gap-[4vw]">
        <div
          className="sm:w-[6vw] sm:h-[6vw] w-[10vw] h-[10vw] "
          style={{
            backgroundImage: "url(images/arrow.png)",
            backgroundSize: "100%, 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <p className=" text-white sm:text-[2vw] w-[60vw] text-[4vw] font-normal ">
          YUGE is a Trump-inspired cryptocurrency designed
          to be as bold and impactful as the man himself.
        </p>
      </div>
      <div className=" flex flex-row sm:px-[20vw] sm:py-[0.5vw] px-[10vw] py-[0.5vw] items-center justify-start gap-[4vw]">
      <p className=" text-white sm:text-[2vw] text-[4vw]  font-normal ">
          Total Supply: 1,776,000,000 YUGE
        </p>
        <div
          className="sm:w-[6vw] sm:h-[6vw] w-[10vw] h-[10vw] "
          style={{
            backgroundImage: "url(images/arrow-mirror.png)",
            backgroundSize: "100%, 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className=" flex flex-row sm:px-[20vw] w-[] px-[10vw] py-[0.5vw] items-center justify-end gap-[4vw]">
        <div
          className="sm:w-[6vw] sm:h-[6vw] w-[10vw] h-[10vw]"
          style={{
            backgroundImage: "url(images/arrow.png)",
            backgroundSize: "100%, 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <p className=" text-white sm:text-[2vw] w-[60vw] text-[4vw] font-normal ">
          Reflecting the spirit of 1776, symbolizing independence and greatness. Burning Fee: 1 YUGE per transaction
        </p>
      </div>
      <div className=" flex flex-row sm:px-[20vw] px-[10vw] py-[1vw] items-center justify-start gap-[4vw]">
      <p className=" text-white sm:text-[2vw] text-[4vw] font-normal ">
          A fee that reduces supply, creating scarcity and value over time. Join{" "}
          the YUGE movement on the ICP blockchain and make crypto YUGE again!{" "}
        </p>
        
      </div>
    </div>
  );
};

export default Trumpenomics;
