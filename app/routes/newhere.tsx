import { TfiLocationPin } from "react-icons/tfi";
import { LuClock7 } from "react-icons/lu";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { GiCheckMark } from "react-icons/gi";

import { Navigation, Autoplay } from "swiper/modules";
import PageHead from "~/components/common/pagehead";
import SecHeading from "~/components/common/secheading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const expectations = [
  {
    title: "Warm Welcome",
    detail:
      " From the moment you step through our doors, you'll be greeted with genuine smiles and open hearts. Our members are eager to introduce themselves and help you feel at home.",
  },
  {
    title: "Engaging Worship Services",
    detail:
      "Our worship services are designed to uplift and inspire. Expect heartfelt music, powerful messages, and an atmosphere filled with joy and reverence.",
  },
  {
    title: "Support and Growth",
    detail:
      "Our church is dedicated to supporting your spiritual journey. We offer resources like Bible studies, prayer groups, and mentorship programs to help you deepen your faith and navigate life's challenges.",
  },
];

const services = [
  {
    name: "Restoration Hour Service",
    day: "Sunday",
    time: "07:00AM - 10:45AM",
    desc: "Restoration Hour Service",
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1737076672/homchapel/new-restoration_twiisc.webp",
    location: "Mystery Temple",
    locationLink:
      "https://www.google.com/maps/place/House+of+Mystery+Chapel+International/@5.5535899,-0.3183499,16z/data=!4m6!3m5!1s0xfdfbdf3d2cd56d5:0x288d247b8da7f24b!8m2!3d5.5538031!4d-0.3182464!16s%2Fg%2F11vj4r9b3b?entry=ttu",
  },
  {
    name: "Convenant with the prophet",
    day: "1st Thursday of the month",
    time: "06:00PM - 08:00PM",
    desc: "Restoration Hour Service",
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1727873453/homchapel/covenant_with_the_prophet_escnva.webp",
    location: "Mystery Temple",
    locationLink:
      "https://www.google.com/maps/place/House+of+Mystery+Chapel+International/@5.5535899,-0.3183499,16z/data=!4m6!3m5!1s0xfdfbdf3d2cd56d5:0x288d247b8da7f24b!8m2!3d5.5538031!4d-0.3182464!16s%2Fg%2F11vj4r9b3b?entry=ttu",
  },

  {
    name: "You can Win",
    day: "Friday",
    time: "06:00PM - 08:00PM",
    desc: "Restoration Hour Service",
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1728646406/homchapel/youcanwin_njiive.webp",
    location: "Mystery Temple",
    locationLink:
      "https://www.google.com/maps/place/House+of+Mystery+Chapel+International/@5.5535899,-0.3183499,16z/data=!4m6!3m5!1s0xfdfbdf3d2cd56d5:0x288d247b8da7f24b!8m2!3d5.5538031!4d-0.3182464!16s%2Fg%2F11vj4r9b3b?entry=ttu",
  },
  {
    name: "Prayer & Prophecy",
    day: "Friday",
    time: "06:00PM - 08:00PM",
    desc: "Restoration Hour Service",
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1728646406/homchapel/prayerprophecy_yo96ni.webp",
    location: "Mystery Temple",
    locationLink:
      "https://www.google.com/maps/place/House+of+Mystery+Chapel+International/@5.5535899,-0.3183499,16z/data=!4m6!3m5!1s0xfdfbdf3d2cd56d5:0x288d247b8da7f24b!8m2!3d5.5538031!4d-0.3182464!16s%2Fg%2F11vj4r9b3b?entry=ttu",
  },
];

const faqValues = [
  {
    question: "who are we?",
    answer:
      "We are welcoming and faith-filled community dedicated to worship, service, and spiritual growth. Our mission is to share God's love, strengthen our faith, and serve our local community with compassion.",
  },
  {
    question: "where is the church located?",
    answer: "We are located at 123 Mystery St, Accra, Ghana.",
    locationLink: "https://goo.gl/maps/123MysteryStAccra",
  },
  {
    question: "what do we believe?",
    answer:
      "We believe in the Gospel of Jesus Christ and the power of God's love to transform lives. Our church upholds the authority of the Bible, the importance of prayer, and the calling to live out our faith through worship, fellowship, and service.",
  },
  {
    question: "what can i expect when i visit?",
    answer:
      "You’ll find a warm and friendly atmosphere, uplifting worship, and a message that speaks to your everyday life. Whether you’re new to church or have been attending for years, you are welcome here just as you are.",
  },
  {
    question: "how can i connect with the church?",
    answer:
      "We would love to connect with you! You can visit us in person, call us, or email us. You can also follow us on social media and sign up for our newsletter to stay updated on events and services.",
    phone: "+233(0) 244-496-968",
    phoneLink: "tel:+233244496968",
    email: "info@mysteryembassy.com",
    emailLink: "mailto:info@mysteryembassy.com",
  },
];

const Newhere = () => {
  return (
    <section className="new_here pt-20">
      <PageHead
        bgPic="bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp')]"
        prevPage="Home"
        currPage="New Here"
        prevLink="/"
      />

      <section className="main_activities p-8 py-16 flex flex-col items-center bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--dark-blue)] to-[var(--second-color)] mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join us for these regular worship services and special events throughout the week.
          </p>
        </div>
        <Swiper
          // slidesPerView={3}
          spaceBetween={10}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            740: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper "
        >
          <div className="all_activities">
            {services.map((singleService) => (
              <SwiperSlide key={singleService.name}>
                <div className="activity modern-card group hover:scale-105 transition-all duration-300">
                  <div className="overflow-hidden h-64 rounded-t-2xl">
                    <img
                      src={singleService.img}
                      alt={`${singleService.name} service`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{singleService.name}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p className="flex items-center gap-2">
                        <LuClock7 className="text-[var(--second-color)]" />
                        {singleService.day} @ {singleService.time}
                      </p>
                      <p className="flex items-center gap-2">
                        <TfiLocationPin className="text-[var(--second-color)]" />
                        {singleService.location}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>

      <section className="newhere_loc py-24 px-4 flex flex-col gap-8 md:flex-row md:justify-center md:items-center md:gap-12 max-w-7xl mx-auto">
        <div className="loc_text md:w-3/6 md:max-w-[500px] flex flex-col gap-4 md:gap-6">
          <SecHeading
            substyle={
              " text-[.8rem] md:text-[1rem]  text-white bg-[var(--second-color)] "
            }
            subhead={"Our Location"}
            mainhead={"plan a visit"}
            mainstyle={
              "font-[500] leading-6 text-[1.5rem] md:text-[2rem] md:leading-8 "
            }
            divstyle={"items-start gap-4"}
          />
          <p className="text-sm  md:leading-6 font-[200]">
            No matter what stage, age, or season you find yourself in,{" "}
            <b>Mystery Embassy</b> is for you! We invite you to come just as you
            are and be part of this community of people who are striving
            together to discover God&apos;s purpose and plan for their lives!
          </p>
          <div className="address_service grid grid-cols-1 md:grid-cols-2 mt-4 gap-3">
            <div className="address flex flex-col items-start gap-1">
              <p className="flex items-center justify-center   font-bold gap-1">
                <TfiLocationPin className="text-[var(--second-color)] text-[1.2rem]" />
                Address:
              </p>
              <p className="capitalize text-sm leading-6 font-light  ">
                Weija Tatop, Accra <br /> On top of Zulu garden
              </p>
            </div>
            <div className="service flex flex-col items-start gap-1">
              <p className="flex items-center justify-center  dark:text-white font-bold gap-1">
                <LuClock7 className="text-[var(--second-color)] text-[1.1rem]" />
                Service Times:
              </p>
              <p className="capitalize text-sm leading-6 font-light  dark:text-[var(--dark-white)]">
                sundays 07:00AM - 10:45AM <br /> fridays 06:00PM - 08:45PM
              </p>
            </div>
          </div>
        </div>
        <div className="loc_map min-h-[40vh] max-h-[50vh] lg:min-h-[60vh] md:w-3/6 rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15884.355996832388!2d-0.33670032534401534!3d5.553824171056825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbdf3d2cd56d5%3A0x288d247b8da7f24b!2sHouse%20of%20Mystery%20Chapel%20International!5e0!3m2!1sen!2sus!4v1723768237244!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            className="w-full h-full min-h-[40vh] max-h-[50vh] lg:min-h-[60vh] border-0"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <div className="expect p-8 py-24 flex flex-col gap-8 md:flex-row md:items-center md:justify-center md:gap-12 w-full bg-gradient-to-br from-[var(--dark-blue)] via-[#001a36] to-[#000d1a] text-white relative overflow-hidden">
        <div className="w-full md:w-3/6 lg:w-[40%] rounded-2xl overflow-hidden shadow-2xl group">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp"
            alt="what to expect"
            className="w-full md:aspect-[9/8] object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        <div className="expect_text flex flex-col items-start gap-6 md:w-3/6 md:pr-12 relative z-10">
          <SecHeading
            substyle={
              " text-[.8rem] md:text-[1rem]  text-white bg-[var(--second-color)] "
            }
            subhead={"Worship Experience"}
            mainhead={"what to expect"}
            mainstyle={
              "font-[500] leading-6 text-[1.5rem] md:text-[2rem] md:leading-8 "
            }
            divstyle={"items-start gap-4"}
          />
          <ul className="expect_list flex flex-col gap-6">
            {expectations.map((singleExpectation) => (
              <motion.li
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", duration: 1, stiffness: 40 },
                  opacity: { duration: 2 },
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="expectation text-sm font-[200]"
                key={singleExpectation.detail}
              >
                <p className="flex items-center gap-1 text-[1rem] font-[500] dark:text-white mb-1">
                  <span>
                    <GiCheckMark className="text-[var(--second-color)] text-[1.4rem]" />
                  </span>{" "}
                  {singleExpectation.title}:{" "}
                </p>

                {singleExpectation.detail}
              </motion.li>
            ))}
          </ul>
          <p className=" font-[400] dark:text-white capitalize">
            We can&apos;t wait to meet you and share in this journey of faith
            together! Come as you are; you&apos;re always welcome here.
          </p>
        </div>
      </div>
      <section className="faq_welcome px-4 py-24 flex flex-col-reverse gap-8 items-center md:flex-row-reverse md:justify-center md:gap-12 max-w-7xl mx-auto">
        <div className="welcome_vidBox w-full md:w-3/6 lg:w-[43%] rounded-2xl overflow-hidden shadow-2xl group">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1722542287/homchapel/IMG_4195_kmdmjb.jpg"
            alt="Church community gathering"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        <div className="accordions max-w-[700px] w-full md:w-[50%] ">
          <SecHeading
            substyle={
              " text-[.8rem] md:text-[1rem]  text-white bg-[var(--second-color)] "
            }
            subhead={"FAQ"}
            mainhead={"get to know more"}
            mainstyle={
              "font-[500] leading-6 text-[1.5rem] md:text-[2rem] md:leading-8 "
            }
            divstyle={"items-start gap-4"}
          />
          <Accordion type="single" collapsible className="w-full">
            {faqValues.map((faq, index) => (
              <AccordionItem value={index.toString()} key={index}>
                <AccordionTrigger className=" cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </section>
  );
};

export default Newhere;
