import React from 'react'

const Button = () => {
  return (
    <div
      style={{
        width: '80%',
        height: 160,
        backgroundColor: "#8BD10B",
        borderTopRightRadius: 100,
        borderBottomRightRadius: 20,
        boxShadow:'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
        textAlign:'right',
        backgroundRepeatX:"no-repeat",
        backgroundSize:'100% auto',
      }}
      className="button bg-[url(/images/btn-bg.png)] "
    >
     <div className='ml-[16rem]'> <h1
        style={{
          textShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
          color: "white",
          fontSize: 30,
          textAlign: "center",
          paddingTop: 30,
          marginLeft: 20,
        }}
      >
        ¿QUIÉNES
      </h1>
      <p
        style={{
          color: "white",
          fontSize: 16,
          textAlign: "center",
          marginLeft: 100,
          // paddingTop: 10,
        }}
      >
        SOMOS?
      </p>
      </div>
    </div>
  );
};
export default Button;
