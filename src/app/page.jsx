import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";

export const metadata = {
  title: "Aldiipratama | Home",
  description: "Page Home in my Portfolio",
  icons: {
    icon: "/assets/img/favicon.ico",
    apple: "/assets/img/apple-touch-icon.png",
    other: [
      {
        url: "/assets/img/favicon-16x16.png",
        rel: "icon",
      },
      {
        rel: "icon",
        url: "/assets/img/favicon-32x32.png",
      },
      {
        rel: "icon",
        url: "/assets/img/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        url: "/assets/img/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "assets/img/site.webmanifest",
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}
