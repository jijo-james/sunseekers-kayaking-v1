
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What level of kayaking experience do I need?",
      answer: "None at all! Our tours are designed for all experience levels, from complete beginners to seasoned paddlers. Our guides provide full instruction before setting out and are always nearby to assist if needed."
    },
    {
      question: "Is kayaking safe?",
      answer: "Yes, kayaking with us is very safe. All our guests wear life jackets, and our guides are certified in water rescue and first aid. We monitor weather conditions closely and only paddle in calm waters appropriate for your experience level."
    },
    {
      question: "What should I bring and wear?",
      answer: "We recommend wearing quick-dry clothing, a hat, sunglasses with a retention strap, and sandals or water shoes. Don't forget sunscreen! Bring a water bottle, a small towel, and a change of clothes for after the tour. We provide dry bags for your valuables."
    },
    {
      question: "How fit do I need to be to kayak?",
      answer: "Our tours are accessible to people of average fitness levels. Kayaking is a low-impact activity, and we take regular breaks. If you have specific health concerns, please let us know when booking."
    },
    {
      question: "What if I capsize my kayak?",
      answer: "While rare in our calm waters, our guides are trained to assist with re-entry. For beginners, we often use stable, sit-on-top kayaks that are almost impossible to flip and easy to re-board from the water."
    },
    {
      question: "Are there toilets available during the tour?",
      answer: "For shorter tours (2-3 hours), there are no facilities on the water. For longer expeditions, we plan stops at locations with facilities or bring portable options for remote areas."
    },
    {
      question: "Can I bring my camera or phone?",
      answer: "Yes! We provide waterproof cases and dry bags to keep your devices safe. Our guides can also take photos for you that we'll share after the tour."
    },
    {
      question: "What happens if it rains?",
      answer: "Light rain often doesn't affect our tours - paddling in a gentle Kerala shower can be magical! For heavy rain or storms, we'll reschedule your tour or offer a full refund."
    },
    {
      question: "Are your tours suitable for children?",
      answer: "Many of our tours are family-friendly! Children 6 and older can paddle in tandem kayaks with an adult. For younger children, we offer special family tours where they can ride in the middle section of a guide's kayak."
    },
    {
      question: "Do you offer multi-day kayaking trips?",
      answer: "Yes, we offer overnight and multi-day expeditions with camping or accommodation at waterside guesthouses. These tours include all equipment, meals, and experienced guides."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-ocean-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-sunset-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-ocean-800 text-lg">
            Everything you need to know before your kayaking adventure
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-ocean-200">
                <AccordionTrigger className="text-lg text-ocean-800 font-medium py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-ocean-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
