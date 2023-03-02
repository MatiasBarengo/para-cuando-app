import Image from 'next/image';
import Link from 'next/link';
import imgRegister from '../../public/png/bgregister.png';
import closeBtn from '../../public/svg/cil_x-circle.svg';
import logo from '../../public/svg/logo.svg';

const styles = {
  backgroundImage: `url('${imgRegister.src}')`,
};

export default function register() {
  return (
    <div
      style={styles}
      className="min-h-screen flex bg-center bg-no-repeat px-[18px] flex-col items-center pt-12 gap-8 md:flex-row md:justify-between md:px-20 lg:px-40   relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
      <Image src={logo} alt="logo para cuando" className="z-10 md:w-72" />

      <div className="w-full bg-app-black/80 rounded-[20px] border border-app-gray px-[38px] md:px-[58px] relative max-w-[557px]">
        <Link href="/">
          <Image
            src={closeBtn}
            alt="eye"
            className="absolute top-[18px] right-[18px]"
          />
        </Link>
        <h1 className="mt-[72px] text-3xl font-semibold text-app-white  leading-5">
          Todos Votamos
        </h1>
        <h1 className="mt-[72px] text-3xl font-semibold text-app-white  leading-5">
          Regístrate para ingresar
        </h1>
        <h1 className="mt-[72px] text-3xl font-semibold text-app-white  leading-5">
          Aqui va lo demas
        </h1>
      </div>
    </div>
  );
}
