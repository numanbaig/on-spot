import React from "react";
import CardIcon from "../../public/images/cardIcon.png";
import Image from "next/image";
import Logo from "../../public/images/Logo.png";
import ChaturbateIcon from "../../public/images/ChaturbateIcon.png";
import StripCharIcon from "../../public/images/StripCharIcon.png";
import LiveJasmine from "../../public/images/Live_Jasmine_logo rojo.png";
import XmaodelsIcon from "../../public/images/XmaodelsIcon.png";
import CamsodaIcon from "../../public/images/CamsodaIcon.png";
import BangacomsIcon from "../../public/images/BangacomsIcon.png";

interface CardProps {
  heading: string;
  name: string;
  icon: string;
  paragraph: string;
  heading2?: string;
  heading3?: string;
  heading4?: string;
  cardIcons?: boolean;
  index?: number;
  name2?: string;

  textColor?: "dark" | "light";
}

const Cards = ({
  heading,
  name,
  icon,
  paragraph,
  heading2,
  heading3,
  heading4,
  textColor,
  cardIcons,
  name2,
  index,
}: CardProps) => {
  return (
    <div className=" ">
      <div className=" relative w-[100%]  mx-[1rem]">
        <div className=" w-[229px] absolute top-[-71px]  ">
          <Image src={CardIcon} className=" " />{" "}
        </div>

        <div className="rounded-[7rem] bg-[#8BD10B] bg-opacity-100 w-[100%] min-w-[450px] h-[200px]  bg-[url('/images/CardBackground.png')] bg-no-repeat bg-center bg-[length:381px_140px] relative  mt-10 px-7 z-10  ">
          <div className="flex justify-center items-center pt-[20px]">
            <div className="">
              <p className="text-[32px] font-black p-[0px] m-[0px] leading-1	">
                {" "}
                <span className="block  leading-1 text-[32px ">
                  {" "}
                  {heading3}{" "}
                </span>{" "}
                {heading}{" "}
              </p>

              <p className=" tracking-[1px] min-w-[200px] font-light   ">
                {name}
              </p>
              <p className="text-[32px] font-black p-[0px] m-[0px] leading-1 	">
                {" "}
                {heading2}{" "}
                <span className="block  leading-1 text-[32px ">{heading4}</span>
              </p>
              <p className=" tracking-[1px] min-w-[200px] font-light   ">
                {name2}
              </p>
            </div>
            <div className="ml-[20px] w-[5rem]">
              <Image src={icon} />{" "}
            </div>
          </div>
        </div>
        {cardIcons && (
          <div className="rounded-[5rem] bg-opacity-100 w-[100%] min-w-[450px] h-[200px] bg-[#fff] absolute top-[90px] flex flex-col justify-end  ">
            <div className=" flex justify-center items-center gap-4">
              <div className="w-[90px] h-[35px]">
                <Image src={ChaturbateIcon} />
              </div>
              <div className="w-[70px] h-[13px]">
                <Image src={Logo} className=" " />
              </div>
              <div className="w-[50px] h-[10px]">
                <Image src={XmaodelsIcon} className=" " />
              </div>
              <div className="w-[81px] h-[19px]">
                <Image src={StripCharIcon} className=" " />
              </div>
            </div>
            <div className="flex justify-center py-[10px] items-center gap-4">
              <div className="w-[70px] h-[10px]">
                <Image src={BangacomsIcon} className=" " />
              </div>
              <div className="w-[81px] h-[19px]">
                <Image src={CamsodaIcon} className=" " />
              </div>
              <div className="w-[81px] h-[19px]">
                <Image src={LiveJasmine} className=" " />
              </div>
            </div>
          </div>
        )}
        <div
          className={`mx-[auto]   max-w-[350px] ${
            textColor === "dark" ? "text-black" : "text-[#fff]"
          } ${index === 0 ? "mt-[110px]" : "mt-[20px]"} `}
        >
          {paragraph}
        </div>
      </div>
    </div>
  );
};

export default Cards;
