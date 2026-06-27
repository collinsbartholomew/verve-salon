import localFont from "next/font/local";

export const outfit = localFont({
  src: [
    {
      path: "../../public/fonts/Outfit-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-outfit",
  display: "swap",
});

export const parkinsans = localFont({
  src: [
    {
      path: "../../public/fonts/Parkinsans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-parkinsans",
  display: "swap",
});
