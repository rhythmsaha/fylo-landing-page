/* eslint-disable @next/next/no-img-element */
import React from "react";

const ReviewCard = ({ data }) => {
    return (
        <div className="bg-primary-4 p-10 space-y-6 shadow-lg shadow-primary-3 rounded">
            <div className="text-xs sm:text-sm">{data.review}</div>

            <div className="flex items-center space-x-2">
                <img
                    src={data.user?.avatar}
                    alt={data.user?.name}
                    className="h-8 w-8 rounded-full"
                />
                <div className="text-xs">
                    <h2 className="font-bold">{data.user?.name}</h2>
                    <span className="text-gray-400">{data.user?.role}</span>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
