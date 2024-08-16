import React from "react";

const Roadmap = () => {
  return (
    <div 
      className="w-full h-[80vw] bg-no-repeat "
      style={{
        backgroundImage: 'url(images/roadmapbg.png)',
        backgroundSize: "100%, 100%"
      }}
    >
      <div id="road" className="flex flex-col w-full py-[12vw] px-[6vw] gap-[2vw] justify-between">
        <div className="text-[#FF4A4A] text-[4vw]">ROADMAP</div>
        <div className="flex flex-row w-full gap-[2vw] h-[60vw]">
          <div className=" flex flex-col gap-[2vw] w-[30vw]">
            <div className=" border-[2px] border-white p-[3vw] h-[60%]">
              <div className="text-[#FF4A4A] text-[4vw]">STEP1</div>
              <div className="text-white text-[4vw]">
                Genesis and founders liquidity
              </div>
            </div>
            <div className=" border-[2px] flex flex-col justify-between border-white h-[38%] p-[3vw] relative">
              <div className="text-[#FF4A4A] text-[3vw]">STEP4</div>
              <div className="flex flex-row justify-end ">
                <div className=" text-right text-white w-[50%] text-[3.5vw]">
                  Staking pools
                </div>
                <div className=" absolute left-0 bottom-0 w-[52%]">
                  <img src="./images/step4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-[2vw] w-[60vw]">
            <div className="h-[38%] gap-[2vw] flex flex-row w-full">
              <div className="flex-[2] border-[2px] border-white flex flex-col  p-[3vw]">
                <div className="text-[#FF4A4A] text-[3.5vw]">STEP2</div>
                <div className="text-white text-[2.5vw]" style={{textTransform:"uppercase"}}>
                    
                Transfer to microDAO /EXE custody to wait for full DAO functionality
                </div>
              </div>
              <div className="flex-1 flex flex-col border-[2px] border-white  p-[2vw] h-[70%]">
                <div className="text-[#FF4A4A] text-[3vw]">STEP3</div>
                <div className="text-[2vw] text-white">
                  MEME CONTEST AND COMMUNITY GROWTH
                </div>
              </div>
            </div>
            <div className="h-[60%] border-[2px] flex flex-col border-white p-[3vw] relative">
              <div className=" text-[6vw] text-[#FF4A4A]">STEP5</div>
              <div className=" text-white text-[4vw]">
                MICRODAO DECIDES WHAT TD DO WITH TREASURY AND HOW TO GROW!
              </div>
              <div className=" absolute right-0 top-0 -translate-y-[100%] w-[20vw]">
                <img src="./images/step5.png" alt="" className=" z-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
