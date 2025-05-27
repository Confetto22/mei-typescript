// import CountDown from "~/components/common/countdown/countdown";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Footer from "~/components/common/footer";
import Picsgrid from "~/components/common/picsgrid";
import SecHeading from "~/components/common/secheading";
import HeroCard from "~/components/homepage/herocard";
import UpcomingEvts from "~/components/homepage/upcomingevts";
import WeAre from "~/components/homepage/weare";
import Departments from "~/components/homepage/departments";
import Sermons from "~/components/homepage/Sermons";
import Testimonials from "~/components/common/Testimonials";
import BibleVerse from "~/components/common/BibleVerse";
import { Link } from "react-router";

const daddyPics: string[] = [
  "https://res.cloudinary.com/dv9aqxptd/image/upload/v1722537867/homchapel/DADDYEXCLUSIVE3_i3gk7d.jpg",
  "https://res.cloudinary.com/dv9aqxptd/image/upload/v1745458646/homchapel/IMG-20250415-WA0014_fv68ns.webp",
  "https://res.cloudinary.com/dv9aqxptd/image/upload/v1733017721/homchapel/DSC_5010_lh1wfh.webp",
  "https://res.cloudinary.com/dv9aqxptd/image/upload/v1745458645/homchapel/IMG-20250415-WA0018_ovy4ky.webp",
];

export default function Home() {
  return (
    <main className="homepage relative">
      <HeroCard />
      <section className="welcome gap-7 bg-[var(--dark-blue)] min-h-[70vh] flex flex-col items-center justify-center text-center p-6">
        <h2 className="font-extrabold uppercase md:text-[2.5rem] md:leading-11 max-w-[600px] text-[1.7rem] leading-9">
          Welcome to mystery embassy international
        </h2>
        <p className="font-[400] text-[1rem] text-white max-w-[900px]">
          We are a warm and welcoming community of believers committed to
          growing in faith, serving others, and sharing the love of Christ.
          Whether you&apos;re exploring faith for the first time or looking for
          a church to call home, we invite you to join us and experience the
          love and fellowship of our congregation.
        </p>
      </section>
      <WeAre />
      <UpcomingEvts />

      <section className="leader px-8 py-24 flex flex-col gap-8 bg-[var(--dark-blue)] ">
        <SecHeading
          substyle={
            " text-[.9rem] md:text-[1.2rem] bg-white text-[var(--dark-blue)] "
          }
          subhead={"Leading with Love"}
          mainhead={"Meet Our human founder"}
          mainstyle={
            "font-extrabold leading-6 text-[1.8rem] md:text-[2.2rem] md:leading-8 text-white"
          }
          divstyle={"items-start gap-4"}
        />
        <div className="sec_text flex-col md:flex-row">
          <div className="head_pastor flex flex-col items-start gap-8 ">
            <Swiper
              navigation={true}
              modules={[Navigation, Autoplay]}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              className="mySwiper"
            >
              {daddyPics.map((pic) => (
                <SwiperSlide key={pic}>
                  <img
                    src={pic}
                    alt="Apostle Dr. Cloudio"
                    className="daddypic object-center object-cover rounded-md aspect-[8/9]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div>
              <p className="text-white font-[200]">
                Hello! my name is Apostle Dr. Cloudio Tetteh. The head pastor of
                <b> Mystery Embassy International</b>... a church you are proud
                of, a family you are part of. I want to extend a warm welcome to
                you to our church's digital home, where every pixel is infused
                with the warmth of our congregation's spirit. Here, amidst the
                digital waves, may you find solace, community, and a deep
                connection to the divine. Together, let us embark on a digital
                pilgrimage of love, hope, faith and growth. Your presence
                enriches our online family, and together, we shall illuminate
                the digital realm with the light of our shared faith. Welcome,
                dear one, to a place where pixels and prayers unite to create a
                sacred online space.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Departments />
      <Sermons />
      <Testimonials />
      <BibleVerse />
      <section className="planvisit min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center p-6">
        <h2 className="text-[1.8rem] md:text-[2.5rem] font-extrabold uppercase">
          Plan Your Visit
        </h2>
        <p className="text-[1rem] md:max-w-[600px]">
          We are excited to welcome you to our church! Whether you are new to
          the area or looking for a place to call home, we invite you to join us
          for worship and fellowship. Our doors are open, and we can&apos;t wait
          to meet you!
        </p>
        <Link
          to={"/contact"}
          className="uppercase bg-[var(--second-color)] text-white px-4 py-2 border border-[var(--second-color)] hover:bg-transparent hover:text-[var(--second-color)] transition-colors duration-300 font-semibold text-[1rem] md:text-[1.2rem] flex items-center justify-center mt-4"
        >
          plan visit
        </Link>
      </section>
      {/* <Picsgrid /> */}
    </main>
  );
}
