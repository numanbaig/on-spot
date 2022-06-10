import React from "react";
import CardIcon from "../../public/images/cardIcon.png";
import Image from "next/image";

interface CardProps {
  heading: string;
  name: string;
  icon: string;
  paragraph: string;
  heading2?: string;
  heading3?: string;
}

const Cards = ({
  heading,
  name,
  icon,
  paragraph,
  heading2,
  heading3,
}: CardProps) => {
  return (
    <div className=" ">
      <div className=" relative w-[100%]  ">
        <div className=" w-[229px] absolute top-[-71px]  ">
          <Image src={CardIcon} className=" " />{" "}
        </div>
        <div className="rounded-[7rem] bg-[#8BD10B] bg-opacity-100 w-[100%] min-w-[450px] h-[200px]  bg-[url('/images/CardBackground.png')] bg-no-repeat bg-center bg-[length:430px_175px] relative  mt-10 px-7 ">
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
              </p>
            </div>
            <div className="ml-[30px] w-24 ">
              <Image src={icon} />{" "}
            </div>
          </div>
        </div>
        <div className="mx-[auto] mt-[20px]  max-w-[350px] ">{paragraph}</div>
      </div>
    </div>
  );
};

export default Cards;
