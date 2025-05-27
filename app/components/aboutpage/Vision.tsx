type visionProps = {
  id: number;
  title: string;
  description: string;
};

const allVisions: visionProps[] = [
  {
    id: 1,
    title: "Vision 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorem accusamus sit! Animi fugiat obcaecati cumque, excepturi ducimus aperiam beatae voluptates sunt id iure quas ex sequi, asperiores repudiandae tempora dolores similique voluptate, illo praesentium. Commodi nesciunt adipisci ducimus. Eveniet adipisci tempora perferendis! Cum corporis perferendis enim! Repellendus, fuga cumque!",
  },
  {
    id: 2,
    title: "Vision 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorem accusamus sit! Animi fugiat obcaecati cumque, excepturi ducimus aperiam beatae voluptates sunt id iure quas ex sequi, asperiores repudiandae tempora dolores similique voluptate, illo praesentium. Commodi nesciunt adipisci ducimus. Eveniet adipisci tempora perferendis! Cum corporis perferendis enim! Repellendus, fuga cumque!",
  },
  {
    id: 3,
    title: "Vision 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorem accusamus sit! Animi fugiat obcaecati cumque, excepturi ducimus aperiam beatae voluptates sunt id iure quas ex sequi, asperiores repudiandae tempora dolores similique voluptate, illo praesentium. Commodi nesciunt adipisci ducimus. Eveniet adipisci tempora perferendis! Cum corporis perferendis enim! Repellendus, fuga cumque!",
  },
];

const Vision = () => {
  return (
    <section className="px-7  py-32 min-h-[100vh] bg-[var(--dark-blue)] flex flex-col gap-16">
      <img
        src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp"
        alt="mystery embassy international"
        className="w-full aspect-video md:aspect-[17/4] object-center object-cover"
      />
      {allVisions.map((vision) => (
        <div
          className="single-vision md:flex md:flex-col md:items-center text-center"
          key={vision.id}
        >
          <h2 className="capitalize text-white font-[500] text-[1.6rem] md:text-[2.3rem]">
            {vision.title}
          </h2>
          <hr className="border-none h-[1px] w-full mb-1 mt-3 bg-[#a2a2a251]" />
          <p className="desc text-stone-300 font-[200] leading-[1.7rem] max-w-[800px]">
            {vision.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Vision;
