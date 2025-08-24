"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const faqs = [
  {
    question: "What types of transportation do you offer for school trips?",
    answer:
      "We offer a variety of safe and reliable transportation options tailored to your school's needs. This includes modern, well-maintained buses of various sizes, from minibuses for smaller groups to full-sized coaches for larger classes. All our vehicles are equipped with seat belts and are driven by experienced, background-checked drivers. We can also arrange for accessible transportation for students with special needs.",
  },
  {
    question: "How do you ensure the safety of students during travel?",
    answer:
      "All our drivers undergo thorough background checks and possess valid commercial driver's licenses. Our vehicles are regularly inspected and maintained to the highest safety standards.  All our vehicles are equipped with GPS tracking, allowing us to monitor their location in real-time. Our drivers are trained in emergency procedures and first aid.  Mandatory seat belt usage is enforced for all passengers.",
  },
  {
    question: "Can you provide transportation for students with special needs?",
    answer:
      "Absolutely. We are committed to providing the accessible transportation for all students. We can accommodate students with disabilities by providing vehicles equipped with wheelchair lifts, ramps, and other necessary accommodations. Please inform us of any specific needs during the booking process so we can ensure the appropriate vehicle and support are provided.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:px-20 pt-10 ">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#FFF5E4] p-5 lg:px-10 rounded-lg text-justify shadow text-sm md:text-md lg:text-xl"
          >
            <button className={`flex gap-3  justify-between text-[#453069] w-full text-justify  font-medium ${openIndex === index ? `items-start` : `items-center`} `}>
              <div className="">
                <h1 className={openIndex === index ? `hidden` : ``}>
                  {faq.question}
                </h1>
                <div
                  className={`text-gray-600 overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-100 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
              <div className="">
              <FaPlus
                onClick={() => toggleFAQ(index)}
                className={`h-5 w-5 text-primary transition-transform duration-200 ${
                  openIndex === index ? "rotate-135" : ""
                }`}
              />
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
