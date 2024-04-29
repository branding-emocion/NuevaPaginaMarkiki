"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { ModalImageSee } from "./ModalImage";
import Link from "next/link";

export default function Home() {
  const [ModalImage, setModalImage] = useState({
    id: null,
    img: "",
    nombre: "",
  });
  const Empresas = [
    {
      id: 1,
      image: "/LogoMarkiki.png",
      Nombre: "Grupo Markiki",
    },
    {
      id: 2,
      image: "/BannerElectrica.jpg",
      Nombre: "Soluciones Eléctricas",
    },
    {
      id: 3,
      image: "/BannerMM.jpg",
      Nombre: "Contrucciones",
    },
    {
      id: 4,
      image: "/BannerSound.jpg",
      Nombre: "Sonido",
    },
  ];
  return (
    <div className="container px-16 mx-auto text-white">
      {ModalImage?.Visible && (
        <ModalImageSee setModalImage={setModalImage} ModalImage={ModalImage} />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 ">
        {Empresas.map((empresa) => (
          <figure
            onClick={(e) => {
              setModalImage({
                Visible: true,
                Nombre: empresa.Nombre,
                src: empresa.image,
              });
            }}
            key={empresa.id}
            className=" w-full h-[200px] lg:h-[400px] relative"
          >
            <Image
              src={empresa.image}
              fill
              alt={empresa.id}
              style={{
                objectFit: "contain",
              }}
            />
          </figure>
        ))}
      </div>

      <div className="space-y-8 max-w-4xl py-10 ">
        <h1 className="text-4xl lg:text-6xl">Somos un grupo.</h1>
        <h2 className="text-4xl lg:text-6xl font-semibold">
          Comprometidos con tu desarrollo.
        </h2>
        <p className="text-justify pb-5">
          Markiki es un conglomerado empresarial diversificado, líder en ofrecer
          soluciones innovadoras en tres áreas clave: construcción,
          entretenimiento y tecnología. Con una visión integral y orientada al
          futuro, cada una de las empresas dentro del grupo desempeña un papel
          crucial en satisfacer las necesidades cambiantes del mercado.
        </p>

        <Link href={"/Contacto"} title="Contacto">
          <Button className="bg-[#432e70] hover:bg-white hover:text-black hover:scale-105">
            Contácto
          </Button>
        </Link>
      </div>
    </div>
  );
}
