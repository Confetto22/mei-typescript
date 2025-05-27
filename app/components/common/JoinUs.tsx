import { Link } from "react-router";

const JoinUs = () => {
  return (
    <section className="join-us md:flex md:flex-row md:justify-between  ">
      <div className="md:bg-none md:bg-[var(--dark-blue)] md:w-[50%] bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1748295776/homchapel/58-about-5_mjzap7.webp')] bg-cover bg-center ">
        <div className="cover md:h-full bg-gradient-to-r md:bg-transparent from-[#001d3dcd] md:bg-gradient-to-r md:from-[#51130000] md:to-[#00356e00] min-h-[60vh] to-[#000000c7] px-6 py-8 flex flex-col gap-6 items-center justify-center text-center md:min-h-[80vh]">
          <h2 className="text-white text-[1.5rem] md:text-[2rem] font-[500] uppercase">
            Join Us this sunday
          </h2>
          <p className="text-stone-200">
            Our community makes us unique. They have an energy that reverberates
            around them. Their mission in life is to ensure the wonder in the
            world is not overlooked.
          </p>
          <Link
            to={"/contact"}
            className=" uppercase text-white bg-[var(--second-color)] font-[400] px-4 py-2  hover:bg-[#fff] hover:text-[var(--second-color)] ease-in-out duration-300"
          >
            attend service
          </Link>
        </div>
      </div>
      <div className="hidden md:w-[50%] md:block">
        <img
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1748295776/homchapel/58-about-5_mjzap7.webp"
          alt="mystery embassy international"
          className="w-full h-full object-cover "
        />
      </div>
    </section>
  );
};

export default JoinUs;
