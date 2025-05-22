// import CountDown from "~/components/common/countdown/countdown";
import Footer from "~/components/common/footer";
import Picsgrid from "~/components/common/picsgrid";
import HeroCard from "~/components/homepage/herocard";
import UpcomingEvts from "~/components/homepage/upcomingevts";
import WeAre from "~/components/homepage/weare";

export default function Home() {
  return (
    <section className="homepage relative">
      <HeroCard />
      <section className="welcome gap-7 bg-[var(--main-color)] min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
        <h2 className="font-extrabold uppercase md:text-[3rem] md:leading-11 max-w-[600px] text-[2.2rem] leading-9">
          Welcome to mystery embassy international
        </h2>
        <p className="font-[400] text-[1rem] max-w-[900px]">
          We are a warm and welcoming community of believers committed to
          growing in faith, serving others, and sharing the love of Christ.
          Whether you&apos;re exploring faith for the first time or looking for
          a church to call home, we invite you to join us and experience the
          love and fellowship of our congregation.
        </p>
      </section>
      <WeAre />
      <UpcomingEvts />
      {/* <CountDown month={5} day={31} year={2025} /> */}
      {/* <Picsgrid />
      <Footer /> */}
    </section>
  );
}
