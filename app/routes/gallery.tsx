import { LayoutGrid } from "components/ui/layout-grid";
import { galleryImages } from "~/components/common/gallery";

const Gallery = () => {
  return (
    <section className="h-screen ">
      <LayoutGrid cards={galleryImages} />
    </section>
  );
};

export default Gallery;
