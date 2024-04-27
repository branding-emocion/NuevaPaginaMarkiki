const Nosotros = () => {
  return (
    <section className="relative  ">
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              'url("https://img.freepik.com/foto-gratis/sirva-tecnico-electrico-que-trabaja-centralita-fusibles_169016-24062.jpg?w=740&t=st=1702495550~exp=1702496150~hmac=60f5570cca176b15413e0856f86bd53ffc87eee5c50f04a5cc21f8a9f911f5d3")',
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-70 bg-black"
          />
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto ">
              <div className="rounded-xl bg-transparent px-1 py-8 shadow-lg backdrop-blur-sm    mx-auto">
                <h1 className="text-white font-semibold text-5xl">
                  Quiénes Somos
                </h1>
                <p className="mt-4 text-lg text-blue-100 text-justify px-4">
                  Somos un grupo empresarial de profesional de amplia
                  experiencia en diferentes áreas de negocios, basado en nuestra
                  filosofía, en la calidad, aportes de nuevas tecnologías y en
                  la constante capacitación denuestas tecnologías y en
                  capacitación de técnicos e ingenieros, con los cual queda
                  garantizada y respaldad la satisfacción de nuestros clientes.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x={0}
            y={0}
          >
            <polygon
              className="text-blue-200 fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
      </div>
      <section className="pb-10  -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full  md:w-4/12 px-4 text-center">
              <div className="relative md:min-h-[270px] flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#377fa8]">
                    <i className="fas fa-award" />
                  </div>
                  <h6 className="text-xl font-semibold">Misión</h6>
                  <p className="mt-2 mb-4 text-gray-600 text-justify">
                    Ofrecer nuestros servicios con calidad, profesionalismo y
                    competitividad, garantizando que estos sean del agrado y
                    satisfacción de nuestros clientes{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gradient-to-r from-[#377fa8] to-[#499068]">
                    <i className="fas fa-retweet" />
                  </div>
                  <h6 className="text-xl font-semibold">Visión</h6>
                  <p className="mt-2 mb-4 text-gray-600 text-justify">
                    Posicionarnos en el año 2025 como una de las empresas
                    líderes a nivel nacional dentro de los rubros que ofrecemos.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#499068]">
                    <i className="fas fa-fingerprint" />
                  </div>
                  <h6 className="text-xl font-semibold"> Nuestros Valores</h6>
                  <ul className="list-disc list-inside mt-2 text-left px-2 mx-auto text-gray-600 ">
                    <li> Compromiso </li>
                    <li>Ética</li>
                    <li>Espíritu de equipo</li>
                    <li>Respeto</li>
                    <li>Seguridad y salud</li>
                    <li>Responsabilidad social y medio ambiente</li>
                    <li>Innovación</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Nosotros;
