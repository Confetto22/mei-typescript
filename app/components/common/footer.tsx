import { LiaTelegram } from "react-icons/lia";
import { Link } from "react-router";

type Props = {};

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

const Footer = () => {
  return (
    <footer className="min-h-[50vh] bg-[var(--dark-blue)] py-8 px-12 flex flex-col gap-14 ">
      <div className="newsletter text-stone-200 flex flex-col gap-4 max-w-[1000px] w-[80%] mx-auto">
        <p>Stay Connected</p>
        <p>Get updates on events and inspiration.</p>
        <form
          className="letter-form bg-white flex items-center justify-center gap-0 "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            required
            className="border-none w-[70%] bg-transparent  py-[.4rem]"
          />
          <button
            type="submit"
            className="w-[30%] bg-blue-500 border-non hover:cursor-pointer py-[.4rem]"
          >
            submit
          </button>
        </form>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-x-[2rem]">
        <div className="div-1 flex flex-col items-start gap-6 ">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1745458898/homchapel/cropped_logo_ccdry3.png"
            alt="mystery embassy international"
            className="max-w-[140px]"
          />
          <p className="text-[.9rem] font-[200] text-stone-300 ">
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
        <div className="div-2 flex flex-col items-start gap-6">
          <p className="text-white text-[1.4rem] uppercase">resources</p>
          <p className="text-stone-300 text-[.9rem] font-[200]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            fugiat laudantium, voluptatibus nam consectetur enim laborum aut
            exercitationem quibusdam laboriosam porro iure atque impedit quas a
            omnis error. Quos sunt eum in similique dolores necessitatibus
            excepturi, aliquid ipsam aliquam laborum.
          </p>
        </div>
        <div className="div-2 flex flex-col items-start gap-6">
          <p className="text-white text-[1.4rem] uppercase">contacts</p>
          <p className="text-stone-300 text-[.9rem] font-[200]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            fugiat laudantium, voluptatibus nam consectetur enim laborum aut
            exercitationem quibusdam laboriosam porro iure atque impedit quas a
            omnis error. Quos sunt eum in similique dolores necessitatibus
            excepturi, aliquid ipsam aliquam laborum.
          </p>
        </div>
        <div className="div-2 flex flex-col items-start gap-6">
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
