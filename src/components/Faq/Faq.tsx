import { faqs } from "@/lib/faqs";
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "../ui/accordion";

const Faq = () => {
  return (
    <section id="faq" className="w-full">
      <div className="mx-auto py-24 sm:py-32">
        <h2 className="text-2xl font-bold leading-10 tracking-tight">
          Frequently asked questions
        </h2>
        {faqs?.map((faq, idx) => (
          <div key={idx} className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={faq.question}>
                <AccordionTrigger className="hover:no-underline">
                  <span className="sr-only">Toggle Expanded</span>
                  <span className="text-base font-semibold leading-7">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
