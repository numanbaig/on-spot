import React from "react";
import Image from "next/image";
import mapImg from "../../public/images/mapImg.png";
import SideBtn from "./Components/SideBtn";

const index = () => {
  return (
    <div className="flex bg-[url('/images/asset6.png')] bg-cover h-[700px] items-center justify-center gap-x-[10rem] pb-[3rem]">
      <div>
        <Image src={mapImg} alt="" />
      </div>
      <div>
        <p className="max-w-[400px] mt-[8rem] text-[#ffff]">
          Contamos con oﬁcinas y representantes directos en el territorio
          colombiano, actualmente estamos ubicados en las ciudades de Bogotá,
          Bucaramanga, Medellín, Pereira y Santiago de Cali.
        </p>
      </div>
      <div className="absolute right-0 top-[20%] w-[500px]">
        <SideBtn />
      </div>
    </div>
  );
};

export default index;
