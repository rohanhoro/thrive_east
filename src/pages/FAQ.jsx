import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "1. How do I book a service with Eastnest?",
    answer:
      "Just fill out the form on our website with your contact details and the service you're interested in. We'll get in touch within 24 hours.",
  },
  {
    question: "2. What locations do you currently operate in?",
    answer:
      "We operate in selected towns and cities. Reach out with your location, and we’ll confirm availability.",
  },
  {
    question: "3. Are your homestays verified and safe?",
    answer:
      "Yes, every property is personally verified for cleanliness and safety. You’ll also have access to local support.",
  },
  {
    question: "4. What kind of events do you manage?",
    answer:
      "We handle weddings, private parties, proposals, and music shows — including planning, styling, and coordination.",
  },
  {
    question: "5. Do you offer customized packages?",
    answer:
      "Absolutely. Whether it’s a short stay or a curated event, we tailor services to your budget and needs.",
  },
];
export default function FAQ() {
  return (
    <div className="bg-white">
      <div className=" max-w-2xl mx-auto px-4 py-10">
        <h2 className="text-3xl text-teal-900 font-bold text-center pb-2 mb-6 border-b-2 border-[#c2a661]">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-teal-900">
                {faq.question}
              </h3>
              <p className="mt-1">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
