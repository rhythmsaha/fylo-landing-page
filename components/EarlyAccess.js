import React from "react";

const EarlyAccess = () => {
    return (
        <div className="p-8 lg:px-20 lg:py-16 w-11/12 max-w-3xl mx-auto bg-primary-1 shadow-lg shadow-primary-3 rounded-lg space-y-8 lg:space-y-12 -translate-y-2/4">
            <div className="text-center">
                <h2 className="font-bold">Get early access today</h2>
                <p className="text-sm mt-2">
                    It only takes a minute to sign up and our free starter tier
                    is extremely genereous. If you have any questions, our
                    support team would be happy to help you.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
                <input
                    type="text"
                    className="w-full outline-none border-none px-4 py-4 lg:py-3 rounded-full text-black"
                />
                <button className="whitespace-nowrap px-4 py-4 lg:py-3 bg-gradient-to-r from-accent-1 to-accent-2 hover:from-accent-2 transition duration-300 rounded-full font-bold font-railway text-sm tracking-widest w-full lg:w-80 lg:tracking-normal">
                    Get Started For Free
                </button>
            </div>
        </div>
    );
};

export default EarlyAccess;
