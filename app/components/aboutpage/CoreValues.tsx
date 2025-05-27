// import { Accordion } from "@radix-ui/react-accordion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Link } from "react-router";

type faqTypes = {
  question: string;
  answer: string;
  phone?: string;
  email?: string;
  phoneLink?: string;
  emailLink?: string;
  locationLink?: string;
};

const faqValues: faqTypes[] = [
  {
    question: "who are we?",
    answer:
      "We are welcoming and faith-filled community dedicated to worship, service, and spiritual growth. Our mission is to share God's love, strengthen our faith, and serve our local community with compassion.",
  },
  {
    question: "where is the church located?",
    answer: "We are located at 123 Mystery St, Accra, Ghana.",
    locationLink: "https://goo.gl/maps/123MysteryStAccra",
  },
  {
    question: "what do we believe?",
    answer:
      "We believe in the Gospel of Jesus Christ and the power of God's love to transform lives. Our church upholds the authority of the Bible, the importance of prayer, and the calling to live out our faith through worship, fellowship, and service.",
  },
  {
    question: "what can i expect when i visit?",
    answer:
      "You’ll find a warm and friendly atmosphere, uplifting worship, and a message that speaks to your everyday life. Whether you’re new to church or have been attending for years, you are welcome here just as you are.",
  },
  {
    question: "how can i connect with the church?",
    answer:
      "We would love to connect with you! You can visit us in person, call us, or email us. You can also follow us on social media and sign up for our newsletter to stay updated on events and services.",
    phone: "+233(0) 244-496-968",
    phoneLink: "tel:+233244496968",
    email: "info@mysteryembassy.com",
    emailLink: "mailto:info@mysteryembassy.com",
  },
];

const CoreValues = () => {
  return (
    <section className="core-values px-6 pb-12 pt-20">
      <div className="flex flex-col gap-4 items-center text-center">
        <h2 className="text-[1.8rem] md:text-[2.6rem] uppercase font-[600]">
          Our Core Values
        </h2>
        <p className="text-[.9rem] md:max-w-[600px]">
          We believe in fostering a diverse and inclusive community where
          everyone feels valued and respected. Our core values guide our actions
          and decisions, ensuring that we create a positive impact in the lives
          of our students and their families.
        </p>
      </div>
      <div className="accordions max-w-[900px] mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqValues.map((faq, index) => (
            <AccordionItem value={index.toString()} key={index}>
              <AccordionTrigger className=" cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer} <br />
                {faq.locationLink && (
                  <Link to={faq.locationLink || "#"}>{faq.locationLink}</Link>
                )}
                {faq.phone && faq.email ? (
                  <p className="mt-2">
                    <Link to={faq.phoneLink || "#"}>{faq.phone}</Link> <p>or</p>
                    <Link to={faq.emailLink || "#"}>{faq.email}</Link>
                  </p>
                ) : null}
              </AccordionContent>
            </AccordionItem>
          ))}

          {/* <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem> */}
        </Accordion>
      </div>
    </section>
  );
};

export default CoreValues;
