import type { JSX } from "react";
import { FaRegAddressCard } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router";

type cardsProps = {
  title: string;
  value: string;
  refLink: string;
  icon: JSX.Element;
};

import PageHead from "~/components/common/pagehead";

const contactCards: cardsProps[] = [
  {
    title: "Address",
    value: "123 Main St, Anytown, USA",
    refLink: "https://www.google.com/maps",
    icon: <FaRegAddressCard />,
  },
  {
    title: "E-mail",
    value: "info@example.com",
    refLink: "mailto:info@example.com",
    icon: <IoMailOutline />,
  },
  {
    title: "Phone",
    value: "(123) 456-7890",
    refLink: "tel:+11234567890",
    icon: <LuPhoneCall />,
  },
];

const Contact = () => {
  return (
    <section className="pt-20">
      <PageHead
        bgPic="bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp')]"
        prevPage="Home"
        currPage="Contact"
        prevLink="/"
      />
      <section className="flex flex-col gap-12 px-4 py-16 mx-auto md:flex-row md:items-start md:justify-center max-w-7xl">
        <div className="formBox flex flex-col items-start gap-6 md:w-[55%]">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--dark-blue)] to-[var(--second-color)]">
              Reach Out to Us
            </h2>
            <p className="max-w-[500px] text-gray-600 text-lg leading-relaxed">
              We'd love to hear from you! Whether you have questions about our
              services, want to join our community, or need prayer support,
              please fill out the form below.
            </p>
          </div>
          <form
            autoComplete="off"
            className="contact-form w-full max-w-[600px] flex flex-col gap-6 bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100"
          >
            <div>
              <label htmlFor="name">
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">
                E-mail <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your E-mail"
                required
              />
            </div>
            <div>
              <label htmlFor="message">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="group relative overflow-hidden bg-gradient-to-r from-[var(--second-color)] to-red-600 py-4 px-8 text-white font-medium text-sm uppercase rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-[var(--second-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </form>
        </div>
        <section className="contact-cards flex flex-col gap-6 md:w-[40%]">
          {contactCards.map((card) => (
            <Link
              to={card.refLink}
              key={card.title}
              className="contact-card w-full max-w-[450px] md:max-w-[360px] py-8 px-6 flex items-center gap-6 bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-[var(--second-color)] rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <span className="icon text-3xl text-[var(--second-color)] group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </span>
              <div className="text">
                <h3 className="text-lg font-semibold text-gray-800">
                  {card.title}
                </h3>
                <p className="text-sm font-light text-gray-600 group-hover:text-[var(--second-color)] transition-colors duration-300">
                  {card.value}
                </p>
              </div>
            </Link>
          ))}
        </section>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0894058421823!2d-0.32081232566104967!3d5.553763833673537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbdf3d2cd56d5%3A0x288d247b8da7f24b!2sMystery%20Embassy%20International!5e0!3m2!1sen!2sgh!4v1748355643195!5m2!1sen!2sgh"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full min-h-[70vh]  border-0 "
      ></iframe>
    </section>
  );
};

export default Contact;
