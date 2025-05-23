import { LiaTelegram } from "react-icons/lia";
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
    refLink: "",
  },
  {
    // name: "location",
    icon: <IoLocationOutline />,
    ref: "Tatop, Weija",
    refLink: "",
  },
  {
    // name: "email",
    icon: <GoMail />,
    ref: "info@mysteryembassy",
    refLink: "",
  },
];

const footerSocials = [
  {
    icon: <i className="fa-brands fa-facebook-f"></i>,
    ref: "https://web.facebook.com/homchapel",
    refName: "facebook",
  },
  {
    icon: <i className="fa-brands fa-tiktok"></i>,
    ref: "https://www.tiktok.com/@homchapel",
    refName: "tiktok",
  },
  {
    icon: <i className="fa-brands fa-youtube"></i>,
    ref: "https://www.youtube.com/@houseofmysterychapelintern2095",
    refName: "youtube",
  },
  {
    icon: <i className="fa-brands fa-instagram"></i>,
    ref: "https://www.instagram.com/homchapel/",
    refName: "Instagram",
  },
  {
    icon: <LiaTelegram />,
    ref: "https://t.me/HoMChapel",
    refName: "telegram",
  },
];

const resourceLinks = [
  {
    ref: "Home",
    refLink: "/",
  },
  {
    ref: "Home",
    refLink: "/",
  },
  {
    ref: "Home",
    refLink: "/",
  },
  {
    ref: "Home",
    refLink: "/",
  },
  {
    ref: "Home",
    refLink: "/",
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
            className="w-[30%] bg-[var(--second-color)] border-none hover:cursor-pointer  text-[.8rem] uppercase min-h-[2.3rem] tracking-wider rounded-r-[2rem] hover:bg-[#ba4521] ease-in-out duration-300"
          >
            submit
          </button>
        </form>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-x-[2rem] gap-y-[4rem] md:gap-y-0">
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
                className="bg-transparent border border-[#a3a2a2] rounded-full text-white flex items-center justify-center hover:text-[var(--second-color)]  ease-in-out duration-200 w-[40px] h-[40px]"
                aria-label={`${social.refName} link`}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="div-2 flex flex-col items-start md:items-center gap-3">
          <p className="text-white text-[1.4rem] uppercase">resources</p>
          <menu className="useful-links flex flex-col items-start md:items-center justify-start w-full gap-3">
            {resourceLinks.map((link) => (
              <Link to={link.refLink} className="text-stone-300 font-[200]">
                {link.ref}
              </Link>
            ))}
          </menu>
        </div>
        <div className="div-2 flex flex-col items-start gap-3">
          <p className="text-white text-[1.4rem] uppercase">contacts</p>
          <p className="text-stone-300 font-[200] capitalize">
            keep in touch with us via our various social media platforms to stay
            updated.
          </p>
          <menu className="contacts flex flex-col items-start gap-2">
            {contactLinks.map((contact) => (
              <Link
                to={contact.refLink}
                className="text-stone-300 font-[200] flex items-center gap-3"
              >
                {contact.icon} {contact.ref}
              </Link>
            ))}
          </menu>
        </div>
        <div className="div-2 flex flex-col items-start gap-3">
          <p className="text-white text-[1.4rem] uppercase">resources</p>
          <p className="text-stone-300 text-[.9rem] font-[200]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            fugiat laudantium, voluptatibus nam consectetur enim laborum aut
            exercitationem quibusdam laboriosam porro iure atque impedit quas a
            omnis error. Quos sunt eum in similique dolores necessitatibus
            excepturi, aliquid ipsam aliquam laborum.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
