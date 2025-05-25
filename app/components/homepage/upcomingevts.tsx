// import { Link, useNavigate } from "react-router-dom";
// import { allEvents } from "./common/events";
import { Link } from "react-router";
import CountDown from "../common/countdown/countdown";
import { allEvents } from "../common/events";
import { FaRegClock } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
// import CountDown from "./common/countdown/CountDown";

const closestEvts = allEvents.slice(0, 3);

const UpcomingEvts = () => {
  //   const navigate = useNavigate();
  return (
    <section className="py-24 pb-0 upcoming_evts  flex flex-col   text-stone-200">
      <div className="upcoming_text px-8 text-center flex flex-col items-center justify-center gap-4 min-h-[60vh] bg-[var(--dark-blue)] py-12">
        <h2 className="text-[2.5rem] uppercase font-extrabold md:text-[2.5rem]">
          upcoming events
        </h2>
        <p className="max-w-[720px] md:text-[1.2rem]">
          Stay connected with what&apos;s happening at Community Church! From
          worship nights and Bible studies to outreach programs and fellowship
          gatherings, there&apos;s always something for everyone.
        </p>
      </div>
      <div className="dont_miss text-[#fbf0e0]  bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1745707493/homchapel/58-home-5_ohzm9x.webp')] bg-cover bg-center">
        <div className="cover bg-[#0000008e] flex flex-col items-center justify-center min-h-[45vh] md:gap-16 md:min-h-[80vh] gap-6 p-8">
          <p className="text-[1.6rem] md:text-[2rem] font-semibold capitalize text-center">
            Don&apos;t miss our next event!
          </p>
          <CountDown
            month={closestEvts[0].month}
            day={closestEvts[0].day}
            year={"2025"}
          />
          <Link
            to={closestEvts[0].link}
            className="text-white bg-[var(--theme-yellow)] md:px-12 md:py-4 px-9 py-2 uppercase font-bold text-[.8rem]"
          >
            join us
          </Link>
        </div>
      </div>
      <div className="allUpcoming px-8 grid grid-cols-1 py-[9rem] gap-7">
        {closestEvts.map((evt) => (
          <div
            className="upcoming_evt flex flex-col max-w-[1100px] mx-auto  items-center justify-center  border rounded-[2rem]  p-8 md:flex-row md:items-center md:justify-start gap-3 md:gap-[3.2rem] text-[#242424]  border-[var(--dark-blue)]"
            key={evt.name}
          >
            <div className="md:flex items-center flex-col justify-center hidden md:w-[10%]">
              <p className="uppercase text-[.9rem] tracking-widest">
                {evt.dayOfWeek.slice(0, 3)}
              </p>
              <p className="text-[4rem]">{evt.day}</p>
            </div>
            <img
              src={evt.flyer}
              alt="mystery embassy"
              className="md:max-w-[250px] w-full md:w-[30%] rounded-md"
            />
            <div className="flex flex-col items-start gap-3 md:items-start md:gap-5 md:w-[60%]">
              <p className="capitalize font-bold text-[1.4rem] md:text-[1.7rem]">
                {evt.name}
              </p>
              <p className="text-[.9rem] font-[200] max-w-[500px] md:text-left">
                {evt.desc.slice(0, 120)}...{" "}
                <Link
                  to={`/${evt.name.replaceAll(" ", "-").toLowerCase()}`}
                  className="text-[#4a4af3] font-[300] underline hover:underline-offset-2 duration-300 hover:opacity-70 capitalize"
                >
                  {" "}
                  read more
                </Link>
              </p>
              <p className="uppercase   text-[.9rem] font-200 flex items-center gap-2">
                <span className="text-[var(--second-color)] text-[1.3rem]">
                  <LuCalendarDays />
                </span>
                {evt.month} {evt.day}, {evt.year}
              </p>
              <p className="uppercase   text-[.9rem] font-200 flex items-center gap-2">
                {" "}
                <span className="text-[var(--second-color)] text-[1.3rem]">
                  <FaRegClock />
                </span>
                {evt.time}
              </p>

              <Link
                to={`/${evt.name.replaceAll(" ", "-").toLowerCase()}`}
                className="uppercase  font-bold py-4 px-7 bg-[var(--theme-yellow)] w-full text-center text-[.9rem] mx-auto md:mx-[0] rounded-md"
              >
                view details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvts;
