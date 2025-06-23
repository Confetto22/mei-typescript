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
    <footer className="min-h-[50vh] bg-[var(--dark-blue)] py-8 px-7 md:px-12 flex flex-col gap-14 ">
      <div className="newsletter  text-stone-200 flex flex-col gap-4 max-w-[1000px] md:w-[80%] mx-auto items-center text-center">
        <p>Stay Connected</p>
        <p>Get updates on events and inspiration.</p>
        <form
          className="letter-form  flex items-center justify-center gap-0 w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            required
            className="border-none w-[70%] bg-white  min-h-[2.3rem]  rounded-l-[2rem] outline-none text-[#242424] pl-[2rem] text-[.7rem] md:text-[.9rem]"
            placeholder="e-mail / phone no."
          />
          <button
            type="submit"
            className="w-[30%] bg-[var(--second-color)] border-none hover:cursor-pointer  text-[.8rem] uppercase min-h-[2.3rem] tracking-wider rounded-r-[2rem] hover:bg-[#954026] ease-in-out duration-300"
          >
            submit
          </button>
        </form>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-y-[4rem] md:gap-y-0">
        <div className="div-1 flex flex-col items-start gap-3 ">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1745458898/homchapel/cropped_logo_ccdry3.png"
            alt="mystery embassy international"
            className="max-w-[120px]"
          />
          <p className=" font-[200] text-stone-300  ">
            Thank you for visiting us online. We invite you to join us in
            worship, fellowship, and service as we grow together in faith &
            love. God bless you!
          </p>
          <div className="footerSocials flex items-center gap-2 mt-2">
            {footerSocials.map((social) => (
              <Link
                to={social.ref}
                target="_blank"
                key={social.refName}
                className="bg-transparent border border-[#a3a2a2] rounded-full text-white flex items-center justify-center hover:text-[var(--theme-yellow)]  ease-in-out duration-200 w-[40px] h-[40px] hover:border-[var(--theme-yellow)]"
                aria-label={`${social.refName} link`}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="div-2  md:w-[80%] place-self-center h-full flex flex-col items-start  gap-3">
          <p className="text-white text-[1.4rem] uppercase">resources</p>
          <menu className="useful-links flex flex-col items-center  justify-start w-full gap-3">
            {resourceLinks.map((link) => (
              <Link
                to={link.refLink}
                className="text-stone-300 font-[200] "
                key={link.ref}
              >
                {link.ref}
              </Link>
            ))}
          </menu>
        </div>
        <div className="div-2 flex flex-col gap-3">
          <p className="text-white text-[1.4rem] uppercase">contacts</p>
          <p className="text-stone-300 font-[200] capitalize">
            keep in touch with us via our various social media platforms to stay
            updated.
          </p>
          <menu className="contacts flex flex-col  items-center gap-2">
            {contactLinks.map((contact) => (
              <Link
                key={contact.ref}
                to={contact.refLink}
                className="text-stone-300 font-[200] flex items-center gap-3"
              >
                {contact.icon} {contact.ref}
              </Link>
            ))}
          </menu>
        </div>
        <div className="div-2 flex flex-col items-start gap-3">
          <p className="text-white text-[1.4rem] uppercase">Location</p>
          {/* <p className="text-stone-300 text-[.9rem] font-[200]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            fugiat laudantium, voluptatibus nam consectetur enim laborum aut
            exercitationem quibusdam laboriosam porro iure atque impedit quas a
            omnis error. Quos sunt eum in similique dolores necessitatibus
            excepturi, aliquid ipsam aliquam laborum.
          </p> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.089405842192!2d-0.32081232566105006!3d5.553763833673532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbdf3d2cd56d5%3A0x288d247b8da7f24b!2sMystery%20Embassy%20International!5e0!3m2!1sen!2sgh!4v1750716572963!5m2!1sen!2sgh"
            className="w-full h-full"
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
