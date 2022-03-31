/* eslint-disable @next/next/no-img-element */
import React from "react";
import EarlyAccess from "./EarlyAccess";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-primary-3  mt-96 pb-10">
            <EarlyAccess />

            <div className="-mt-24 w-10/12 mx-auto mb-10">
                <img src="/images/logo.svg" alt="" />
            </div>

            <div className="w-10/12 mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
                <div className="flex items-start gap-2 max-w-xs">
                    <img src="/images/icon-location.svg" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae officia enim labore quas veniam voluptates
                        provident? Iure nesciunt dicta sit.
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <img src="/images/icon-phone.svg" alt="" />
                        <p>+1-543-123-4567</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <img src="/images/icon-email.svg" alt="" />
                        <p>example@fylo.com</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <span>About Us</span>
                    <span>jobs</span>
                    <span>Press</span>
                    <span>Blog</span>
                </div>

                <div className="flex flex-col gap-2">
                    <span>Contact Us</span>
                    <span>Terms</span>
                    <span>Privacy</span>
                </div>

                <div className="flex justify-center items-center gap-4">
                    <span className="p-2 border border-white rounded-full">
                        <FaFacebookF />
                    </span>
                    <span className="p-2 border border-white rounded-full">
                        <FaTwitter />
                    </span>
                    <span className="p-2 border border-white rounded-full">
                        <FaInstagram />
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
