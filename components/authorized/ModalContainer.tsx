import Image from 'next/image';
import Link from 'next/link';
import closeBtn from '../../public/svg/cil_x-circle.svg';
import Children from '../lib/interfaces/components.interface';

export default function ModalContainer({ children }: Children) {
  return (
    <div className="w-full bg-app-black/80 rounded-[20px] border border-app-gray px-[38px] md:px-[58px] relative max-w-[555px]">
      <Link href="/">
        <Image
          src={closeBtn}
          alt="eye"
          className="absolute top-[16px] right-[16px]"
        />
      </Link>
      {children}
    </div>
  );
}
