import Image from "next/image";
import React from "react";

const Navbar = () => {
    return (
        <header className="flex py-6 px-6 lg:py-12 lg:px-12 items-center justify-between font-railway bg-primary-1">
            <span className="relative h-8 lg:h-16 w-20 lg:w-32 flex justify-center items-center">
                <Image
                    src={"/images/logo.svg"}
                    alt="fylo_logo"
                    objectFit="contain"
                    layout="fill"
                    priority
                />
            </span>

            <nav className="flex items-center space-x-4 text-sm lg:text-lg lg:space-x-10 tracking-wide">
                <span className="hover:underline cursor-pointer">Features</span>
                <span className="hover:underline cursor-pointer">Team</span>
                <span className="hover:underline cursor-pointer">Sign In</span>
            </nav>
        </header>
    );
};

export default Navbar;
