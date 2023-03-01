import Slider from './Slider';

export default function Main() {
  return (
    <main className="mt-[67px] w-[full] h-full flex flex-col justify-center items-center">
      <section className="mt-5">
        <h2 className="text-[24px] font-medium text-light-black text-left">
          Populares en Queretaro
        </h2>
        <h4 className="text-dark-gray mb-[35px]">
          Lo que las personas piden mas
        </h4>
        <Slider />
      </section>
      <section className="mt-5">
        <h2 className="text-[24px] font-medium text-light-black text-left">
          Sugerencias para ti
        </h2>
        <h4 className="text-dark-gray mb-[35px]">
          Publicaciones que podrias colaborar
        </h4>
        <Slider />
      </section>
      <section className="w-full h-[250px] flex justify-center items-center">
        <div className="w-[70vw] h-full bg-lighter-gray">
          <h2>¡Hagámoslo más personal!</h2>
          <p>
            Selecciona tus intereses para brindarte sugerencias de acuerdo a tus
            gustos
          </p>
        </div>
      </section>
      <section className="mt-5 mb-[114px]">
        <h2 className="text-[24px] font-medium text-light-black text-left">
          Recientes
        </h2>
        <h4 className="text-dark-gray mb-[35px]">
          Las personas últimamente están hablando de esto
        </h4>
        <Slider />
      </section>
    </main>
  );
}
