import React from "react";
import Image from "next/image";

const Hero = ({}) => {
    return (
        <div className="bg-primary-1">
            <div className="py-4 px-6 bg-curvymobile bg-no-repeat bg-bottom bg-contain lg:bg-none">
                <div className="relative w-full h-96 lg:h-[472px]">
                    <Image
                        src={"/images/illustration-intro.png"}
                        alt="intro"
                        layout="fill"
                        objectFit="contain"
                        priority
                    />
                </div>
            </div>

            <div className="bg-primary-2 pt-4 lg:pt-0 lg:py-36 py:4  lg:mt-10 lg:bg-primary-1 lg:bg-curvydesktop lg:bg-no-repeat lg:bg-top w-full lg:bg-cover">
                <div className="text-center space-y-4 lg:space-y-8 max-w-2xl w-11/12 mx-auto">
                    <h1 className="text-white text-2xl lg:text-4xl font-bold">
                        All your files in one secure location, accessible
                        anywhere.
                    </h1>

                    <p className="text-sm text-gray-300 lg:text-base md:px-20">
                        Fylo stores all your most important files in one secure
                        location. Access them wherever you need, share and
                        collaborate with friends family, and co-workers.
                    </p>

                    <button className="font-railway bg-gradient-to-r from-accent-1 to-accent-2 px-8 py-3 rounded-full w-64 font-semibold tracking-widest hover:from-accent-2 transition duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
