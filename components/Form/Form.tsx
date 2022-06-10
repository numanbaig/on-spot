import React from "react";
import Image from "next/image";
import sideImage from "../../public/images/logoo.png";
import Checkbox from "../Atoms/Checkbox/Checkbox";
import girlImage from "../../public/images/sideGirl.png";
import Input from "../Atoms/Input/Input";
import Sidebar from "./Components/Sidebar";

const Form = () => {
  return (
    <div className="relative">
      <div className="bg-[#e2e2e2] p-5 ">
        <p className=" text-center font-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
          repellat iste eveniet aperiam eligendi libero totam
        </p>
        <div className="mt-5 mx-auto bg-no-repeat w-[70%] h-[729px] bg-[#ffff] rounded-[50px] flex pl-[70px] shadow-lg shadow-cyan-500/50 relative">
          <div className=" flex items-center justify-center gap-x-[132px] p-1">
            <div>
              <Image src={sideImage} alt="img" />
            </div>
            <div className="flex-initial my-4 max-w-[470px]">
              <Input label="NOMBRE DE CONTACTO" subLabel="(REQUERIDO)" />
              <div className="my-4">
                <Input
                  className="outline-none mt-2 border-b-2 border-[#8BD10B] pb-2 mt-2"
                  label="NOMBRE DE CONTACTO"
                  subLabel="(REQUERIDO)"
                />
              </div>
              <div className="my-4">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusantium, sequi.
                </p>
                <div className="flex items-center justify-center gap-x-2 my-2">
                  <Checkbox label="yes" />
                  <Checkbox label="No" />
                </div>
              </div>
              <div className="my-4">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusantium, sequi.
                </p>
                <div className="flex items-center justify-center gap-x-2 my-2">
                  <Checkbox label="yes" />
                  <Checkbox label="No" />
                </div>
              </div>
              <div className="my-4">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusantium, sequi.
                </p>
                <div className="flex items-center justify-center gap-x-2 my-2">
                  <Checkbox label="yes" />
                  <Checkbox label="No" />
                </div>
              </div>
              <div className="my-2">
                <Input label="NOMBRE DE CONTACTO" subLabel="(REQUERIDO)" />
              </div>
              <div className="my-2">
                <Input label="NOMBRE DE CONTACTO" subLabel="(REQUERIDO)" />
              </div>
              <div>
                <textarea className="outline-none border-b-2 border-l-2 w-full h-[130px] border-[#8BD10B] pb-2 mt- bg-[#e2e2e2]" />
              </div>
              <h2
                className="text-center font-extrabold text-[#8BD10B] text-[40px]"
              >
                ENVIAR
              </h2>
            </div>
          </div>
          <div className="absolute right-[-10%]">
            <Image src={girlImage} alt="img" />
          </div>
        </div>
      </div>
      <div className="absolute top-[20%] w-[550px]">
        <Sidebar />
      </div>
    </div>
  );
};

export default Form;
