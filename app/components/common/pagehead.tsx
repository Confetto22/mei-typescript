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
    <div className={`pagehead ${bgPic}  bg-cover bg-center `}>
      <div className="cover min-h-[60vh] flex items-center justify-center bg-[#000000ca]">
        <Link
          to={prevLink ?? "/"}
          className="text-[var(--second-color)] underline underline-offset-2 text-[1.2rem] hover:opacity-60 hover:underline-offset-4 ease-in-out duration-300 font-[500]"
        >
          {prevPage}
        </Link>
        <span>
          <BiChevronRight className="text-[#a8a8a8dc] text-[1.2rem] inline-block mx-2" />
        </span>

        <p className="text-[#fff] text-[1.2rem] font-[200]">{currPage}</p>
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
