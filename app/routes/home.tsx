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
import { BackgroundBeamsWithCollision } from "components/ui/background-beams-with-collision";
import { motion } from "motion/react";

const daddyPics: string[] = [
  "https://res.cloudinary.com/dv9aqxptd/image/upload/v1722537867/homchapel/DADDYEXCLUSIVE3_i3gk7d.jpg",
  "https://res.cloudinary.com/dv9aqxptd/image/upload/v1745458646/homchapel/IMG-20250415-WA0014_fv68ns.webp",
  "https://res.cloudinary.com/dv9aqxptd/image/upload/v1733017721/homchapel/DSC_5010_lh1wfh.webp",
  "https://res.cloudinary.com/dv9aqxptd/image/upload/v1745458645/homchapel/IMG-20250415-WA0018_ovy4ky.webp",
];

export default function Home() {
  return (
    <main className="homepage relative overflow-x-hidden pt-20">
      <HeroCard />

      <BackgroundBeamsWithCollision className="welcome gap-8 bg-gradient-to-br from-[var(--dark-blue)] via-[#001a36] to-[#000d1a] min-h-[80vh] flex flex-col items-center justify-center text-center p-8 relative">
        <h2 className="font-extrabold uppercase md:text-[3rem] md:leading-tight max-w-[800px] text-[2rem] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[var(--theme-yellow)] to-white">
          Welcome to Mystery Embassy International
        </h2>
        <p className="font-light text-lg text-gray-200 max-w-[900px] leading-relaxed">
          We are a warm and welcoming community of believers committed to growing in faith, serving others, and sharing the love of Christ. Whether you're exploring faith for the first time or looking for a church to call home, we invite you to join us and experience the love and fellowship of our congregation.
        </p>
        <Link
          to={"/new-here"}
          className="group relative overflow-hidden uppercase bg-[var(--second-color)] text-white px-6 py-3 border border-[var(--second-color)] hover:bg-white hover:text-[var(--second-color)] transition-all duration-300 font-semibold text-[1rem] md:text-[1.2rem] flex items-center justify-center mt-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
        >
          <span className="relative z-10">New Here?</span>
          <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </Link>
      </BackgroundBeamsWithCollision>
      <WeAre />
      <UpcomingEvts />

      <section className="leader px-8 py-24 flex flex-col gap-12 bg-gradient-to-br from-[var(--dark-blue)] via-[#001a36] to-[#000d1a] relative overflow-hidden">
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
              {daddyPics.map((pic, index) => (
                <SwiperSlide key={pic}>
                  <img
                    src={pic}
                    alt={`Apostle Dr. Cloudio - Image ${index + 1}`}
                    className="daddypic object-center object-cover rounded-md aspect-[8/9] transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div>
              <motion.p
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", duration: 1, stiffness: 40 },
                  opacity: { duration: 2 },
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="text-white font-[200]"
              >
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
              </motion.p>
            </div>
          </div>
        </div>
      </section>
      <Departments />
      <Sermons />
      <Testimonials />
      <BibleVerse />
      <section className="planvisit min-h-[70vh] flex flex-col items-center justify-center gap-8 text-center p-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[var(--dark-blue)] to-[var(--second-color)]">
          Plan Your Visit
        </h2>
        <p className="text-lg md:max-w-[700px] text-gray-700 leading-relaxed">
          We are excited to welcome you to our church! Whether you are new to the area or looking for a place to call home, we invite you to join us for worship and fellowship. Our doors are open, and we can't wait to meet you!
        </p>
        <Link
          to={"/contact"}
          className="group relative overflow-hidden uppercase bg-[var(--second-color)] text-white px-6 py-3 border border-[var(--second-color)] hover:bg-transparent hover:text-[var(--second-color)] transition-all duration-300 font-semibold text-[1rem] md:text-[1.2rem] flex items-center justify-center mt-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
        >
          <span className="relative z-10">Plan Visit</span>
          <div className="absolute inset-0 bg-transparent border-2 border-[var(--second-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </Link>
      </section>
      {/* <Widget /> */}
      {/* <Picsgrid /> */}
    </main>
  );
}
