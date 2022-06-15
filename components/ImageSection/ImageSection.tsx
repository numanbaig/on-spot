import React from "react";
import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
const ImageSection = () => {
  return (
    <div
      style={{ backgroundSize: "100% auto" }}
      className="relative aspect-[3/2] flex  justify-center 
        bg-[url(/images/section1.jpg)] no-repeat bg-top bg-no-repeat bottom-[6rem]"
    >
      <div className="flex flex-col absolute left-0 top-[150px] bg-[#fff] p-2 rounded-r-lg">
        {[
          { icon: <FacebookIcon sx={{ color: "#fff", fontSize: 40 }} /> },
          { icon: <InstagramIcon sx={{ color: "#fff", fontSize: 40 }} /> },
          { icon: <TwitterIcon sx={{ color: "#fff", fontSize: 40 }} /> },

        ].map((item, index) => (
          <div key={index} className="flex rounded-lg shadow-xl justify-center items-center m-2 p-[.3rem]" style={{ backgroundColor: 'var( --color-primary)' }} >
            {item.icon}
          </div>
        ))}
      </div>

      <div className="absolute text-secondary right-0 top-[150px]">
        <h6 style={{ fontFamily: "Montserrat-Light" }} className="pl-[2rem]">
          <b
            style={{ fontFamily: "Montserrat-Bold" }}
            className="font-extrabold"
          >
            {" "}
            DE LAS{" "}
          </b>{" "}
          PRINCIPALES{" "}
        </h6>
        <div
          style={{ backgroundColor: "var(--color-primary)" }}
          className=" rounded-l-[20px] pl-[2rem] pr-[10rem]"
        >
          <h1 className="text-[30px]">PLATAFORMAS</h1>
        </div>
        <div className="relative">
          <h1 className="pl-[2rem] mt-2 text-[50px] leading-[50px]">
            A TU <br />
            CUENTA <br />
            BANCARIA
          </h1>
          <div className="flex absolute left-[160px]  top-[0px]">
            {[
              { icon: <WorkRoundedIcon /> },
              { icon: <MonetizationOnRoundedIcon /> },
              { icon: <HandshakeRoundedIcon /> },
            ].map((item, index) => (
              <div key={index} className="flex justify-center items-center m-2 rounded-full p-[.3rem]" style={{ backgroundColor: 'var(--color-primary)' }}>
                {item.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <div className="m-w-[400px]">
            <div
              style={{
                backgroundColor: "var(--color-primary)",
                textAlign: "right",
              }}
              className="m-w-[400px] mt-4 rounded-l-[50px] pl-[2rem] pr-[5rem]"
            >
              <p className="pr-[2rem] text-[28px] leading-[35px] font-thin">
                <b style={{ fontFamily: "Montserrat-Bold" }}>AL MENOR </b>
                <br /> COSTO POSIBLE{" "}
              </p>
            </div>
            <h1 className="pl-[2rem] leading-[40px] text-[25px]">
              <b style={{ fontFamily: "Montserrat-Light" }}> SIN </b>{" "}
              INTERMEDIARIOS{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageSection;
