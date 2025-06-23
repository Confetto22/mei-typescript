import { Link } from "react-router";
import Button from "../common/button";
import { TextGenerateEffect } from "components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "components/ui/typewriter-effect";

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
    <section className="herocard relative h-screen w-full bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp')] bg-cover bg-center">
      <div className="cover min-h-screen bg-gradient-to-r from-[#001a36c6] to-[#350d008f] p-6 md:py-16 md:px-8 font-[var(--main-font)] flex flex-col justify-center items-center md:text-left text-center md:items-start gap-6">
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
        <TypewriterEffectSmooth
          cursorClassName="string"
          words={typewriterWords}
          className="capitalize text-[1rem] md:text-[1.3rem] font-[200] text-white"
        />

        {/* <p className="capitalize text-[1rem] font-[200] text-white">
          bridging the gap between divinity & humanity
        </p> */}
        <div className="heroBtns flex flex-col items-center md:items-start gap-5 text-white">
          <Link
            to={"/contact"}
            className="bg-[var(--second-color)] py-4 px-5 uppercase font-bold text-[.8rem] hover:opacity-70 ease-in-out duration-300"
          >
            join us this sunday
          </Link>
          <Link
            to={"https://www.facebook.com/mysteryembassy"}
            target="_blank"
            className="text-[var(--text-color)] bg-white py-3 px-5 font-bold uppercase text-[.8rem] hover:opacity-70 ease-in-out duration-300"
          >
            watch live
          </Link>
        </div>
      </div>
      <div className="bg-[#fff] px-4 absolute bottom-0 right-0   rounded-tl-[6rem] flex items-center flex-col justify-center  gap-1 max-w-[460px] py-5 text-[#242424]">
        <span className="text-[#fff] bg-[var(--second-color)]  font-bold px-2 text-[1rem] md:text-[1.3rem]">
          07:30 AM
        </span>
        <p className="text text-[1.7rem] font-extrabold uppercase md:text-[3rem] text-black">
          Sundays
        </p>
        <p className="capitalize ">join us & be blessed</p>
      </div>
    </section>
  );
};

export default HeroCard;
