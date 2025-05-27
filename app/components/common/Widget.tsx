import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";

const Widget = () => {
  return (
    <Link
      to={"https://wa.me/233244496968"}
      target="_blank"
      aria-label="Send Message Via WhatsApp"
    >
      <button className="whatsapp_widget" aria-label="WhatsApp Button">
        <FaWhatsapp />
      </button>
    </Link>
  );
};

export default Widget;
