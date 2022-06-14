import React from "react";
import Image from "next/image";
import locationImg from "../../../public/images/LocationIcon.png";

const SideBtn = () => {
  return (
    <div
      style={{
        height: 160,
        backgroundColor: "#8BD10B",
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 20,
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        textAlign: "right",
        backgroundSize: "70%",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
      className="button bg-[url(/images/CardBackground.png)] "
    >
      <div className="ml-[2rem] pt-7 flex items-center">
        <div>
          <h1
            style={{
              textShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
              color: "white",
              fontSize: 30,
              textAlign: "left",
              paddingTop: 30,
              marginLeft: 20,
            }}
          >
            ¿DÓNDE
          </h1>
          <p
            style={{
              color: "white",
              fontSize: 16,
              textAlign: "left",
              marginLeft: 100,
              // paddingTop: 10,
            }}
          >
            SOMOS?
          </p>
        </div>
        <div className="self-end">
          <Image height={"60px"} width="40px" src={locationImg} alt="img" />
        </div>
      </div>
    </div>
  );
};
export default SideBtn;
