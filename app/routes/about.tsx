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
    <section className="about-page font-[300] text-[.9rem] pt-20">
      <PageHead
        bgPic="bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp')]"
        prevPage="Home"
        currPage="About"
        prevLink="/"
      />
      <div className="flex flex-col gap-12 px-6 py-24 mx-auto md:flex-row-reverse md:justify-center md:items-center max-w-7xl">
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
          className="intro-text flex flex-col gap-6 md:w-[50%] md:max-w-[600px]"
        >
          <h2 className="uppercase font-[500] text-[1.3rem] md:text-[2.2rem] leading-tight">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--second-color)] to-red-600 font-bold">
              Mystery Embassy International
            </span>
          </h2>
          <div className="space-y-4 leading-relaxed text-gray-700">
            <p className="text-lg">
              Our ministry appeals to diverse backgrounds and interests,
              offering a rigorous yet welcoming spiritual journey. We understand
              each person comes to us with different talents, experiences, and
              identities. We celebrate this diversity because it is our
              strength.
            </p>
            <p className="text-lg">
              Community is everything at Mystery Embassy International. It's who
              we are and how things get done. Everyone here is motivated by a
              deep commitment to making sure each person and family feels
              welcome and included. When everyone feels like they belong, we are
              stronger and smarter together.
            </p>
          </div>
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
          className="imageBox rounded-2xl overflow-hidden shadow-2xl md:w-[45%] group"
        >
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp"
            alt="mystery embassy international"
            className="object-cover w-full h-full transition-all duration-700 ease-in-out aspect-video md:aspect-auto group-hover:scale-110"
          />
        </motion.div>
      </div>
      {/* <Vision /> */}
      <Success />
      <section className="flex flex-col gap-8 pt-24 visit-sermons">
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
