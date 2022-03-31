/* eslint-disable @next/next/no-img-element */
import React from "react";

function FeatureCard({ img, heading, text, alt }) {
    return (
        <div className="grid place-items-center text-center p-4">
            <img src={img} alt={alt} className="object-contain" />

            <div className="mt-6 space-y-3">
                <h2 className="font-bold text-xl">{heading}</h2>
                <p className="text-sm tracking-normal px-1">{text}</p>
            </div>
        </div>
    );
}

export default FeatureCard;
