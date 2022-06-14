import Image from "next/image";
import React from "react";
import sideImg from "../../public/images/sideImg.png";
import logos from "../../public/images/lgos.png";
import Sidebtn from "./components/Sidebtn";

const ThirdSection = () => {
  return (
    <div className="bg-[url('/images/thirdBg.png')] xl:h-[1000px] lg:h-[800px] md:h-[700px] w-[100%] bg-no-repeat bg-cover  md:top-[-369px] xl:top-[-254px] lg:top-[-300] relative">
      <div className="flex pt-[8em]">
        <div className="pl-[5rem] pt-[15rem] ">
          <p className="pl-[5rem] max-w-[500px] mb-8 w-[100%] font-normal text-[#ffff]">
            para algunas de las principales plataformas de la industria del
            entretenimiento para adultos en el mundo, entre ellas:
          </p>
          <Image src={logos} alt="logo" />
        </div>
        <div>
          <Image src={sideImg} alt="img" />
        </div>
      </div>
      <div className="absolute top-[17%] w-[100%] max-w-[500px]">
        <Sidebtn />
      </div>
    </div>
  );
};

export default ThirdSection;
