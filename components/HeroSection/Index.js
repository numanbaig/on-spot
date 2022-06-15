import React from "react";
import Button from "../Common/Button";
function Index() {
  return (
    <div
      className="w-[100%] h-auto relative
    xl:bottom-[250px] lg:bottom-[205px] md:bottom-[167px] sm:bottom-[145px] xs:bottom:[130px]
     z-[-1] mb-[11rem]"
    >
      <div
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-[url(/images/hero.png)] no-repeat xl:bg-top  lg:bg-top md:bg-right absolute w-[100%] flex items-center h-[600px] "
      >
        <div className="max-w-[46%] xl:pt-[4rem] lg:pt-[4rem] md:pt-[0] sm:pt-[0]">
         <div className="max-w-[68%]"><Button heading={'¿QUIÉNES '} subheading={'SOMOS?'}/></div> 
          <div className="md:w-[98%] lg:w-[58%] sm:w[90%] ml-auto ">
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
