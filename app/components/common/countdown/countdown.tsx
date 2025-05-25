import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import "../../styles/CountDown.css";
import "./countdown.css";

type countDownKeys = {
  month: string; // e.g. "May"
  day: string; // e.g. "25"
  year: string; // e.g. "2025"
};

const CountDown = ({ month, day, year }: countDownKeys) => {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    const countDownDate = new Date(
      `${month} ${day}, ${year} 18:00:00`
    ).getTime();

    intervalRef.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance <= 0) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setTimerDays(0);
        setTimerHours(0);
        setTimerMinutes(0);
        setTimerSeconds(0);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [month, day, year]);

  return (
    <div className="countdouwn_box">
      <div className="countdown_cover">
        <div className="countdown_value">
          <p className="countdown_name ">Days</p>
          <p className="">{`${
            timerDays < 10 && timerDays > 0 ? 0 : ""
          }${timerDays}`}</p>
        </div>
        <span className="colon ">:</span>
        <div className="countdown_value">
          <p className="countdown_name ">Hours</p>
          <p className="">{`${
            timerHours < 10 && timerHours > 0 ? 0 : ""
          }${timerHours}`}</p>
        </div>
        <span className="colon">:</span>
        <div className="countdown_value">
          <p className="countdown_name ">Minutes</p>
          <p className="">{`${
            timerMinutes < 10 && timerMinutes > 0 ? 0 : ""
          }${timerMinutes}`}</p>
        </div>
        <span className="colon ">:</span>
        <div className="countdown_value">
          <p className="countdown_name ">Seconds</p>
          <p className="">{`${
            timerSeconds < 10 && timerSeconds > 0 ? 0 : ""
          }${timerSeconds}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
