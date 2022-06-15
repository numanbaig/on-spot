import React from "react";


interface IProps{
  heading?:string,
  subheading?:string,
  description?:string,
}

const Button = ({heading,subheading,description}:IProps) => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#8BD10B",
        borderTopRightRadius: 100,
        borderBottomRightRadius: 20,
        height: "100%",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        textAlign: "right",
        backgroundSize: "60%",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
      }}
      className="button bg-[url(/images/CardBackground.png)] h-[15vh]"
    >
      <div className="flex flex-col content-center text-left pt-6 pr-[3rem]">
        <h1
          style={{
            textShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
            color: "white",
            fontSize: 30,
            textAlign: "right",
          }}
        >
          {heading}
        </h1>
        <p
          style={{
            textShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
            color: "white",
            fontSize: 30,
            textAlign: "right",
          }}
        >
          {subheading}
        </p>
        <h1
          style={{
            color: "#598000",
            fontSize: 30,
            textAlign: "right",
            marginLeft: 100,

          }}
        >
         {description?description:''}
        </h1>
      </div>
    </div>
  );
};
export default Button;
