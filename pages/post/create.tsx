import { MainButton } from '@/components/atom/MainButton';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Create = () => {
  const [formStep, setFormStep] = useState(0);

  const handleStep = () => {
    setFormStep(formStep + 1);
  };

  const router = useRouter();
  console.log(router);
  // const submit = (data:any) => {
  //   createEvent(data)
  //     .then(() =>{
  //       router.push('/profile')
  //     })
  //     .catch(() => {
  //       alert('tu formulario tiene un error')
  //     })
  // }

  const barStep1 = 'w-[361px] border-[.25rem] border-primary rounded-2xl';
  const barStep2 = 'w-[620px] border-[.25rem] border-primary rounded-2xl';

  return (
    <div className="flex flex-col md:flex-row">
      <header className="flex flex-col w-[100vw] h-[306px] bg-primary px-[25px] md:w-[255px] md:h-[100vh] md:justify-center items-center">
        <div className="flex flex-col">
          <Link href="/">
            <Image
              width={137}
              height={123}
              src="/png/formLogo.png"
              alt="para cuando logo1"
              className="mt-12"
            />
            <Image
              width={144}
              height={32}
              src="/png/formLogo2.png"
              alt="para cuando logo2"
              className="mb-12"
            />
          </Link>
        </div>

        <h2 className="text-yellow w-[200px] font-weight-medium">
          ¡Bienvenido, creador!
        </h2>
        <p className="text-white">
          A continuación puedes completar la info de la marca, artista o torneo
          que quieres cerca.
        </p>
        <a href="" onClick={() => {}} className="text-white">
          Ayuda
        </a>
      </header>
      <main className="w-full flex flex-col justify-center items-center ">
        <Link
          href="/"
          className="text-primary absolute top-[3.75rem] left-[19.375rem] text-xl"
        >
          Back
        </Link>
        <div className="w-[612px] rounded-2xl mb-[3.5rem] bg-lighter-gray">
          <div className={formStep === 0 ? barStep1 : barStep2}></div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <form action="">
            {formStep === 0 && (
              <>
                <div className="w-[620px]">
                  <h2 className="text-light-black text-2xl">Publicacion</h2>
                  <p className="text-dark-gray text-base mt-[.2rem] mb-[2rem]">
                    Información básica
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[1rem]">
                  <div className="w-[620px]">
                    <label
                      htmlFor=""
                      className="bg-white text-gray-border text-base relative top-[0.5rem] ml-[20px] px-[10px] w-[10.5rem]"
                    >
                      Título de publicación
                    </label>
                    <input
                      type="text"
                      className="border border-gray-border w-full h-[3rem] px-6 duration-300 text-base py-[10px] rounded-2xl focus:outline-none focus:ring-2"
                    />
                  </div>
                  <div className="flex flex-row w-full gap-[1rem] mt-[.5rem]">
                    <select
                      id="tipo"
                      name="Tipo"
                      className="w-full h-[3rem] text-gray-border bg-white border border-gray-border rounded-2xl pl-[2rem]"
                    >
                      <option defaultValue="tipo" disabled>
                        Tipo
                      </option>
                      <option value="brands">Marcas y tiendas</option>
                      <option value="artists">Artistas y conciertos</option>
                      <option value="tournaments">Torneos</option>
                    </select>
                    <select
                      id="categotia"
                      name="Categoría"
                      className="w-full h-[3rem] text-gray-border bg-white border border-gray-border rounded-2xl pl-[2rem]"
                    >
                      <option defaultValue="categoria" disabled>
                        Categoría
                      </option>
                      <option value="clothes">Ropa y accesorios</option>
                      <option value="sports">Deportes</option>
                      <option value="concerts">Conciertos</option>
                      <option value="meet-and-greet">Meet and greet</option>
                      <option value="e-sports">E-sports</option>
                      <option value="pop-rock">Pop - Rock</option>
                      <option value="tecnology">Tecnología</option>
                      <option value="home">Hogar - Decoración</option>
                      <option value="catering">Abastecimiento</option>
                    </select>
                  </div>
                  <div className="w-[620px]">
                    <label
                      htmlFor=""
                      className="bg-white text-gray-border text-base relative top-[0.5rem] ml-[20px] px-[10px] w-[10.5rem]"
                    >
                      ¿Por qué lo recomiendas?
                    </label>
                    <textarea className="border border-gray-border w-full h-[115px] px-6 duration-300 text-base py-[10px] rounded-2xl focus:outline-none focus:ring-2 resize-none" />
                  </div>
                  <div className="w-[620px]">
                    <label
                      htmlFor=""
                      className="bg-white text-gray-border text-base relative top-[0.5rem] ml-[20px] px-[10px] w-[13rem]"
                    >
                      Link de referencia
                    </label>
                    <input
                      type="text"
                      className="border border-gray-border w-full h-[3rem] px-6 duration-300 text-base py-[10px] rounded-2xl focus:outline-none focus:ring-2"
                    />
                  </div>
                  <MainButton onClick={handleStep} />
                </div>
              </>
            )}
            {formStep === 1 && <div></div>}
          </form>
        </div>
      </main>
    </div>
  );
};

export default Create;
