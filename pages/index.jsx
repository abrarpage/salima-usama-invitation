import NavMenu from "@/components/NavMenu";
import Gallery from "@/components/Gallery";
import Banner from "@/components/Banner";
import Wishes from "@/components/Wishes";
import Brides from "@/components/Brides";
import Cover from "@/components/Cover";
import Date from "@/components/Date";
import Gift from "@/components/Gift";
import End from "@/components/End";
import Head from "next/head";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

// Toastify CSS
import "react-toastify/dist/ReactToastify.css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Maps from "@/components/Maps";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function Home() {
  const [audio, setAudio] = useState(null);
  const [isPlay, setIsPlay] = useState(true);
  const [isPlayerShow, setIsPlayerShow] = useState(false);

  const playAudio = (isPlay) => {
    if (isPlay) {
      audio?.play();
      setIsPlay(true);
      return;
    }

    audio?.pause();
    setIsPlay(false);
  };

  const handleScroll = () => {
    const position = window.scrollY;

    if (position > 844) {
      setIsPlayerShow(true);
    } else {
      setIsPlayerShow(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
    });

    setAudio(new Audio("/music/tulus.mp3"));

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();
  const { to, sesi } = router.query;

  return (
    <div className={`${poppins.className} text-white`}>
      <Head>
        <title>Salimah & Usamah </title>
        {/* <meta
          name="description"
          content="Kami memohon doa restu dari Bapak/Ibu/Saudara/(i)"
        /> */}
        <meta property="og:title" content="Salimah & Usamah" />
        {/* <meta
          property="og:url"
          content="https://wedding-ofi-wildan.ajakanonline.com/"
        /> */}
        {/* <meta property="og:description" content="Kami memohon doa restu dari Bapak/Ibu/Saudara/(i)" /> */}
        {/* <meta
          property="og:image"
          content="https://wildan-ofi-wedding.vercel.app/img/thumb.jpg"
        /> */}
        <meta property="og:type" content="wedding" />
      </Head>
      {/* BANNER */}
      <Banner to={to} onOpen={playAudio} />
      {/* NAV MENU */}
      {/* <NavMenu /> */}
      {/* PLAYER */}
   
    </div>
  );
}
