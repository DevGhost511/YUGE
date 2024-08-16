import React, { useState } from "react";

const Navbar = () => {
  const [menuExpand, setMenuExpand] = useState(false);

  return (
    <nav className="sm:relative absolute w-full px-[4vw] py-[2vw] z-50">
      <div className="  rounded-full bg-gradient-to-b from-[#1127ef58] to-[#f6020a59]">
        <div className="px-[4vw] py-[0.5vw] flex-row items-center w-full justify-between sm:flex hidden ">
          <a href="#lega">
            <p className="text-white font-semibold font-[Bebas Neue] text-[3vw] hover:text-[#FF4A4A] ">
              LEGACY
            </p>
          </a>
          <a href="#trum">
            <p className="text-white font-semibold font-[Bebas Neue] text-[3vw] hover:text-[#FF4A4A] ">
              TRUMPENOMICS
            </p>
          </a>
          <a href="#road">
            <p className="text-white font-semibold font-[Bebas Neue] text-[3vw] hover:text-[#FF4A4A]">
              ROADMAP
            </p>
          </a>
          <a href="#home">
            <div
              className="w-[8vw] h-[8vw] bg-cover"
              style={{
                backgroundImage: "url(images/logo.png)",
                backgroundSize: "100%, 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </a>
          <a href="#mega">
            <p className="text-white font-semibold font-[Bebas Neue] text-[3vw] hover:text-[#FF4A4A] ">
              MEGA PAPER
            </p>
          </a>
          <a href="#merc">
            <p className="text-white font-semibold font-[Bebas Neue] text-[3vw] hover:text-[#FF4A4A] ">
              MERCH
            </p>
          </a>
          <a href="#disc">
            <p className="text-white font-semibold font-[Bebas Neue] text-[3vw] hover:text-[#FF4A4A]  ">
              DISCLAIMER
            </p>
          </a>
        </div>
      </div>

      {menuExpand ? (
        <div className="bg-gradient-to-b from-[#1127ef99] to-[#f6020ab0] sm:hidden flex rounded-[5vw] justify-between items-center px-[4vw]">
          <div className="flex flex-col py-[2vw]">
            <a href="#lega">
              <p onClick={() => setMenuExpand(false)} className="text-white font-semibold font-[Bebas Neue] text-[4vw] hover:text-[#FF4A4A] ">
                LEGACY
              </p>
            </a>
            <a href="#trum">
              <p onClick={() => setMenuExpand(false)} className="text-white font-semibold font-[Bebas Neue] text-[4vw] hover:text-[#FF4A4A] ">
                TRUMPENOMICS
              </p>
            </a>
            <a href="#road">
              <p onClick={() => setMenuExpand(false)} className="text-white font-semibold font-[Bebas Neue] text-[4vw] hover:text-[#FF4A4A]">
                ROADMAP
              </p>
            </a>

            <a href="#mega">
              <p onClick={() => setMenuExpand(false)} className="text-white font-semibold font-[Bebas Neue] text-[4vw] hover:text-[#FF4A4A] ">
                MEGA PAPER
              </p>
            </a>
            <a href="#merc">
              <p
                onClick={() => setMenuExpand(false)}
                className="text-white font-semibold font-[Bebas Neue] text-[4vw] hover:text-[#FF4A4A] "
              >
                MERCH
              </p>
            </a>
            <a href="#disc">
              <p
                onClick={() => setMenuExpand(false)}
                className="text-white font-semibold font-[Bebas Neue] text-[4vw] hover:text-[#FF4A4A]  "
              >
                DISCLAIMER
              </p>
            </a>
          </div>
          <div
            onClick={() => setMenuExpand(false)}
            className="w-[10vw] h-[10vw]"
            style={{
              backgroundImage: "url(images/cross.png)",
              backgroundSize: "100%, 100% ",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      ) : (
        <div className="bg-gradient-to-b from-[#1127ef99] to-[#f6020ab0] sm:hidden flex rounded-full justify-between items-center px-[4vw] py-[2vw]">
          <a href="#home">
            <div
              className="w-[10vw] h-[10vw] bg-cover"
              style={{
                backgroundImage: "url(images/logo.png)",
                backgroundSize: "100%, 100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </a>
          <div
            onClick={() => setMenuExpand(true)}
            className="w-[10vw] h-[10vw] bg-cover"
            style={{
              backgroundImage: "url(images/menu1.png)",
              backgroundSize: "100%, 100% ",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
