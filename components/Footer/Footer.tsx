import React from "react";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
import bgImage from "../../assets/images/bg-one.jpg";

export default function footer() {
  return (
    
    <footer className= " flex flex-col justify-center items-center bottom-2  w-full  bg-[url(/images/footerimg.png)] bg-cover bg-no-repeat bg-center relative z-2">
      <div className=" w-screen flex flex-col justify-center
      gap-20 items-center">

<div className="flex justify-evenly items-center relative w-full h-full">
        <div className="flex flex-col w-80  font-bold">
          <h3 className="text-2xl text-white">DE LASPRINCIPALES</h3>
          <h2 className="text-4xl text-white ">PLATAFORMAS</h2>
          <h1 className="text-6xl text-white ">A TU CUENTA BANCARIA</h1>
        </div>

        <div className=" w-1 bg-[#8BD10D] h-80 ">
        </div>

        <div className="flex flex-col gap-5 justify-center">
          <div className="flex flex-col gap-3 text-white font-thin">
            <li className="list-none gap-9 tracking-widest">NOSOTROS</li>
            <li className="list-none gap-9 tracking-widest">SERVICIOS</li>
            <li className="list-none gap-9 tracking-widest">EN LALEXPO</li>
            <li className="list-none gap-9 tracking-widest ">CONTACTENOS</li>
          </div>

          <div className=" flex gap-3 ">
            {/* <FacebookIcon className="text-3xl text-[#8BD10D]" />
            <InstagramIcon className="text-3xl text-[#8BD10D]" />
            <TwitterIcon className="text-3xl text-[#8BD10D]" /> */}
          </div>
        </div>
        </div>
        <div className=" flex justify-center items-center text-white tracking-widest w-full h-20 bg-[#8BD10D]">
        <p>WWW.ONSPOTINT.COM</p>
      </div>
      </div>
    
    </footer>
  );
}

// <footer className="w-full h-96  justify-center align-center bg-[url(/images/bg-one.jpg)] bg-center bg-cover bg-no-repeat flex items-center"
// >
//   <div className="w-full h-screen border-2 content-box pt-4 flex justify-between bg-[0, 0, 0, .3]">
//   <div className="flex justify-evenly w-4/5 h-full"  >
//         <div className="w-96 flex flex-col  font-bold">
//         <h3  className ="text-2xl text-white">DE LASPRINCIPALES</h3>
//         <h2 className="text-4xl text-white">PLATAFORMAS</h2>
//         <h1 className="text-7xl text-white">A TU CUENTA BANCARIA</h1>
//     </div>
//     <div className="bg-lime-500 w-1 h-60 flex justify-center" >
//         <span></span>
//     </div>
//
//     </div>
//   </div>

// </footer>
