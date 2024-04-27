const Nosotros = () => {
  return (
    <div>
      <section className="relative  ">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: 'url("/MMpage.jpg")',
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-20 bg-black"
            />
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="rounded-xl bg-transparent px-2 py-8 shadow-lg backdrop-blur-sm    mx-auto ">
                  <h1 className="text-white font-semibold text-5xl">
                    Nosotros
                  </h1>
                  <p className="mt-4 text-lg text-gray-50 text-justify">
                    Somos una empresa que inicio su actividad en el año 2016,
                    dedicándonos a la ejecución de proyectos de ingeniería civil
                    desde su concepción, hasta la terminación, tomando el
                    liderazgo en innovación en seguridad y procesos
                    constructivos, en cada uno de nuestros trabajos. Hoy en día
                    nuestra experiencia se centra en proyectos de
                    infraestructura de la vivienda, comercial, e industrial;
                    habiendo superado las expectativas en calidad y plazo de
                    ejecución.{" "}
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
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#203c93]">
                      <i className="fas fa-award" />
                    </div>
                    <h6 className="text-xl font-semibold">Misión</h6>
                    <p className="mt-2 mb-4 text-gray-500 text-justify">
                      Nuestra misión es brindar servicios de ingeniería,
                      construcción, mantenimiento, remodelaciones y
                      ampliaciones: haciendo uso de la mejora continua y dentro
                      de los estándares de calidad propuestos por nuestros
                      clientes.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#59bde2]">
                      <i className="fas fa-retweet" />
                    </div>
                    <h6 className="text-xl font-semibold">Visión</h6>
                    <p className="mt-2 mb-4 text-gray-500 text-justify">
                      Situarnos para el año 2025 dentro de las diez empresas
                      líderes en el Perú en nuestro sector.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[#203c93]">
                      <i className="fas fa-fingerprint" />
                    </div>
                    <h6 className="text-xl font-semibold"> Valores</h6>
                    <ul className="list-disc list-inside mt-2 text-left px-3 mx-auto text-gray-500 ">
                      <li>Calidad</li>
                      <li>Honestidad</li>
                      <li>Puntualidad</li>
                      <li>Pasión</li>
                      <li>Competitividad</li>
                      <li>Trabajo en equipo</li>
                      <li>Responsabilidad social y medio ambiente</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Nosotros;
