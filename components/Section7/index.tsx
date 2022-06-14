import React from "react";
import Cards from "../Cards/Cards";
import SoundIcon from "../../public/images/SoundIcon.png";
import HammerIcon from "../../public/images/HammerIcon.png";
import HandIcon from "../../public/images/HandIcon.png";
import HandDollerIcon from "../../public/images/HandDollerIcon.png";
const data = [
  {
    heading: "OPCIÓN DE",
    heading2: "MÉTODO DE PAGO ",
    name: "CONVERTIRSE EN",
    name2: "OFICIAL PARA",
    cardIcons: true,
    icon: HandDollerIcon,
    paragraph:
      "Posibilidad de ﬁgurar como método depago para Colombia en dos de lasprincipales plataformas de la industria webcam: Camsoda y BongaCams.",
  },
  {
    heading: "CONSULTORIO",
    name: " TRIBUTARIO Y JURÍDICO",
    icon: HammerIcon,
    paragraph:
      "Accede a tres excelentes ﬁrmas de abogados de Colombia, con disponibilidad para consulta de aspectos legales y asesoría, con posibilidad de extensión del servicio a clientes de Directa 24 Co. O campañas de activación de marca para directa24 en temas legales.",
  },
  {
    heading: "EXTENSIÓN DE ",
    name: " CONVENIOS Y BENEFICIOS",
    icon: HandIcon,
    paragraph:
      "Extensión a clientes de Directa 24 Co de cuales The Webcam Lab tiene acceso en Colombia, entre los que se encuentran gimnasios, centros de estética, salones de belleza, tiendas oftalmológicas, discotecas y más.",
  },
];

const Service = () => {
  return (
    <div className="bg-[url('/images/Section7Bg.png')] w-full h-[90vh]  flex items-center justify-around flex-col  relative  ">
      <h1 className=" absolute top-[125px] left-[205px] text-6xl font-black leading-7   ">
        {/* Serviceios */}
      </h1>
      <div className="flex justify-around w-[100%] absolute top-[30%] ">
        {data.map((items: any, index) => {
          console.log(SoundIcon, "icons");
          return (
            <div className=" ">
              <Cards
                textColor="light"
                heading={items.heading}
                heading3={items.heading3}
                heading2={items.heading2}
                heading4={items.heading4}
                name={items.name}
                paragraph={items.paragraph}
                icon={items.icon}
                cardIcons={items.cardIcons}
                name2={items.name2}
                index={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
