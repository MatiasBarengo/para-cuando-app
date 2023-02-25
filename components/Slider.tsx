import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import EventCard from './atom/EventCard';

const Slider = () => {
  const slides = [];

  for (let i = 0; i < 8; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} className="top-[10px] left-[2.4vw]">
        <EventCard />
      </SwiperSlide>
    );
  }

  return (
    <div>
      <Swiper
        className="w-[70vw] h-[500px]"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={3}
        navigation
        pagination
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default Slider;
