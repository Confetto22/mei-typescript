const HeroCard = () => {
  return (
    <section className="herocard relative h-screen w-full bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp')] bg-cover bg-center">
      <div className="cover min-h-screen bg-gradient-to-r from-[#001a36c6] to-[#350d008f] p-6 md:py-16 md:px-8 font-[var(--main-font)] flex flex-col justify-center items-center md:text-left text-center md:items-start gap-6">
        <div className="churchname text-[var(--main-color)] font-bold text-[2.2rem] md:text-[4rem] leading-[2.4rem] md:leading-[4.2rem] uppercase">
          <p>
            <b>m</b>ystery
          </p>
          <p>
            <b>e</b>mbassy
          </p>
          <p className="text-[var(--theme-yellow)]">
            <b>i</b>nternational
          </p>
        </div>
        <p className="capitalize text-[1rem] font-[200] text-white">
          bridging the gap between divinity & humanity
        </p>
        <div className="heroBtns flex flex-col items-center md:items-start gap-5 text-white">
          <button className="bg-[var(--second-color)] py-4 px-5 uppercase font-bold text-[.8rem]">
            join us this sunday
          </button>
          <button className="text-[var(--text-color)] bg-white py-3 px-5 font-bold uppercase text-[.8rem]">
            watch live
          </button>
        </div>
      </div>
      <div className="bg-[#fff] px-4 absolute bottom-0 right-0   rounded-tl-[6rem] flex items-center flex-col justify-center  gap-1 max-w-[460px] py-5 text-[#242424]">
        <span className="text-[#fff] bg-[var(--second-color)]  font-bold px-2 text-[1rem] md:text-[1.3rem]">
          07:30 AM
        </span>
        <p className="text text-[1.7rem] font-extrabold uppercase md:text-[3rem] text-black">
          Sundays
        </p>
        <p className="capitalize ">join us & be blessed</p>
      </div>
    </section>
  );
};

export default HeroCard;
