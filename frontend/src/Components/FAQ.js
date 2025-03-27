import React, { useState } from "react";

const faqs = [
  {
    question: "What does this device do?",
    answer:
      "This device detects smoke levels. If unsafe levels are detected, it sends an alert to the backend, which can notify users and authorities.",
  },
  {
    question: "How do I connect it to WiFi?",
    answer:
      "The device automatically scans for available WiFi networks. You need to enter your WiFi credentials during the initial setup to establish a connection.",
  },
  {
    question: "Can it work without the internet?",
    answer:
      "Yes, the device can operate offline and store data temporarily. However, an internet connection is required to send alerts and sync data with the backend.",
  },
  {
    question: "How is my email linked to the device?",
    answer:
      "Your email is registered when you purchase the device. The system links your email with the device’s unique MAC address for tracking and notifications.",
  },
  {
    question: "How can I check and pay my fines?",
    answer:
      "You can log in to our website with your registered email. Under the 'Fines' section, you’ll find details of any outstanding fines along with payment options.",
  },
  {
    question: "What happens if I don’t pay my fine?",
    answer:
      "If a fine remains unpaid for a certain period, additional penalties may apply. Repeated violations could lead to stricter actions depending on local regulations.",
  },
  {
    question: "Can I change my registered email or phone number?",
    answer:
      "Yes, you can update your contact details through your account settings or by reaching out to our support team.",
  },
  {
    question: "What should I do if the device is not connecting to WiFi?",
    answer:
      "Ensure that your WiFi network is 2.4GHz (as 5GHz is not supported), check the password, and restart the device. If issues persist, refer to the troubleshooting guide.",
  },
  {
    question: "Does the device support 5GHz WiFi?",
    answer: "No, the device only works with 2.4GHz WiFi networks for better range and stability.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="min-h-screen bg-gradient-to-b from-green-700 to-green-900 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-4xl font-bold text-center mb-6 text-green-800">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-green-500 pb-3">
              <button
                className="w-full text-left font-semibold text-lg p-4 text-white bg-gradient-to-r from-green-600 to-green-700 rounded-md shadow-md hover:from-green-700 hover:to-green-800 transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <p className="p-4 text-green-900 bg-green-100 rounded-md mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
