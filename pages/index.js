import Head from "next/head";

import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <Navbar />
                <Hero />
                <Features />
                <Reviews />
                <Footer />
            </div>
        </>
    );
}
