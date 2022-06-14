import React from 'react'

const Button = ({title,subtitle}) => {
  return (
    <div
      style={{
        backgroundColor: "#8BD10B",
        borderTopRightRadius: 100,
        borderBottomRightRadius: 20,
        boxShadow:'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
        textAlign:'right',
        backgroundRepeatX:"no-repeat",
        backgroundSize:'100% auto',
      }}
      className="button bg-[url(/images/CardBackground.png)] relative h-[15vh] w-[80%]"
    >
     <div className=' absolute bottom-[52px] right-[30px]'> <h1
        style={{
          textShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
          color: "white",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        {title || '¿QUIÉNES'}
      </h1>
      <p
        style={{
          color: "white",
          fontSize: 16,
          textAlign: "center",
          marginLeft: 100,
        }}
      >
        { subtitle||'SOMOS?'}
      </p>
      </div>
    </div>
  );
};
export default Button;
