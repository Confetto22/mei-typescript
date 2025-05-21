import { Link } from "react-router";

type pageHeadProps = {
  pageName: any;
  prevPage: string;
  currentPage: any;
  refLink?: string;

  bgPic: string;
  //   pageIntro: string;
};

const PageHead = ({
  pageName,
  prevPage,
  currentPage,
  refLink,
  bgPic,
}: //   pageIntro,
pageHeadProps) => {
  return (
    <div className={`page_head min-h-[45vh] ${bgPic} bg-cover bg-center`}>
      <div className="cover bg-[#000000b0] w-full h-full flex flex-col items-center justify-center px-8 md:py-24 py-16 gap-0 min-h-[45vh]">
        <h2 className="page_name text-white text-[1.5rem] md:text-[3rem] capitalize">
          {pageName}
        </h2>
        <p className="page_tracker tracking-wide text-[1.5rem] md:text-[3.2rem] capitalize text-[var(--main-color)]">
          <Link
            to={refLink}
            className=" hover:text-[var(--theme-yellow)] text-[1.2rem] ease-in-out duration-300 font-semibold text-[var(--second-color)]"
          >
            {prevPage}
          </Link>
          <span className="text-[.8rrem]">{" > "}</span>
          {currentPage}
        </p>
        {/* <p className="text-gray-400 max-w-[450px] md:max-w-[600px] text-center text-sm md:text-base">
          {pageIntro}
        </p> */}
      </div>
    </div>
  );
};

export default PageHead;
