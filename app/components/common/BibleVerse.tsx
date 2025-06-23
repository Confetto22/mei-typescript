import { useEffect, useState } from "react";

import axios from "axios";
import { motion } from "motion/react";

const URL = `https://beta.ourmanna.com/api/v1/get?format=json&order=random`;

const BibleVerse = () => {
  const [quote, setQuote] = useState("");
  const [verse, setVerse] = useState("");

  const [errors, setErrors] = useState<string | null>(null);

  const getVerse = async () => {
    try {
      const res = await axios.get(URL);
      const result = await res.data;

      setVerse(result.verse.details.reference);
      setQuote(result.verse.details.text);
    } catch (error) {
      console.log(error);
      setErrors((error as Error).message);
    }
  };
  useEffect(() => {
    getVerse();
  }, []);

  return (
    <div className="daily_verse  bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1717265027/homchapel/activity2_qn3w9v.webp')] bg-center bg-cover w-full">
      <div className="dailyverse_cover bg-gradient-to-r from-[#001a36c6] to-[#350d008f]  min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4 py-8 ">
        {errors ? (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", duration: 1, stiffness: 40 },
              opacity: { duration: 2 },
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="text-white text-center text-2xl md:text-3xl max-w-2xl"
          >
            Something went wrong. Please try again later. Make sure your
            internet is working
          </motion.p>
        ) : (
          <motion.q
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", duration: 1, stiffness: 40 },
              opacity: { duration: 2 },
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className=" verseoftheday text-white text-center text-2xl md:text-3xl max-w-2xl"
          >
            {quote}
          </motion.q>
        )}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", duration: 1, stiffness: 40 },
            opacity: { duration: 2 },
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          id="bibleverse"
          className="text-md md:text-xl text-[var(--second-color)] font-semibold uppercase"
        >
          {verse}
        </motion.p>
      </div>
    </div>
  );
};

export default BibleVerse;
