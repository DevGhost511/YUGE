import React from "react";

const MegaPaper = () => {
  return (
    <div
    id="mega"
      className=" h-[56vw] relative"
      style={{
        backgroundImage: "url(images/Group59445.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%, 100%",
      }}
    >
      <div className="text-white absolute right-[30vw] top-[15vw]">
        <div onClick={()=>{
            window.open('whitepaper/whitepaper2.1.pdf', '_blank');}} className=" relative hover:cursor-pointer" >
          <div  className="relative text-center left-[6vw]">
            <div className="text-[3.5vw]">READ</div>
            <div style={{ textTransform: "uppercase" }} className="text-[2vw]">
              Mega Paper
            </div>
          </div>
          <div className=" absolute top-[-5vw] w-[20vw] h-[20vw]">
            <img src="images/legacy.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaPaper;
