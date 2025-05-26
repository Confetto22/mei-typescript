// import { Link } from "react-router";
import PageHead from "~/components/common/pagehead";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="about-page pb-24">
      <PageHead
        bgPic="bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp')]"
        prevPage="Home"
        currPage="About"
        prevLink="/"
      />
      {/* <div className="pagehead bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp')] bg-cover bg-center ">
        <div className="cover min-h-[60vh] flex items-center justify-center bg-[#000000ca]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link
                    to={"/"}
                    className="text-[var(--second-color)] underline underline-offset-2 text-[1.2rem] hover:opacity-60 hover:underline-offset-4 ease-in-out duration-300 font-[500]"
                  >
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#fff] text-[1.2rem] font-[200]">
                  Breadcrumb
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div> */}
    </section>
  );
};

export default About;
