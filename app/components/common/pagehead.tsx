import { Link } from "react-router";
import { BiChevronRight } from "react-icons/bi";

type pageHeadTypes = {
  bgPic?: string;
  prevPage?: string;
  currPage?: string;
  prevLink?: string;
};

const PageHead = ({ bgPic, prevPage, currPage, prevLink }: pageHeadTypes) => {
  return (
    <div className={`pagehead ${bgPic} bg-cover bg-center bg-fixed`}>
      <div className="cover min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#000000e6] via-[#000000cc] to-[#001a36cc] backdrop-blur-sm">
        <nav className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-xl">
          <Link
            to={prevLink ?? "/"}
            className="text-[var(--theme-yellow)] hover:text-white text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            {prevPage}
          </Link>
          <BiChevronRight className="text-white/70 text-xl" />
          <span className="text-white text-lg font-light">{currPage}</span>
        </nav>
        {/* <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link
                  to={"/"}
                  className="text-[var(--second-color)] underline underline-offset-2 text-[1.2rem] hover:opacity-60 hover:underline-offset-4 ease-in-out duration-300 font-[500]"
                >
                  {prevPage}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[#fff] text-[1.2rem] font-[200]">
                {currPage}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb> */}
      </div>
    </div>
  );
};

export default PageHead;
