/* eslint-disable @next/next/no-img-element */
import React from "react";
import FeatureCard from "./FeatureCard";

function Features() {
    return (
        <div className="mt-20 lg:mt-0 ">
            <div className="grid md:grid-cols-2 gap-8 w-11/12 mx-auto max-w-md md:max-w-4xl">
                <FeatureCard
                    img="/images/icon-access-anywhere.svg"
                    alt="icon-access-anywhere"
                    heading="Access your files, anywhere"
                    text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
                />
                <FeatureCard
                    img="/images/icon-security.svg"
                    alt="Security you can trust"
                    heading="Security you can trust"
                    text="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
                />
                <FeatureCard
                    img="/images/icon-collaboration.svg"
                    alt="Real-time collaboration"
                    heading="Real-time collaboration"
                    text="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
                />
                <FeatureCard
                    img="/images/icon-any-file.svg"
                    alt="Store any type of file "
                    heading="Store any type of file "
                    text="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
                />
            </div>

            <div className="mt-24 p-4 grid place-items-center lg:grid-cols-2 lg:place-content-between gap-10 lg:gap-20 w-11/12 mx-auto max-w-6xl">
                <img
                    src="/images/illustration-stay-productive.png"
                    alt="stay-productive"
                />

                <div className="space-y-4">
                    <h2 className="font-bold lg:text-3xl lg:w-3/4">
                        Stay productive, wherever you are
                    </h2>

                    <p className="text-sm">
                        Never let location be an issue when accessing your
                        files. Fylo has you covered for all of your file storage
                        needs.
                    </p>
                    <p className="text-sm">
                        Securely share files and folders with friends, family
                        and colleagues for live collaboration. No email
                        attachments required.
                    </p>

                    <button className="flex items-center space-x-1 py-2 border-b border-accent-1 text-accent-1">
                        <span>See how Fylo works</span>
                        <span>
                            <img src="/images/icon-arrow.svg" alt="" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Features;
