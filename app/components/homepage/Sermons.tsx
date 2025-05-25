import { useState } from "react";
import { allSermons } from "../common/sermons";
import { Link } from "react-router";

type Props = {};

const Sermons = (props: Props) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(
    allSermons[0].name
  );
  const [currentLink, setCurrentLink] = useState<string>(allSermons[0].link);
  const currentSermon = allSermons.find((vid) => vid.name === activeVideo);

  activeVideo === currentSermon?.name
    ? console.log("true")
    : console.log("false");

  return (
    <section className="sermons min-h-[90vh] bg-[var(--dark-blue)] px-6 py-24 flex flex-col items-center gap-[3rem]">
      <div className="sermons-illus flex flex-col gap-8 items-center md:flex-row-reverse justify-center">
        <div className="currentVideo w-full md:w-[60%]  min-h-[40vh] h-full">
          <iframe
            //   width="560"
            //   height="315"
            src={currentLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full min-h-[50vh] md:min-h-[60vh]"
            allowFullScreen
          ></iframe>
        </div>
        <div className="others md:w-[30%] flex flex-col items-center gap-7">
          <p className="underline text-white underline-offset-3">
            Other Sermons
          </p>

          <div
            className={`playlist flex flex-col gap-0 text-white cursor-pointer  max-h-[40vh] overflow-y-auto`}
          >
            {allSermons.map((sermon) => (
              <div
                className={`vid-card border border-none px-6 py-3 flex items-center gap-3 w-full ease-in duration-300 hover:bg-[#ffffff30] ${
                  activeVideo === sermon.name ? "active bg-[#ffffff30] " : ""
                }`}
                onClick={() => {
                  setActiveVideo(sermon.name);
                  setCurrentLink(sermon.link);
                }}
                key={sermon.name}
              >
                <div
                  className={`coverPicBox w-[90px] h-[50px] ${sermon.coverPic} bg-cover bg-center`}
                >
                  <div className="cover bg-[#00000076] w-full h-full"></div>
                </div>
                <p className="text-[.8rem] pr-9 font-[300] uppercase">
                  {sermon.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link
        to={"#"}
        className="watch-more text-white px-5 py-3 border-2 border-white bg-[#ffffff25] cursor-pointer ease-in-out duration-300 hover:bg-[#ffffff4b]"
      >
        watch more
      </Link>
    </section>
  );
};

export default Sermons;

// coverPic, link, title

// https://youtu.be/tHV8ZQQorbs?si=rOhkAjYuzPbh7xwS
// https://youtu.be/pov3Pd3sc3Y?list=PLtx_HdBvZrjxI3Igklks2KTKHoIit4c_P
