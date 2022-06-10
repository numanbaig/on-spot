import React from "react";
import Button from "../UI-components/Button";
function Index() {
  return (
    <div
      className="w-[100%] h-auto relative
    xl:bottom-[250px] lg:bottom-[205px] md:bottom-[167px] sm:bottom-[145px] xs:bottom:[130px]
     z-[-1]"
    >
      <div
        style={{
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-[url(/images/hero.png)] no-repeat bg-inherit absolute w-[100%] flex items-end 
        xl:aspect-[4] lg:aspect-[3] md:aspect-[2.5] "
      >
        <div className="max-w-[46%]">
          <Button />
          <div className="md:w-[60%] lg:w-[58%] sm:w[90%] ml-auto">
            <p className=" py-[2rem] pr-[1rem]">
              Con más de 13 años de experiencia, presencia en 12 países y 454
              somos una de las principales plataformas de procesamientos de
              pagos a nivel mundial.
            </p>
          </div>
        </div>
        <div
          className="w-[51px] h-[22rem]"
          style={{
            backgroundColor: "#776C6C",
            clipPath: "polygon(25% 0%, 100% 2%, 100% 100%, 25% 100%);",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Index;
