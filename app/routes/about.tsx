// import { Link } from "react-router";
import { Link } from "react-router";
import Success from "~/components/aboutpage/Success";
import PageHead from "~/components/common/pagehead";
import { IoMdPlayCircle } from "react-icons/io";
import { useState } from "react";
import CoreValues from "~/components/aboutpage/CoreValues";
import JoinUs from "~/components/common/JoinUs";
import Vision from "~/components/aboutpage/Vision";
import { motion } from "motion/react";

type Props = {};

const About = (props: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="about-page  font-[300] text-[.9rem]">
      <PageHead
        bgPic="bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp')]"
        prevPage="Home"
        currPage="About"
        prevLink="/"
      />
      <div className="px-6 py-24 flex flex-col md:flex-row-reverse md:justify-center md:items-center gap-8">
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", duration: 1, stiffness: 40 },
            opacity: { duration: 2 },
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="intro-text flex flex-col gap-3 md:w-[50%] md:max-w-[600px]"
        >
          <h2 className="uppercase font-[500] text-[1.3rem] md:text-[1.7rem]">
            welcome to <b>mystery embassy international</b>
          </h2>
          <p>
            Our curriculum appeals to student diversity and interest, and is
            rigorous and challenging. We understand each child comes to us with
            different talents, learning styles, and identities. And we celebrate
            that difference because our diversity is our strength.
          </p>
          <p>
            Community is everything at Corlears. It&apos;s who we are and how
            things get done. Everyone here is motivated by a deep commitment to
            making sure each child and family feels welcome and included. When
            everyone feels like they belong, we are stronger and smarter
            together. We&apos;re a community driven to make the world a better
            place—starting in our own backyard.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: -15, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", duration: 1, stiffness: 40 },
            opacity: { duration: 2 },
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="imageBox rounded-md overflow-hidden shadow-xl md:w-[45%]"
        >
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp"
            alt="mystery embassy international"
            className="w-full h-full object-cover rounded-md shadow-xl aspect-video md:aspect-auto hover:scale-110 duration-500 ease-in-out hover:shadow-2xl hover:opacity-95"
          />
        </motion.div>
      </div>
      {/* <Vision /> */}
      <Success />
      <section className="visit-sermons flex flex-col gap-8 pt-24">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", duration: 1, stiffness: 40 },
            opacity: { duration: 2 },
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 items-center text-center px-7 justify-center py-5  min-h-[40vh]"
        >
          <p className="bg-[var(--second-color)] px-1 tracking-wider md:text-[1.2rem] text-white uppercase font-[300]">
            beliefs that unite us
          </p>
          <h2 className="text-[1.8rem] md:text-[2.6rem] uppercase font-[600]">
            visit our sermons
          </h2>
          <p className="text-[.9rem] md:max-w-[600px]">
            Our community makes us unique. They have an energy that reverberates
            around them. Their mission in life is to ensure the wonder in the
            world is not overlooked.
          </p>
        </motion.div>
        <div className="bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054653/homchapel/DSC_0394_uoverd.webp')] bg-center bg-cover ">
          <Link to={"https://www.youtube.com/@mysteryembassy"} target="_blank">
            <div
              className={`cover  min-h-[60vh] md:min-h-[80vh] flex items-center justify-center cursor-pointer ease-in duration-500 ${
                hovered ? "bg-[#000000bd]" : "bg-[#00000065]"
              }`}
              onMouseOver={() => setHovered(true)}
              onMouseOut={() => setHovered(false)}
            >
              <IoMdPlayCircle
                className={`
                ${
                  hovered ? "text-[#ffffffbc]" : "text-[#ffffff3c]"
                }  ease-in-out duration-500 text-[4.3rem] md:text-[6rem]`}
              />
            </div>
          </Link>
        </div>
      </section>
      <CoreValues />
      <JoinUs />
      <img
        src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1745458654/homchapel/c_m4n5ge.webp"
        alt="mystery embassy international"
        className="w-full object-contain lg:max-w-[900px] lg:mx-auto lg:h-screen  "
      />
    </section>
  );
};

export default About;
