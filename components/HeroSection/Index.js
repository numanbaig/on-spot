import React from "react";

function Index() {
  return (
    <div className="w-[100%] h-auto relative bottom-[225px] z-[-1]">
      {/* <div
        style={{
          borderRadius: "0 6rem .5rem 0",
          backgroundColor: "var(--color-primary)",
        }}
        className="absolute w-[%10] md:w-32 lg:w-48 text-right p-[1rem]"
      >
        <h4>QUESO</h4>
        <p>SOMOS?</p>
      </div> */}
      <div
        style={{ backgroundSize: "100% auto",backgroundRepeat:"no-repeat"}}
        className="bg-[url(/images/hero.png)] no-repeat bg-inherit absolute  h-[21rem] w-[100%] flex items-end  "
      >
        <div className="w-[50%] flex items-end ">
          <div className="md:w-[60%] lg:w-[58%] sm:w[90%] ml-auto">
            <p className=" pb-[2rem] pr-[1rem]">
              Con más de 13 años de experiencia, presencia en 12 países y 454
              somos una de las principales plataformas de procesamientos de
              pagos a nivel mundial.
            </p>
          </div>
          <div className="w-[51px] h-[16rem]" style={{backgroundColor:"#776C6C" ,clipPath: 'polygon(25% 0%, 100% 3%, 100% 99%, 25% 100%);'}}>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Index;
