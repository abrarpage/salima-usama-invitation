import "add-to-calendar-button";

import Image from "next/image";
import { Poppins,Parisienne, } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
});

export default function End() {
  return (
    <div>
      <section
        className={`bg-cover-welcome bg-cover bg-center min-h-screen min-w-full  ${poppins.className}`}
      >
        
        <div className="absolute min-w-full min-h-screen backdrop-brightness-75"></div>
        
        <div className="absolute flex flex-col items-center justify-end min-w-full min-h-screen">
       <div className="space-y-3 text-center mb-10">
         <h3>Kami yang berbahagia</h3>
           <h1 className={`text-primary-300 text-2xl ${parisienne.className}`}>Salimah & Usamah</h1>
           <p className="text-lg">Atas kehadiran dan do’a restu dari bapak/ibu/saudara/saudari sekalian,
        kami mengucapkan Terima Kasih</p>
       </div>
          <p className="mb-4 text-4xl font-bold">With Love</p>
          <Image
          src="/title.png"
          alt="Pernikahan Salimah & Usamah"
          width={300}
          height={90}
          className="mb-20"
        />
     
        </div>
      </section>
    </div>
  );
}
