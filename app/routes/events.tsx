import { Link } from "react-router";
import PageHead from "~/components/common/pagehead";
import { MdArrowOutward } from "react-icons/md";
import { allEvents } from "~/components/common/events";

const Events = () => {
  return (
    <section className="events page pt-20">
      <PageHead
        bgPic="bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp')]"
        prevPage="Home"
        currPage="Events"
        prevLink="/"
      />
      <div className="text-center mt-16 mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--dark-blue)] to-[var(--second-color)] mb-4">
          Upcoming Events
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Join us for these exciting upcoming events and be part of our growing community.
        </p>
      </div>
      <div className="all-events px-7 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {allEvents.map((evt) => (
          <div
            key={evt.name}
            className="single-event modern-card max-w-[400px] p-6 flex flex-col items-start justify-start gap-6 mx-auto group hover:scale-105 transition-all duration-300"
          >
            <div className="flyerBox overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Link
                to={`/events/${evt.name.replaceAll(" ", "-").toLowerCase()}`}
              >
                <img
                  src={evt.flyer}
                  alt={`${evt.name} event flyer`}
                  className="flyer w-full h-48 object-cover hover:scale-110 transition-transform duration-700 rounded-xl"
                  loading="lazy"
                />
              </Link>
            </div>

            <div className="event-text flex flex-col items-start justify-center gap-3 flex-1">
              <div className="bg-gradient-to-r from-[var(--second-color)] to-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                {evt.month} {evt.day}, {evt.year} @ {evt.time}
              </div>

              <Link
                to={`/events/${evt.name.replaceAll(" ", "-").toLowerCase()}`}
                className="evt-title capitalize text-xl font-bold text-gray-800 hover:text-[var(--second-color)] transition-colors duration-300 line-clamp-2"
              >
                {evt.name}
              </Link>

              <p className="evt-desc text-sm text-gray-600 leading-relaxed line-clamp-3">
                {evt.desc.slice(0, 120)}...
              </p>

              <Link
                to={`/events/${evt.name.replaceAll(" ", "-").toLowerCase()}`}
                className="flex items-center gap-2 uppercase text-xs font-bold text-[var(--second-color)] hover:text-red-600 transition-colors duration-300 mt-auto group-hover:translate-x-1"
              >
                View Details <MdArrowOutward className="text-base group-hover:rotate-45 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
