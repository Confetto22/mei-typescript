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
    <section>
      <PageHead
        bgPic="bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp')]"
        prevPage="Home"
        currPage="Contact"
        prevLink="/"
      />
      <section className="flex flex-col md:flex-row md:items-center md:justify-center">
        <div className="formBox  px-7 py-15 flex flex-col items-start gap-4 md:w-[50%]">
          <h2 className=" text-[1.5rem] md:text-[2.3rem] font-bold ">
            Reach Out to Us
          </h2>
          <p className="max-w-[500px] text-[#3e3e3e] font-[300]">
            If you have any questions, you can contact us. Please, fill out the
            form below.
          </p>
          <form
            autoComplete="off"
            className="contact-form w-full max-w-[600px] flex flex-col gap-4"
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
              className="bg-[var(--second-color)] py-3 px-4 text-white font-[400] text-[.9rem] uppercase"
            >
              Send message
            </button>
          </form>
        </div>
        <section className="contact-cards  px-7 py-15 flex flex-col gap-6 md:w-[40%] ">
          {contactCards.map((card) => (
            <Link
              to={card.refLink}
              key={card.title}
              className="contact-card w-full max-w-[450px] md:max-w-[360px] py-[3rem]  flex items-center gap-4 p-4 border border-gray-300 hover:border-[var(--second-color)] rounded-md hover:shadow-lg transition duration-300"
            >
              <span className="icon text-[2rem] text-[var(--second-color)]">
                {card.icon}
              </span>
              <div className="text">
                <h3 className="font-[500]">{card.title}</h3>
                <p className="text-[.8rem] font-[300] text-[#454545d3] ">
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
