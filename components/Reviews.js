/* eslint-disable @next/next/no-img-element */
import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
    const data = [
        {
            user: {
                name: "Satish Patel",
                role: "Founder & CEO, Huddle",
                avatar: "/images/profile-1.jpg",
            },
            review: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        },
        {
            user: {
                name: "Bruce McKenzie",
                role: "Founder & CEO, Huddle",
                avatar: "/images/profile-2.jpg",
            },
            review: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        },
        {
            user: {
                name: "Iva Boyd",
                role: "Founder & CEO, Huddle",
                avatar: "/images/profile-3.jpg",
            },
            review: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        },
    ];

    return (
        <div className="w-10/12 mx-auto md:max-w-md lg:max-w-6xl mt-36">
            <div>
                <img
                    src="/images/bg-quotes.png"
                    alt="bg-quotes"
                    className="object-contain h-5 lg:h-10 lg:-ml-2"
                />
            </div>

            <div className="grid gap-6 place-content-center lg:grid-cols-3 lg:-mt-2">
                {data.map((rev, index) => (
                    <ReviewCard data={rev} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Reviews;
