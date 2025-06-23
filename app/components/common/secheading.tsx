import { motion } from "motion/react";

type SecHeadingProps = {
  subhead: string;
  mainhead: string;
  substyle: string;
  mainstyle: string;
  divstyle: string;
};

const SecHeading = ({
  subhead,
  mainhead,
  substyle,
  mainstyle,
  divstyle,
}: SecHeadingProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        y: { type: "spring", duration: 1, stiffness: 40 },
        opacity: { duration: 2 },
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className={`secheading flex flex-col ${divstyle}`}
    >
      <p className={`subhead font-semibold uppercase px-2 ${substyle}`}>
        {subhead}
      </p>
      <p className={`mainhead ${mainstyle} uppercase`}>{mainhead}</p>
    </motion.div>
  );
};

export default SecHeading;
