import { Link } from "react-router";

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
    <nav className="navbar z-10 bg-transparent py-2 px-9 flex items-center justify-between absolute top-0 w-full">
      <Link to={"/"}>
        <img
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1745458633/homchapel/IMG-20250415-WA0017-removebg-preview_dg6k6e.webp"
          alt="mystery embassy international"
          className="logo max-w-[130px]"
        />
      </Link>
      <menu className="flex items-center gap-5 hidden md:flex">
        {navLinks.map(({ ref, refLink }) => (
          <Link to={refLink} key={ref} className="text-white">
            {ref}
          </Link>
        ))}
      </menu>
      <Link
        to={"#"}
        className="bg-[var(--second-color)] text-white py-3 px-9 uppercase font-bold"
      >
        Give
      </Link>
      {/* <div className="navContacts">
        <p>+233(0)59-355-2731</p>
        <p>enockagyei1999@gmail.com</p>
      </div> */}
    </nav>
  );
};

export default Navbar;
