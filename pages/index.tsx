import Hero from '@/components/home/Hero';
import Slider from '@/components/home/Slider';
import Layout from '@/components/layouts/Layout';
import MakeItPersonal from '@/components/MakeItPersonal';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
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
            Publicaciones que podrías colaborar
          </h4>
          <Slider />
        </section>
        <MakeItPersonal />
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
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
