'use client'
import React, { useState } from "react";
import Header from "@/components/Home/SecondHeader";
import Footer from "@/components/Home/Footer1";
const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "How can I track my order?",
            answer:
                "Once your order has been shipped, you will receive an email with tracking details. You can use the tracking number on the carrier's website.",
        },
        {
            question: "Do you offer international shipping?",
            answer:
                "Yes, we do offer international shipping. Shipping costs will be calculated at checkout based on your location.",
        },
        {
            question: "How do I contact customer service?",
            answer:
                "You can reach our customer service team by email at support@bandage.com, or through our contact form on the website.",
        },
        {
            question: "What payment methods do you accept?",
            answer:
                "We accept all major credit cards, and bank transfers. Please refer to our payment page for more details.",
        },
        {
            question: "Is my payment information secure?",
            answer:
                "Yes, we use SSL encryption to protect your payment information. Your privacy and security are our top priorities.",
        },
        {
            question: "Can I modify my order after placing it?",
            answer:
                "Once your order is confirmed, we are unable to modify it. However, you can cancel the order within 1 hour of placing it and place a new one.",
        },
        {
            question: "What is your return policy?",
            answer:
                "You can return any unused items within 30 days for a full refund. Please ensure that the items are in original packaging.",
        },
        {
            question: "How long does shipping take?",
            answer:
                "Standard shipping usually takes 5-7 business days, depending on your location. Expedited shipping options are available at checkout.",
        },
        {
            question: "Do you offer gift cards?",
            answer:
                "Yes, we offer gift cards in various denominations. You can purchase them directly from our website.",
        },
        {
            question: "Can I cancel  my order?",
            answer:
                "Orders can only be canceled within 1 hour of purchase. After that, the order will be processed and shipped.",
        },
        {
            question: "How do I return an item?",
            answer:
                "To return an item, please visit our returns page and fill out the return form. You will receive a return label to ship the product back.",
        },
        {
            question: "Can I apply multiple discounts to my order?",
            answer:
                "Currently, we only allow one discount code per order. However, you can choose the best one available.",
        },
        {
            question: "Do you offer free shipping?",
            answer:
                "Yes, we offer free standard shipping on orders over $5000. Shipping fees apply for orders under $5000.",
        },
        {
            question: "Can I change my delivery address after placing an order?",
            answer:
                "Once your order is processed, we cannot change the delivery address. Please ensure your address is correct at checkout.",
        },
    ];

    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle between showing and hiding the answer
    };

    return (
        <div>
            <Header />
            <div className="flex flex-col justify-center items-center bg-gray-400 min-h-screen bg-gray-100 py-10">

                <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
                <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-6">
                            <div
                                onClick={() => toggleAnswer(index)}
                                className="flex items-center cursor-pointer"
                            >
                                <span className="text-xl mr-3">{openIndex === index ? "−" : "+"}</span>
                                <h2 className="text-xl font-semibold">{faq.question}</h2>
                            </div>
                            {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FAQPage;
