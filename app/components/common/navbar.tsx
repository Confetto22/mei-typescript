import { Link } from "react-router";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";

const navLinks = [
  {
    ref: "Home",
    refLink: "/",
  },
  {
    ref: "About",
    refLink: "/about",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="navbar z-10 bg-transparent py-1 px-2 flex items-center justify-between absolute top-0 w-full">
        <Link to={"/"}>
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1745458633/homchapel/IMG-20250415-WA0017-removebg-preview_dg6k6e.webp"
            alt="mystery embassy international"
            className="logo max-w-[130px]"
          />
        </Link>
        <menu className=" items-center gap-5 hidden md:flex">
          {navLinks.map(({ ref, refLink }) => (
            <Link to={refLink} key={ref} className="text-white">
              {ref}
            </Link>
          ))}
        </menu>
        {/* <Link
          to={"#"}
          className="bg-[var(--second-color)] text-[.9rem] text-white py-[.6rem] px-[1.5rem] uppercase font-bold"
        >
          Give
        </Link> */}

        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-[var(--second-color)] text-[.9rem] text-white py-[.6rem] px-[1.5rem] uppercase font-bold cursor-pointer">
              Give
            </button>
          </DialogTrigger>
          <DialogContent className="md:min-w-[90vw] min-w-[80vw] max-w-[90vw] md:min-h-[85vh] ">
            <DialogDescription>
              <section className="join-us md:flex md:flex-row-reverse md:justify-between  text-black ">
                <div className=" md:w-[60%] px-9">
                  <div className="cover md:h-full  min-h-[60vh] flex flex-col gap-6 items-center justify-center text-center md:min-h-[80vh]">
                    <h2 className=" text-[1.5rem] md:text-[2rem] font-[500] uppercase">
                      Support Our Mission
                    </h2>
                    <p className="text-[.9rem] font-[200] leading-[1.7rem]">
                      Your generosity makes a difference! Every gift helps us
                      spread hope, serve our community, and share God's love
                      with those in need. Thank you for being a part of this
                      mission!
                    </p>

                    <p className="uppercase font-[500]">ways to give:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2  ">
                      <div className="md:border-r border-r-[#c5c5c578] md:pr-[2rem] min-h-[6rem] flex flex-col items-center justify-center gap-3">
                        <IoIosPhonePortrait className="text-[3.4rem]" />
                        <Link
                          to={"#"}
                          className="bg-[var(--second-color)] text-white uppercase px-6 py-3 hover:bg-transparent border border-[var(--second-color)] hover:text-[var(--second-color)] ease-in-out duration-300 flex items-center"
                        >
                          give online
                        </Link>
                        <p className="font-[300]">
                          Securely donate with a card or bank transfer.
                        </p>
                      </div>
                      <div className="md:pl-[2rem] min-h-[6rem] flex flex-col items-center justify-center gap-3">
                        <FaRegMessage className="text-[2.7rem]" />
                        <Link
                          to={"#"}
                          className="hover:bg-[var(--second-color)] hover:text-white uppercase px-6 py-3 bg-transparent border border-[var(--second-color)] text-[var(--second-color)] ease-in-out duration-300 flex items-center"
                        >
                          USSD shortcode
                        </Link>
                        <p className="font-[300]">
                          Securely donate with a card or bank transfer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:w-[40%] md:block">
                  <img
                    src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1748295776/homchapel/58-about-5_mjzap7.webp"
                    alt="mystery embassy international"
                    className="w-full h-full object-cover "
                  />
                </div>
              </section>
            </DialogDescription>

            {/* <DialogFooter>
              <button type="submit">Save changes</button>
            </DialogFooter> */}
          </DialogContent>
        </Dialog>
      </nav>
    </>
  );
};

export default Navbar;
