import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";

const testimonials = [
  {
    id: 1,
    name: "Testimonial Name",
    desc: "Before stepping foot in the kingdom of House Of Mystery, I was in a serious cloud of confusion about things regarding the Bible, it literally didn't make sense to me. But through the mystical teachings of Apostle Dr.Cloudio, I can confidently say the teachings of God in the bible have been made crystal clear unto me and I'm so grateful to God and Dr.Cloudio.",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1728651187/homchapel/IMG-20241011-WA0026_htw89r.webp",
  },
  {
    id: 2,
    name: "Testimonial Name",
    desc: "Right from my first day walking through the doors of this great commision till this day, the feeling of belonging to a big happy family has never departed from me... I always feel at peace and my spirit is always calm. The reception here in this church is absolutely top-notch and very welcoming.",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1728651187/homchapel/IMG-20241011-WA0027_lrbadq.webp",
  },
  {
    id: 3,
    name: "Testimonial Name",
    desc: "I never believed in prophecies & prophets but its safe to say I 'over-believe' now... I find it mindblowing whenever I try to comprehend the mantle & anointing upon Apostle Dr.Cloudio, This man is well endowed in operating in all 5 fold ministries. Nothing can compare to the joy of knowing I have Him as a father.",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1728651187/homchapel/IMG-20241011-WA0024_pba5hg.webp",
  },
  {
    id: 4,
    name: "Testimonial Name",
    desc: "I was always taught the literal & moral side of scriptures from childhood. But right from the first day of worshiping here, my mind has been opened to deep mysteries in the kingdom of God. It almost feels as if I've been in darkness all my life and I've now been ushered into the greater light. His ability to rightly interpret and breakdown the scriptures & the words of God is fascinating!",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1728651545/homchapel/IMG-20241011-WA0020_1_tku3th.webp",
  },
  {
    id: 5,
    name: "Testimonial Name",
    desc: "I've been rejected in so many churches because they frown on tattoos, dreadlocks and men piercings. It took me quite sometime to finally decide I'll try a new church again. I happened to discover HOM chapel on facebbok and listening to Dr.Cloudio's teachings, it resonated  well with me and it indirectly spoke to me directly saying 'you are welcome here', so I decided to pay this commission a visit and it has been the best decision I've ever made my whole life.",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1723232272/homchapel/DSC_5738_art3si_h7o14k_1_gjdwd2.webp",
  },
];

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <section className="testimonials px-8 py-24 min-h-[80vh] flex flex-col gap-6">
      <h2 className="font-[400] text-[1.2rem] text-[#000] md:hidden text-center md:text-left">
        SPEAKING THE GOODNESS OF GOD TO ALL MEN
      </h2>
      <div className="flex flex-col md:gap-6 md:flex-row items-start md:items-center justify-between md:justify-center">
        <div className="all_testimonials grid 1 md:w-[50%] gap-3">
          <Swiper
            // slidesPerView={3}
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              900: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper mt-8 w-full"
          >
            {testimonials.map((singleTestimonial) => {
              return (
                <SwiperSlide key={singleTestimonial.id} className="py-8 px-3">
                  <div className="testimonialCard  px-9 shadow-lg bg-[#ffffff] flex flex-col gap-3 min-h-[150px] rounded-md w-full mx-auto relative py-12 items-center justify-center text-[#000]">
                    <p className="person-name ">person 1</p>
                    <q className="text-[.9rem]  text-center font-[300] text-[#313131b9]">
                      {singleTestimonial.desc}
                    </q>
                    <div className="testimonialPerson flex flex-row items-center gap-2 justify-center">
                      <img
                        src={singleTestimonial.pic}
                        alt="testimonial"
                        className="w-[60px] h-[60px] object-top  object-cover rounded-full absolute top-[-30px] border-2 border-[var(--main-color)]"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="flex flex-col items-start  h-full gap-6 md:gap-12 md:w-[50%]">
          <h2 className="font-[400] text-[1.2rem] text-[#000] hidden md:block">
            SPEAKING THE GOODNESS OF GOD TO ALL MEN
          </h2>
          <p className="text-[.9rem]  text-[#000] font-[200]">
            No testimony is too small to be shared. Every testimony is powerful!
            It may be the seed of hope someone needs to trust God for their
            breakthrough. As you share your testimony, many are inspired and
            stirred to believe God for something powerful!
          </p>
          <div className="testimonial-btns flex items-center gap-5 md:gap-15 uppercase text-[.9rem]">
            <Link
              to={
                "https://www.google.com/search?hl=en-GH&gl=gh&q=Mystery+Embassy+International,+Tatop,+Top+of+Zulu+Gardens,+Accra&ludocid=2922031846309491275&lsig=AB86z5WKW-gpd3RAgFxRcgE7x6YF&mat=Cc8nPj9rUjyEElcBYJahaXfysOUC2H8kpreY4HHn4VK2eJmp1Ix_jSONkmO8uKw5thOfNb193gIfeJbfomJXanWIRw9yJs0ox4wYaiXAlXGMQAgLWslIBeMm49-3Aa3nYDg#lrd=0xfdfbdf3d2cd56d5:0x288d247b8da7f24b,1"
              }
              target="_blank"
              className="bg-[var(--second-color)] px-5 py-3 rounded-[.1rem] text-white border-2 border-[var(--second-color)] hover:bg-transparent hover:text-[var(--second-color)] transition-all duration-300"
            >
              view all
            </Link>
            <Link
              to={"https://g.page/r/CUvyp417JI0oEBM/review"}
              target="_blank"
              className=" px-5 py-3 rounded-[.1rem] border-2 border-[var(--second-color)] text-[var(--second-color)] hover:bg-[var(--second-color)] hover:text-white transition-all duration-300"
            >
              share yours
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
