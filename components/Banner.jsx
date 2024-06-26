import Image from "next/image";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/router";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Banner({ to, onOpen }) {
  const router=useRouter()
  const [isShow, setIsShow] = useState(true);
  const [isHide, setIsHide] = useState(false);
  const formattedName = to
    ? to
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : '';
    console.log("pathname",router.pathname,router?.query);
  return (
    <div
      className={`fixed z-50 top-0 right-0 bottom-0 left-0 transition ${
        isHide ? "hidden" : "block"
      } ${isShow ? "opacity-100" : "opacity-0"}`}
    >
      <div className="absolute z-10 min-w-full min-h-screen bg-black/20"></div>
      <div className="absolute z-0 min-w-full min-h-screen bg-center bg-cover bg-cover-welcome"></div>
      <section
        className={`absolute z-20 flex min-h-screen min-w-full flex-col justify-end items-center ${poppins.className}`}
      >
        <Image
          src="/title.png"
          alt="Pernikahan Salimah & Usamah"
          width={300}
          height={90}
        />
        <div className="items-center px-6 py-4 mx-6 mt-4 mb-16 border-2 border-white shadow-xl bg-black/30 shadow-black/60 rounded-xl">
          <p className="text-xs font-medium text-center text-white">
            Kepada Yth. Bpk/Ibu/Saudara/i 
          </p>
          {/* <p className="text-center font-bold mt-2 text-lg">
          {formattedName}
          </p> */}
          <p className="mt-4 mb-4 text-2xl font-bold text-center text-white animate-pulse">
            {formattedName}
          </p>
          <a
            href="#cover"
            onClick={() => {
              router.push(`/invitation?${router?.query?.to?`to=${router?.query?.to}`:''}`)
              // setIsShow(false);

              // setTimeout(function () {
              //   setIsHide(true);
              // }, 1000);

              // onOpen(true);
            }}
            className="block w-40 px-6 py-2 mx-auto text-xs font-semibold text-center text-black transition bg-white rounded-lg hover:bg-gray-300"
          >
            Buka Undangan
          </a>
        </div>
      </section>
    </div>
  );
}
