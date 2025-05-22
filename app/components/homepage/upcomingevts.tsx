// import { Link, useNavigate } from "react-router-dom";
// import { allEvents } from "./common/events";
import { Link } from "react-router";
import CountDown from "../common/countdown/countdown";
import { allEvents } from "../common/events";
// import CountDown from "./common/countdown/CountDown";

const closestEvts = allEvents.slice(0, 3);

const UpcomingEvts = () => {
  //   const navigate = useNavigate();
  return (
    <section className="py-24 upcoming_evts  flex flex-col gap-16 bg-[#1e1e1e] text-stone-200">
      <div className="upcoming_text px-8 text-center flex flex-col items-center justify-center gap-4">
        <h2 className="text-[2.5rem] uppercase font-extrabold md:text-[3rem]">
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
          <p className="text-[1.6rem] font-semibold capitalize text-center">
            Don&apos;t miss our next event!
          </p>
          <CountDown
            month={closestEvts[0].month}
            day={closestEvts[0].day}
            year={2025}
          />
          <Link
            to={closestEvts[0].link}
            className="text-white bg-[#ed5a2f] md:px-12 md:py-4 px-9 py-2 uppercase font-bold"
          >
            join us
          </Link>
        </div>
      </div>
      <div className="allUpcoming px-8 grid grid-cols-1 gap-7">
        {closestEvts.map((evt) => (
          <div
            className="upcoming_evt flex flex-col max-w-[1100px] mx-auto  items-center justify-center  border rounded-[2rem] border-[#ffffff29] p-8 md:flex-row md:items-center md:justify-start gap-3 md:gap-[3.2rem]"
            key={evt.name}
          >
            <img
              src={evt.flyer}
              alt="mystery embassy"
              className="md:max-w-[380px] w-full md:w-[30%]"
            />
            <div className="flex flex-col items-start gap-3 md:items-start md:gap-5">
              <p className="capitalize font-bold text-[1.4rem] md:text-[1.7rem]">
                {evt.name}
              </p>
              <p className="text-[.9rem] font-[200] max-w-[500px] md:text-left">
                {evt.desc.slice(0, 80)}...{" "}
                <Link
                  to={`/${evt.name.replaceAll(" ", "-").toLowerCase()}`}
                ></Link>
              </p>
              <p className="uppercase   text-[.9rem] font-200">
                {evt.month} {evt.day} @ {evt.time}
              </p>
              <Link
                // type="button"

                // onClick={() => navigate(`/${evt.name}`)}
                to={`/${evt.name.replaceAll(" ", "-").toLowerCase()}`}
                className="uppercase border border-[#ffffff29] font-bold py-4 px-7 text-[.9rem] mx-auto md:mx-[0]"
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
