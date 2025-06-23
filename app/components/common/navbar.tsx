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
      <nav className="navbar  bg-transparent  py-3 px-4 md:px-8 flex items-center justify-between relative z-[10] top-0 w-full bg-gradient-to-r from-[#521401] to-[#001933]">
        <Link to={"/"}>
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1745458898/homchapel/cropped_logo_ccdry3.png"
            alt="mystery embassy international"
            className="logo max-w-[80px] "
          />
        </Link>
        <menu className=" items-center gap-5 hidden md:flex">
          {topMenuLinks.map(({ ref, refLink }) => (
            <Link
              to={refLink}
              key={ref}
              className={`ease-in duration-300 hover:opacity-70 ${
                location === refLink
                  ? "text-[var(--theme-yellow)] underline"
                  : "text-white "
              }`}
            >
              {ref}
            </Link>
          ))}
        </menu>

        <Dialog>
          <DialogTrigger asChild className="">
            <button
              type="button"
              className=" bg-[var(--theme-yellow)] p-3 max-w-[60px] rounded-full cursor-pointer hover:bg-[#ab8300] ease-in duration-300"
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
              className="md:hidden text-white text-[2.4rem] cursor-pointer hover:opacity-80 ease-in duration-300"
            >
              <IoMenu />
            </button>
            {/* <Button variant="outline">Open</Button> */}
          </SheetTrigger>
          <SheetContent className="">
            <SheetHeader>
              <SheetTitle className="text-[1.2rem]">
                Mystery Embassy International
              </SheetTitle>
              <SheetDescription className="">
                <ul className="menuItems  flex flex-col h-[70vh] gap-5 items-start pt-5">
                  {navLinks.map((link) => (
                    <SheetClose asChild>
                      <Link
                        to={link.refLink}
                        className={` hover:text-[var(--second-color)] ease-in duration-300 text-[1.2rem] ${
                          location === link.refLink
                            ? "text-[var(--second-color)] underline"
                            : " text-[#3c3c3c]"
                        }`}
                      >
                        {link.ref}
                      </Link>
                    </SheetClose>
                  ))}
                </ul>
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4"></div>
            </div>
            <SheetFooter>
              {/* <SheetClose asChild>
                <button type="button">Save changes</button>
              </SheetClose> */}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
};

export default Navbar;
