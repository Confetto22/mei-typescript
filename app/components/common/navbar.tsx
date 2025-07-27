import { Link, useLocation } from "react-router";
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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { IoMenu } from "react-icons/io5";

const navLinks = [
  {
    ref: "Home",
    refLink: "/",
  },
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

const topMenuLinks = navLinks.slice(0, 5);

const Navbar = () => {
  const location = useLocation().pathname;
  // console.log(location);
  return (
    <>
      <nav className="navbar fixed top-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-[#521401]/90 to-[#001933]/90 py-4 px-4 md:px-8 flex items-center justify-between border-b border-white/10 shadow-lg transition-all duration-300">
        <Link to={"/"} className="transition-transform duration-300 hover:scale-105">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1745458898/homchapel/cropped_logo_ccdry3.png"
            alt="mystery embassy international"
            className="logo max-w-[80px] drop-shadow-lg"
          />
        </Link>
        <menu className="items-center gap-8 hidden md:flex">
          {topMenuLinks.map(({ ref, refLink }) => (
            <Link
              to={refLink}
              key={ref}
              className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                location === refLink
                  ? "text-[var(--theme-yellow)] bg-white/10 shadow-lg"
                  : "text-white hover:text-[var(--theme-yellow)] hover:bg-white/5"
              } before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-[var(--theme-yellow)] before:transition-all before:duration-300 hover:before:w-full`}
            >
              {ref}
            </Link>
          ))}
        </menu>

        <Dialog>
          <DialogTrigger asChild className="">
            <button
              type="button"
              className="bg-[var(--theme-yellow)] p-3 max-w-[60px] rounded-full cursor-pointer hover:bg-[#ab8300] transition-all duration-300 hover:scale-110 hover:shadow-xl shadow-lg"
            >
              <img
                src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1748369654/homchapel/money_1_u8oyip.png"
                alt="give button"
                className=""
              />
            </button>
          </DialogTrigger>
          <DialogContent className="md:min-w-[90vw] min-w-[80vw] max-w-[90vw] md:min-h-[85vh] ">
            <DialogDescription>
              <section className="join-us md:flex md:flex-row-reverse md:justify-between  text-black ">
                <div className=" md:w-[60%] md:px-9">
                  <div className="cover md:h-full  min-h-[60vh] flex flex-col gap-3 items-center justify-center text-center md:min-h-[80vh]">
                    <h2 className=" text-[1.3rem] md:text-[2rem] font-[500] uppercase">
                      Support Our Mission
                    </h2>
                    <p className="text-[.8rem] font-[200] md:leading-[1.7rem]">
                      Your generosity makes a difference! Every gift helps us
                      spread hope, serve our community, and share God's love
                      with those in need. Thank you for being a part of this
                      mission!
                    </p>

                    <p className="uppercase font-[500]">ways to give:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[.8rem]  md:gap-y-[2rem]">
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
                          to={"tel:*800*80*547#"}
                          className="hover:bg-[var(--second-color)] hover:text-white uppercase px-6 py-3 bg-transparent border border-[var(--second-color)] text-[var(--second-color)] ease-in-out duration-300 flex items-center"
                        >
                          USSD
                        </Link>
                        <p className="font-[300]">
                          Securely donate with our USSD shortcode
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

        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              className="md:hidden text-white text-2xl cursor-pointer hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
            >
              <IoMenu />
            </button>
          </SheetTrigger>
          <SheetContent className="bg-gradient-to-br from-[var(--dark-blue)] via-[#001a36] to-[#000d1a] border-l border-white/10 backdrop-blur-xl">
            <SheetHeader className="border-b border-white/10 pb-6">
              <SheetTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme-yellow)] to-white">
                Mystery Embassy
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-2 pt-8">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.ref}>
                  <Link
                    to={link.refLink}
                    className={`group relative px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 ${
                      location === link.refLink
                        ? "text-[var(--theme-yellow)] bg-white/10 shadow-lg"
                        : "text-white hover:text-[var(--theme-yellow)] hover:bg-white/5"
                    } before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[var(--theme-yellow)] before:scale-y-0 before:transition-transform before:duration-300 hover:before:scale-y-100`}
                  >
                    {link.ref}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
};

export default Navbar;
