import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import bgImage from "../../assets/images/bg-one.jpg";

export default function footer() {
  return (
    <div className="relative">
      <footer className=" flex flex-col justify-center items-center h-[650px]  w-[100%]  bg-[url(/images/Section7Bg.png)] bg-cover bg-no-repeat">
        <div
          className="w-[99.2vw] flex flex-col justify-center items-center overflow-hidden"
        >
          <div className="flex justify-center gap-x-[12em] items-center w-full h-full overflow-hidden">
            <div className="flex flex-col w-80  font-bold">
              <h3 className="text-2xl text-white">DE LASPRINCIPALES</h3>
              <h2 className="text-4xl text-white ">PLATAFORMAS</h2>
              <h1 className="text-6xl text-white ">A TU CUENTA BANCARIA</h1>
            </div>

            <div className=" w-1 bg-[#8BD10D] h-80 "></div>

            <div className="flex flex-col gap-5 justify-center">
              <div className="flex flex-col gap-3 text-white font-thin">
                <li className="list-none gap-[1rem] tracking-widest">
                  NOSOTROS
                </li>
                <li className="list-none gap-[1rem] tracking-widest">
                  SERVICIOS
                </li>
                <li className="list-none gap-[1rem] tracking-widest">
                  EN LALEXPO
                </li>
                <li className="list-none gap-[1rem] tracking-widest ">
                  CONTACTENOS
                </li>
              </div>

              <div className=" flex gap-3 ">
                <div className="bg-[#8BD10D] p-[0.5rem] rounded">
                  <FacebookIcon className="text-3xl text-[#ffff] " />
                </div>
                <div className="bg-[#8BD10D] p-[0.5rem] rounded">
                  <InstagramIcon className="text-3xl text-[#ffff]" />
                </div>
                <div className="bg-[#8BD10D] p-[0.5rem] rounded">
                  <TwitterIcon className="text-3xl text-[#ffff]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className=" flex justify-center items-center text-white tracking-widest w-full h-20 bg-[#8BD10D]">
        <p>WWW.ONSPOTINT.COM</p>
      </div>
    </div>
  );
}
