"use client";

import React, { useRef, useState } from "react";
import { faqs } from "@/data/faq";
import { IconPlus, IconMinus } from "../icons";
import Style from './Accordion.module.css';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    const contentHeight = useRef();
    return (
        <div className="wrapper border-b border-[#c7c0c0] last:border-b-0">
            <button
                className={`question-container flex items-center justify-between text-18 font-bold py-5 w-full`}
                onClick={onClick}
            >
                {question}
                <span
                    className={`transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-180" : ""
                    }`}
                >
                    {isOpen ? <IconMinus /> : <IconPlus />}
                </span>
            </button>

            <div
                ref={contentHeight}
                className={`answer-container overflow-hidden transition-[height] duration-300 ease-in-out ${Style.content}`}
                style={
                    isOpen
                        ? { height: contentHeight.current.scrollHeight }
                        : { height: "0px" }
                }
            >
                <div
                    className="answer-content py-5"
                    dangerouslySetInnerHTML={{ __html: answer }}
                ></div>
            </div>
        </div>
    );
};

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="container">
            {faqs.map((item, index) => (
                <AccordionItem
                    key={index}
                    question={item.q}
                    answer={item.a}
                    isOpen={activeIndex === index}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
