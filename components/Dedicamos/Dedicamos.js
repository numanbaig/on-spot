import React from "react";
import Button from "../Common/Button";

const Dedicamos = () => {
  return (
    <div className="bg-[url('/images/Section5Background.png')] h-[700px] bg-no-repeat w-[100%] bg-cover relative pt-[70px] top-[-193px]">
      <div className=" w-[700px] relative">
        <div className="max-w-[70%]">
          <Button heading={"¿A QUÉ NOS"} subheading={"DEDICAMOS?"} />
        </div>
        <div className="flex flex-row-reverse">
          <p className="w-[500px] text-end font-normal text-[14px] mt-[2rem]">
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
