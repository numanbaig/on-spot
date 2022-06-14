import React from "react";

const Dedicamos = () => {
  return (
    <div className="bg-[url('/images/Section5Background.png')] h-[700px] bg-no-repeat w-[100%] bg-cover relative pt-[70px] top-[25px]">
      <div className=" w-[700px] relative">
        <div className="h-[120px] w-[350px] bg-[#8bd10d] mb-10 rounded-tr-[147px] rounded-br-[15px]  bg-[url('/images/CardBackground.png')] bg-no-repeat bg-center bg-[length:276\px_102px] ">
          <div className=" flex flex-col justify-items-end text-center  p-[20px]">
            <h3 className="text-[#fff] text-[32px] leading-1">¿A QUÉ NOS</h3>
            <p className="text-[#fff] text-[20px] leading-1 font-normal">
              DEDICAMOS?{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <p className="w-[500px] text-end font-normal text-[14px]">
            Nuestro objetivo es garantizar una manera legal, segura y oportuna
            de que nuestros usuarios dispongan del dinero producido en las
            principales plataformas de la industria del entretenimiento para
            adultos, al menor costo posible, sin intermediarios.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dedicamos;
