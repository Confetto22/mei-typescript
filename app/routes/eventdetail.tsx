import { Link } from "react-router";
import type { Route } from "../+types/root";
import { allEvents } from "../components/common/events";
import PageHead from "../components/common/pagehead";
import { LuPhone } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { TbCurrentLocation } from "react-icons/tb";
import { GoMail } from "react-icons/go";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import NotFound from "~/components/NotFound";

const Eventdetail = ({ params }: Route.LoaderArgs) => {
  const foundEvt = allEvents.find(
    (evt) => evt.name.replaceAll(" ", "-").toLowerCase() === params.dynamicEvent
  );

  if (foundEvt) {
    return (
      <section className="event-detail">
        <PageHead
          prevPage="Events"
          currPage={foundEvt?.name}
          bgPic="bg-[url(https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054651/homchapel/DSC_0158_rqd3kl.webp)]"
          prevLink="/events"
        />

        <section className="eventdets-text flex flex-col md:flex-row px-6 md:px-12 py-14 items-start justify-center gap-12">
          <div className="eventContent flex  flex-col gap-6 w-full md:w-[60%] h-full  min-h-[80vh]">
            <div className="imgBox overflow-hidden rounded-2xl">
              <img
                src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0651_vl9kpf.webp"
                alt="Mystery Embassy International"
                className="w-full ease-in    object-cover object-center rounded-2xl"
              />
            </div>
            <h2 className="eventdetName capitalize text-[1.9rem] font-bold ">
              {foundEvt?.name}
            </h2>
            <p className="text-[1rem] font-light">{foundEvt?.desc}</p>
            {/* <div className="imgBox md:w-[70%] overflow-hidden rounded-2xl">
              <img
                src={foundEvt?.flyer}
                alt="Mystery Embassy International"
                className="w-full ease-in    object-cover object-center rounded-2xl"
              />
            </div> */}
          </div>
          <div className="md: sticky top-[10px] reservation-info w-full flex flex-col gap-8 md:w-[30%] h-full  min-h-[80vh]">
            <div className="evtContacts max-w-[600px] rounded-2xl bg-[#f2f7f7] px-5 py-9 flex flex-col gap-8">
              <p className="flex flex-col font-bold gap-1 text-[1.3rem]">
                Information{" "}
              </p>
              <hr className="max-w-[50px] h-[6px] rounded-xl border-none bg-[var(--second-color)]" />
              <div className="infoValues capitalize flex flex-col gap-4">
                <p>
                  <span className="evtKey">
                    <MdOutlineDriveFileRenameOutline className="icon" /> name :
                  </span>{" "}
                  <span className="evtValue">{foundEvt?.name}</span>{" "}
                </p>
                <p>
                  <span className="evtKey">
                    <LuCalendarDays className="icon" /> date :
                  </span>{" "}
                  <span className="evtValue">
                    {`${foundEvt?.month} ${foundEvt?.day}, ${foundEvt?.year}`}{" "}
                  </span>
                </p>
                <p>
                  <span className="evtKey">
                    <FaRegClock className="icon" /> time :
                  </span>{" "}
                  <span className="evtValue">{foundEvt?.time}</span>
                </p>
                <p>
                  <span className="evtKey">
                    <LuPhone className="icon" /> phone :
                  </span>{" "}
                  <span className="evtValue">
                    <Link to={"#"}>+233(0)24-449-6968</Link>
                  </span>
                </p>
                <p>
                  <span className="evtKey">
                    <TbCurrentLocation className="icon" /> location :
                  </span>{" "}
                  <span className="evtValue">
                    <Link to={"#"}>Tatop, Weija</Link>
                  </span>
                </p>
                <p>
                  <span className="evtKey">
                    <IoLocationOutline className="icon" /> venue :
                  </span>{" "}
                  <span className="evtValue">Mystery Temple</span>
                </p>
                <p>
                  <span className="evtKey">
                    <GoMail className="icon" /> email :
                  </span>{" "}
                  <span className="evtValue">
                    <Link to={"#"}>info@mysteryembassy</Link>
                  </span>
                </p>
              </div>
            </div>
            <div className="evtContacts max-w-[600px] rounded-2xl bg-[#f2f7f7] px-5 py-9 flex flex-col gap-8">
              <p className="flex flex-col font-bold gap-1 text-[1.3rem]">
                Reserve Your Seat!{" "}
              </p>
              <hr className="max-w-[50px] h-[6px] rounded-xl border-none bg-[var(--second-color)]" />
              <h2 className="capitalize font-[300]">
                call our Front Desk for more enquires...
              </h2>
            </div>
          </div>
        </section>
      </section>
    );
  } else {
    return <NotFound />;
  }
};

export default Eventdetail;
