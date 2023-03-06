import Image from 'next/image';
import Link from 'next/link';
import addLogo from '../public/svg/add.svg';
import logo from '../public/svg/icon-logo.svg';

export default function Navbar() {
  return (
    <div className="w-full h-[71px] text-center bg-black flex items-center justify-between px-5 sm:px-[52px]">
      <Link href="/" className="sm:flex-1">
        <Image src={logo} alt="para cuando logo" />
      </Link>
      <div className="flex items-center gap-2 sm:mr-9">
        <Image src={addLogo} alt="add logo" />
        <Link
          href="/post/create"
          className="hidden text-2 sm:subtitle-2  text-white xs:block"
        >
          {' '}
          Crear Publicación
        </Link>
      </div>
      <div className="flex gap-5 text-xs text-white sm:subtitle-2">
        <Link href="/auth/login">Log in</Link>
        <Link href="/authorized/register">Sign Up</Link>
      </div>
    </div>
  );
}
