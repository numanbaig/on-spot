import Image from "next/image";
import React from "react";
import sideImg from "../../public/images/sideImg.png";
import logos from "../../public/images/lgos.png";

const ThirdSection = () => {
  return (
    <div className="bg-[url('/images/thirdBg.png')] h-[100%] w-[100%] bg-no-repeat bg-cover">
      <div className="flex items-center pt-[8em]">
        <div className="pl-[5rem] mt-32">
          <p className="px-[10rem] font-normal text-[22px] text-[#ffff]">
            para algunas de las principales plataformas de la industria del
            entretenimiento para adultos en el mundo, entre ellas:
          </p>
          <Image src={logos} alt="logo" />
        </div>
        <div>
          <Image src={sideImg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
 