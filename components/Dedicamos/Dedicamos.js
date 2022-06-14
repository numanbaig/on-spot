import React from "react";
import Button from '../UI-components/Button'
const Dedicamos = () => {
  return (
    <div className="bg-[url('/images/Section5Background.png')] aspect-[8/3] bg-no-repeat w-[100%] bg-contain relative pt-[70px]">
      <div className=" w-[700px]">
        <div className="xl:w-[100%] lg:w-[80%] md:w-[50%]  sm:w-[47%] ">
          <Button title={'¿A QUÉ NOS'} subtitle={'DEDICAMOS?'}/>
        </div>
        <div className="flex flex-row-reverse mt-[3rem]">
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
