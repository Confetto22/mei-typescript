import { LiaTelegram } from "react-icons/lia";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import { Link } from "react-router";
import { GoMail } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
// type footerSocials = {};

const contactLinks = [
  {
    // name: "phone",
    icon: <LuPhone />,
    ref: "+233(0)24-449-6968",
    refLink: "tel:23324496968",
  },
  {
    // name: "location",
    icon: <IoLocationOutline />,
    ref: "Tatop, Weija",
    refLink:
      "https://www.google.com/maps/place/Mystery+Embassy+International/@5.5537638,-0.3208123,17z/data=!3m1!4b1!4m6!3m5!1s0xfdfbdf3d2cd56d5:0x288d247b8da7f24b!8m2!3d5.5537585!4d-0.3182374!16s%2Fg%2F11vj4r9b3b?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    // name: "email",
    icon: <GoMail />,
    ref: "info@mysteryembassy.com",
    refLink: "mailto:info@mysteryebassy.com",
  },
];

const footerSocials = [
  {
    icon: <FaFacebookF />,
    ref: "https://web.facebook.com/homchapel",
    refName: "facebook",
  },
  {
    icon: <FaTiktok />,
    ref: "https://www.tiktok.com/@homchapel",
    refName: "tiktok",
  },
  {
    icon: <FaYoutube />,
    ref: "https://www.youtube.com/@houseofmysterychapelintern2095",
    refName: "youtube",
  },
  {
    icon: <FaInstagram />,
    ref: "https://www.instagram.com/homchapel/",
    refName: "Instagram",
  },
  // {
  //   icon: <LiaTelegram />,
  //   ref: "https://t.me/HoMChapel",
  //   refName: "telegram",
  // },
];

const resourceLinks = [
  {
    ref: "About",
    refLink: "/about",
  },
  {
    ref: "Contact",
    refLink: "/contact",
  },
  {
    ref: "Events",
    refLink: "/events",
  },
  {
    ref: "Gallery",
    refLink: "/gallery",
  },
  {
    ref: "New Here?",
    refLink: "/new-here",
  },
];

const Footer = () => {
  return (
    <footer className="min-h-[50vh] bg-gradient-to-br from-[var(--dark-blue)] via-[#001a36] to-[#000d1a] py-12 px-7 md:px-12 flex flex-col gap-16 relative overflow-hidden">
      <div className="newsletter text-stone-200 flex flex-col gap-6 max-w-[1000px] md:w-[80%] mx-auto items-center text-center relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme-yellow)] to-white">Stay Connected</h3>
        <p className="text-lg text-gray-300">Get updates on events and inspiration delivered to your inbox.</p>
        <form
          className="letter-form flex items-center justify-center gap-0 w-full max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            className="flex-1 bg-white/90 backdrop-blur-sm min-h-[3rem] rounded-l-2xl outline-none text-gray-800 pl-6 text-sm md:text-base placeholder-gray-500 border border-white/20 focus:border-[var(--theme-yellow)] transition-all duration-300"
            placeholder="Enter your email address"
          />
          <button
            type="submit"
            className="px-6 bg-gradient-to-r from-[var(--second-color)] to-red-600 border-none cursor-pointer text-sm uppercase min-h-[3rem] tracking-wider rounded-r-2xl hover:from-red-600 hover:to-[var(--second-color)] transition-all duration-300 text-white font-medium shadow-lg hover:shadow-xl"
          >
            Subscribe
          </button>
        </form>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-12 md:gap-x-8 md:gap-y-0 relative z-10">
        <div className="div-1 flex flex-col items-start gap-6">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1745458898/homchapel/cropped_logo_ccdry3.png"
            alt="mystery embassy international"
            className="max-w-[120px] drop-shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <p className="font-light text-gray-300 leading-relaxed text-sm">
            Thank you for visiting us online. We invite you to join us in worship, fellowship, and service as we grow together in faith & love. God bless you!
          </p>
          <div className="footerSocials flex items-center gap-3 mt-2">
            {footerSocials.map((social) => (
              <Link
                to={social.ref}
                target="_blank"
                key={social.refName}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white flex items-center justify-center hover:text-[var(--theme-yellow)] hover:bg-[var(--theme-yellow)]/20 hover:border-[var(--theme-yellow)] transition-all duration-300 w-12 h-12 hover:scale-110 shadow-lg"
                aria-label={`${social.refName} link`}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="div-2 md:w-[80%] place-self-center h-full flex flex-col items-start gap-4">
          <h4 className="text-white text-xl font-semibold uppercase tracking-wide">Resources</h4>
          <menu className="useful-links flex flex-col items-start justify-start w-full gap-3">
            {resourceLinks.map((link) => (
              <Link
                to={link.refLink}
                className="text-gray-300 font-light hover:text-[var(--theme-yellow)] transition-colors duration-300 hover:translate-x-1"
                key={link.ref}
              >
                {link.ref}
              </Link>
            ))}
          </menu>
        </div>
        <div className="div-2 flex flex-col gap-4">
          <h4 className="text-white text-xl font-semibold uppercase tracking-wide">Contact</h4>
          <p className="text-gray-300 font-light text-sm leading-relaxed">
            Keep in touch with us via our various platforms to stay updated.
          </p>
          <menu className="contacts flex flex-col items-start gap-3">
            {contactLinks.map((contact) => (
              <Link
                key={contact.ref}
                to={contact.refLink}
                className="text-gray-300 font-light flex items-center gap-3 hover:text-[var(--theme-yellow)] transition-colors duration-300 text-sm"
              >
                <span className="text-[var(--second-color)]">{contact.icon}</span> {contact.ref}
              </Link>
            ))}
          </menu>
        </div>
        <div className="div-2 flex flex-col items-start gap-4">
          <h4 className="text-white text-xl font-semibold uppercase tracking-wide">Location</h4>
          {/* <p className="text-stone-300 text-[.9rem] font-[200]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            fugiat laudantium, voluptatibus nam consectetur enim laborum aut
            exercitationem quibusdam laboriosam porro iure atque impedit quas a
            omnis error. Quos sunt eum in similique dolores necessitatibus
            excepturi, aliquid ipsam aliquam laborum.
          </p> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.089405842192!2d-0.32081232566105006!3d5.553763833673532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbdf3d2cd56d5%3A0x288d247b8da7f24b!2sMystery%20Embassy%20International!5e0!3m2!1sen!2sgh!4v1750716572963!5m2!1sen!2sgh"
            className="w-full h-full rounded-lg border border-white/20 shadow-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
