import Image from 'next/image';
import { useState } from 'react';
import swal from 'sweetalert';
import LikeButton from '../assets/LikeButton';

const EventCard = () => {
  const [isActive, setActive] = useState(false);

  const handleState = () => {
    setActive(!isActive);
    if (isActive === false) {
      swal({
        title: 'Se ha añadido su voto',
        icon: 'success',
        timer: 1500,
      });
    } else {
      swal({
        title: 'Se ha removido su voto',
        icon: 'info',
        timer: 1500,
      });
    }
  };

  const votes = 90800756;

  return (
    <div className="flex flex-col justify-start w-[299px] h-[454px] rounded-[20px] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
      <Image
        className="w-full h-[239px] rounded-t-[20px]"
        src="https://los40es00.epimg.net/los40/imagenes/2017/02/06/musica/1486367147_194336_1486369812_noticia_normal.jpg"
        alt=""
      />
      <LikeButton active={isActive} onClick={handleState} />
      <h2 className="pt-[15px] px-[22px] text-[20px] text-left text-light-black font-semibold">
        Concierto de Lady Gaga
      </h2>
      <div className="px-[22px] pt-[5px] h-[80px]">
        <h3 className="text-left text-dark-gray text-[15px] ">
          El concierto con la tematica de Lady Gaga en Las Vegas
        </h3>
      </div>
      <a
        href="https://ladygaga.com"
        className="text-primary font-semibold text-[14px] pl-[27px]"
        target="_blank"
        rel="noreferrer"
      >
        ladygaga.com
      </a>
      <div className="flex flex-row items-center gap-[10px] pl-[30px] pt-[15px]">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.89245 12.3778L1.8923 12.3781C1.68621 12.7136 1.5835 13.0766 1.5835 13.4834V14.25C1.5835 14.5764 1.69105 14.8376 1.92733 15.0738C2.16269 15.3092 2.42338 15.4167 2.75016 15.4167H14.2502C14.5768 15.4167 14.8379 15.3093 15.074 15.0738C15.3094 14.8378 15.4168 14.5766 15.4168 14.25V13.4834C15.4168 13.0766 15.3141 12.7136 15.108 12.3781L15.1079 12.3778C14.8992 12.0379 14.6301 11.7874 14.2932 11.6122C13.3524 11.1422 12.4008 10.7916 11.438 10.5581C10.4738 10.3249 9.49492 10.2084 8.50016 10.2084C7.5054 10.2084 6.52654 10.3249 5.56233 10.5581L1.89245 12.3778ZM1.89245 12.3778C2.10108 12.0379 2.37019 11.7874 2.7071 11.6122M1.89245 12.3778L2.7071 11.6122M2.7071 11.6122C3.64777 11.1423 4.59919 10.7917 5.5619 10.5582L2.7071 11.6122ZM8.50016 7.75004C7.64649 7.75004 6.93437 7.45483 6.3232 6.84367C5.71204 6.23251 5.41683 5.52038 5.41683 4.66671C5.41683 3.81304 5.71204 3.10091 6.3232 2.48975C6.93437 1.87858 7.64649 1.58337 8.50016 1.58337C9.35384 1.58337 10.066 1.87858 10.6771 2.48975C11.2883 3.10091 11.5835 3.81303 11.5835 4.66671C11.5835 5.52038 11.2883 6.23251 10.6771 6.84367C10.066 7.45483 9.35384 7.75004 8.50016 7.75004Z"
            stroke="#1A1E2E"
            stroke-width="1.5"
          />
        </svg>
        <p>{votes} votos</p>
      </div>
    </div>
  );
};

export default EventCard;
