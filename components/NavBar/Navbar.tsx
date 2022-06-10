import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="no-repeat bg-center relative h-[11rem] w-[100%] flex items-end justify-around bg-[url('/images/nav-bg.png')] z-[100] items-center">
        <div  className="flex min-w-[32%] justify-around items-center mb-[4rem]" >
          <div className='w-[28px] h-[39px]'>
            <Image
              src="/images/left-arrow.png"
              alt="left-arrow"
              width={60}
              height={80}
            />
          </div>
          {["QUIENES SOWOS", "REPRCSENTACION", "EXCLUSIIVA"].map((link) => (
            <p key={link} className='mx-[.5rem] font-bold text-xs tracking-widest' >{link}</p>
          ))}
        </div>
        
        <div className="bg-[url('/images/nav-logo.png')] h-[29rem] absolute w-[30rem] bg-auto mx-auto left-0 right-[95px] top-[-255px]">
          <div className="h-[7rem] w-[8rem] absolute bottom-[62px] right-[65px]">
            <Image
              src="/images/logo-content.png"
              alt="logo"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
        </div>
        <div className="flex min-w-[35%] justify-around items-center mb-[4rem]">
        <div className="flex min-w-[50%] justify-around ">
          {["SCRVICIOS", "CONTACTENOS"].map((link) => (
            <p key={link} className='mx-[.5rem] font-bold text-xs tracking-widest'>{link}</p>
          ))}
          </div>
        </div>
      </div>
  );
};
export default NavBar;
