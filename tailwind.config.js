module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    1: "hsl(217, 28%, 15%)",
                    2: "hsl(218, 28%, 13%)",
                    3: "hsl(216, 53%, 9%)",
                    4: "hsl(219, 30%, 18%)",
                },

                accent: {
                    1: "hsl(176, 68%, 64%)",
                    2: "hsl(198, 60%, 50%)",
                    3: "hsl(0, 100%, 63%)",
                },
            },

            fontFamily: {
                opensans: ["Open Sans", "sans-serif"],
                railway: ["Raleway", "sans-serif"],
            },

            backgroundImage: {
                curvymobile: "url('/images/bg-curvy-mobile.svg')",
                curvydesktop: "url('/images/bg-curvy-desktop.svg')",
            },
        },
    },
    plugins: [],
};
