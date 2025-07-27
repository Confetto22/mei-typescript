import { Link } from "react-router";
import Button from "../common/button";
import { TextGenerateEffect } from "components/ui/text-generate-effect";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "components/ui/typewriter-effect";

const churchnameStyles =
  "text-[var(--main-color)] font-bold text-[2.2rem] md:text-[3.2rem] leading-[2rem] md:leading-[3rem] uppercase";

const HeroCard = () => {
  const typewriterWords = [
    {
      text: "Bridging",
    },
    {
      text: "The",
    },
    {
      text: "Gap",
    },
    {
      text: "Between",
    },
    {
      text: "Divinity",
    },
    {
      text: "&",
    },
    {
      text: "Humanity.",
    },
  ];

  return (
    <section className="herocard relative h-screen w-full bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp')] bg-cover bg-center bg-fixed">
      <div className="cover min-h-screen bg-gradient-to-br from-[#001a36e6] via-[#001a36cc] to-[#350d00bf] p-6 md:py-16 md:px-8 font-[var(--main-font)] flex flex-col justify-center items-center md:text-left text-center md:items-start gap-8 pt-24">
        <div className="churchname flex flex-col gap-0">
          <TextGenerateEffect
            className={churchnameStyles}
            duration={0.3}
            filter={true}
            words={"Mystery"}
          />
          <TextGenerateEffect
            className={churchnameStyles}
            duration={0.6}
            filter={true}
            words={"Embassy"}
          />
          <TextGenerateEffect
            className={`${churchnameStyles} text-[var(--theme-yellow)]`}
            duration={0.9}
            filter={true}
            words={"International"}
          />
          {/* <p>
            <b>m</b>ystery
          </p>
          <p>
            <b>e</b>mbassy
          </p>
          <p className="text-[var(--theme-yellow)]">
            <b>i</b>nternational
          </p> */}
        </div>
        <TypewriterEffect
          cursorClassName="string"
          words={typewriterWords}
          className="capitalize text-[1rem] font-[200] text-white"
        />

        {/* <p className="capitalize text-[1rem] font-[200] text-white">
          bridging the gap between divinity & humanity
        </p> */}
        <div className="heroBtns flex flex-col md:flex-row items-center md:items-start gap-6 text-white">
          <Link
            to={"/contact"}
            className="group relative overflow-hidden bg-[var(--second-color)] py-4 px-8 uppercase font-bold text-sm rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Join Us This Sunday</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--second-color)] to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>
          <Link
            to={"https://www.facebook.com/mysteryembassy"}
            target="_blank"
            className="group relative overflow-hidden text-[var(--text-color)] bg-white/95 backdrop-blur-sm py-4 px-8 font-bold uppercase text-sm rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
          >
            <span className="relative z-10">Watch Live</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>
        </div>
      </div>
      <div className="bg-white/95 backdrop-blur-md px-6 absolute bottom-0 right-0 rounded-tl-[6rem] flex items-center flex-col justify-center gap-2 max-w-[460px] py-8 text-[#242424] shadow-2xl border-l border-t border-white/30">
        <span className="text-white bg-gradient-to-r from-[var(--second-color)] to-red-600 font-bold px-4 py-1 text-lg md:text-xl rounded-full shadow-lg">
          07:30 AM
        </span>
        <p className="text-2xl md:text-4xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[var(--dark-blue)] to-[var(--second-color)]">
          Sundays
        </p>
        <p className="capitalize text-gray-600 font-medium">Join us & be blessed</p>
      </div>
    </section>
  );
};

export default HeroCard;
