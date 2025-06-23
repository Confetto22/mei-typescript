import { BackgroundBeams } from "components/ui/background-beams";
import { BackgroundLines } from "components/ui/background-lines";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <BackgroundLines className="">
      <section className=" bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp')] bg-center bg-cover ">
        <div className="cover bg-[#000000da] w-full min-h-[100vh] text-white flex flex-col items-center justify-center px-8 py-12 text-center gap-5 z-[1000]">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1745458898/homchapel/cropped_logo_ccdry3.png"
            alt=""
            className="max-w-[200px]"
          />
          <h2 className="text-[2rem] ">404 - Page Not Found</h2>
          <p className="text-[1.4rem] font-[200]">
            The page you are looking for does not exist.
          </p>
          {/* <Link to={"/"} className="text-[var(--second-color)]">
            Go back Home
          </Link> */}
        </div>
      </section>
    </BackgroundLines>
  );
};

export default NotFound;
