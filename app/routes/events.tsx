import { Link } from "react-router";
import PageHead from "~/components/common/pagehead";
import { MdArrowOutward } from "react-icons/md";
import { allEvents } from "~/components/common/events";

// const allEvents = [
//     {
//         id: 1,
//         title: "Restoration Hour",
//         date: "November 2, 2025",
//         time: "10:00 AM",
//         description: "Join us for a time of restoration and healing.",
//         flyerUrl:
//             "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748160747/agro-ally/restoration-hour_jx7nej.jpg",
//         icon:'',
//     },
//     // Add more events as needed
// ]

const Events = () => {
  return (
    <section className="events page">
      <PageHead
        bgPic="bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp')]"
        prevPage="Home"
        currPage="Events"
        prevLink="/"
      />
      <div className="all-events px-7 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[2rem]">
        {allEvents.map((evt) => (
          <div
            key={evt.name}
            className="single-event max-w-[400px] border border-black p-4 flex flex-col items-start justify-between gap-5"
          >
            <div className="flyerBox overflow-hidden ">
              <Link to={`/${evt.name.replaceAll(" ", "-").toLowerCase()}`}>
                <img
                  src={evt.flyer}
                  alt="mystery embassy international"
                  className="flyer hover:scale-110 ease-in duration-500"
                />
              </Link>
            </div>

            <div className="event-text flex flex-col items-start justify-center gap-2">
              <p className="date-time text-[.7rem]">
                {evt.month} {evt.day}, {evt.year} @ {evt.time}
              </p>

              <Link
                to={`/${evt.name.replaceAll(" ", "-").toLowerCase()}`}
                className="evt-title capitalize"
              >
                {evt.name}
              </Link>

              <p className="evt-desc text-[.8rem] font-[200]">
                {evt.desc.slice(0, 120)}...
              </p>

              <Link
                to={`/${evt.name.replaceAll(" ", "-").toLowerCase()}`}
                className="flex items-center gap-[.2rem] uppercase text-[.7rem] font-[700]"
              >
                view details <MdArrowOutward className="text-[1.3rem]" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
