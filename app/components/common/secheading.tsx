const SecHeading = ({ subhead, mainhead, substyle, mainstyle, divstyle }) => {
  return (
    <div className={`secheading flex flex-col ${divstyle}`}>
      <p className={`subhead font-semibold uppercase px-2 ${substyle}`}>
        {subhead}
      </p>
      <p className={`mainhead ${mainstyle} uppercase`}>{mainhead}</p>
    </div>
  );
};

export default SecHeading;
