/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            padding: "1.5rem",
            center: true,
            // default breakpoints but with 40px removed
            screens: {
                sm: "600px",
                md: "728px",
                lg: "984px",
                xl: "1074px",
                "2xl": "1074px",
            },
        },
        extend: {
            backgroundImage: {
                // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                // "gradient-conic":
                //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "banner-img": "url('/images/banner.png')",
                // "section-gradient": "radial-gradient(closest-side at 87% 100%, #2F3C9E 0%, #253084 12%, #192264 30%, #10194D 47%, #0B133F 63%, #0A113B 78%, #000020 100%)",
                'section-gradient': 'linear-gradient(to right, #000020,#0e1646,#121b53)',
                'line':"url('/images/bg-line-left.svg')",
                'banner-gradient': 'linear-gradient(to right, #000020,#0B133F,#0c1543)',
            },
            colors: {
                "dark-blue": "#141C53",
                green: "#63c593",
                dark: "#04092F",
                "light-pink": "#EFCED9",
                "light-green": "#48D376",
                "lighter-green": "#B7FFCF",
            },
            fontSize: {
                // 13px base
                // '13':'1rem',
                // '15':'1.1538rem',
                // '16':'1.231rem',
                // '18':'1.3846rem',
                // '22':'1.69rem',
                // '37':'2.846rem',
                // '41':'3.1538rem',
                // '51':'3.923rem',
                // 16px base
                13: "0.8125rem",
                15: "0.9375rem",
                16: "1rem",
                18: "1.125rem",
                22: "1.375rem",
                37: "2.3125rem",
                41: "2.5625rem",
                51: "3.1875rem",
            },
        },
    },
    plugins: [],
};
