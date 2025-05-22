const gridPics = [
  "https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0651_vl9kpf.webp",
  "https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054648/homchapel/DSC_0136_jmvd9o.webp",
  "https://res.cloudinary.com/dv9aqxptd/image/upload/v1725888345/homchapel/DSC_7490_dmlazf.webp",
  "https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054648/homchapel/DSC_0195_d2mvbj.webp",
  "https://res.cloudinary.com/dv9aqxptd/image/upload/v1733016008/homchapel/DSC_4174_olquhm.webp",
  "https://res.cloudinary.com/dv9aqxptd/image/upload/v1733017721/homchapel/DSC_5010_lh1wfh.webp",
];

const Picsgrid = () => {
  return (
    <section className="min-h-[25vh] ">
      <div className="grid-pics grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
        {gridPics.map((image) => (
          <img
            src={image}
            alt="mystery embassy international"
            className="aspect-[8/7] md:aspect-[8/7] object-cover object-top"
          />
        ))}
      </div>
    </section>
  );
};

export default Picsgrid;
