import Image from "next/image";
import React from "react";

const Navbar = () => {
    return (
        <header className="flex py-6 px-6 items-center justify-between font-railway bg-primary-1">
            <span className="relative h-8 w-20 flex justify-center items-center">
                <Image
                    src={"/images/logo.svg"}
                    alt="fylo_logo"
                    objectFit="contain"
                    layout="fill"
                    priority
                />
            </span>

            <nav className="flex items-center space-x-4 text-sm tracking-wide">
                <span>Features</span>
                <span>Team</span>
                <span>Sign In</span>
            </nav>
        </header>
    );
};

export default Navbar;
