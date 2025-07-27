import { LayoutGrid } from "components/ui/layout-grid";
import { galleryImages } from "~/components/common/gallery";

const Gallery = () => {
  return (
    <section className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--dark-blue)] to-[var(--second-color)] mb-4">
            Gallery
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore moments of worship, fellowship, and community through our photo gallery.
          </p>
        </div>
        <LayoutGrid cards={galleryImages} />
      </div>
    </section>
  );
};

export default Gallery;
