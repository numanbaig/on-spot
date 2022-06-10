import React from "react";
import Cards from "../Cards/Cards";
import SoundIcon from "../../public/images/SoundIcon.png";
import Location from "../../public/images/LocationIcon.png";
import VentaIcon from "../../public/images/VentaIcon.png";
const data = [
  {
    heading: "SOPORTE",
    name: " EN ESPAÑOL",
    icon: SoundIcon,
    paragraph:
      "Aumenta la capacidad de respuesta y mejora tiempos en la atención con la incorporación de 3 agentes de soporte en español a través de Chat, con horarios de atención seleccionados estratégicamente y supervisión para asegurar una correcta atención al cliente.",
  },
  {
    heading: "OFICINAS",
    name: " EN LAS PRINCIPALES",
    heading4: "DEL PAIS",
    heading2: "CIUDADES",
    icon: Location,
    paragraph:
      "Mejora la experiencia del cliente con la posibilidad de atención presencial en cómodas y lujosas oﬁcinas y salas de juntas en instalaciones de más de 45 mil pies cuadrados, en las principales ciudades de Colombia. Acceso a internet de ﬁbra óptica, línea telefónica ﬁja nacional y la posibilidad de realizar eventos y presentaciones en auditorios para 250 personas en Cali, Bogotá, Medellín, Pereira y Bucaramanga.",
  },
  {
    heading: "AGENTES ",
    heading3: "DE VENTA",
    name: " REPRESENTANTES COMERCIALES",
    icon: VentaIcon,
    paragraph:
      "Obtén representación de profesionales con experiencia en ventas y servicio pos venta, con residencia en las principales ciudades del país con transporte propio y disponibilidad para viajar. Serian 5 agentes comerciales en total.",
  },
];

const Service = () => {
  return (
    <div className="bg-[url('/images/Section5.png')] w-full h-[100vh]  flex items-center justify-around flex-col  relative  ">
      <h1 className=" absolute top-[125px] left-[205px] text-6xl font-black leading-7   ">
        Serviceios
      </h1>
      <div className="flex justify-around w-[100%] absolute top-[30%] ">
        {data.map((items: any) => {
          console.log(SoundIcon, "icons");
          return (
            <div className=" ">
              <Cards
                heading={items.heading}
                heading3={items.heading3}
                heading2={items.heading2}
                heading4={items.heading4}
                name={items.name}
                paragraph={items.paragraph}
                icon={items.icon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
