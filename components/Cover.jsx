import "add-to-calendar-button";

import Image from "next/image";
import { Cormorant, Alex_Brush, Poppins } from "next/font/google";
import CountdownTimer from "./CountdownTimer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
const cormorant = Cormorant({ subsets: ["latin"] });
const alexBrush = Alex_Brush({ subsets: ["latin"], weight: ["400"] });

export default function Cover() {
  const addGoogleCalendar = () => {
    // Tanggal acara (format: YYYYMMDDTHHMMSS)
    const startDate = '20231227T123000';  // 12:30 PM
    const endDate = '20231227T160000';    // 04:00 PM

    // Informasi acara
    const eventName = 'Walimatul Ursy Salimah & Usamah';
    const location = 'GOR Pandawa, Jl. Wonosari - Pakis, Dusun II, Pandanan, Kec. Wonosari, Kabupaten Klaten, Jawa Tengah 57473';

    // URL Google Calendar
    const googleCalendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?dates=${startDate}/${endDate}` +
      `&text=${encodeURIComponent(eventName)}` +
      `&location=${encodeURIComponent(location)}` +
      '&ctz=Asia/Jakarta';

    // Buka Google Calendar di tab baru
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section
      id="cover"
      className={`flex flex-col justify-between w-full min-h-screen bg-center bg-cover bg-cover-hero overflow-hidden ${poppins.className}`}
    >
      <div className="text-center">
        <h1 className="text-primary-200 text-4xl text-center mt-10">﷽</h1>
        <h3 className="text-primary-200 font-bold text-lg text-center mt-5">
          WE INVITE YOU TO CELEBRATE OUR WEDDING
        </h3>
        <div data-aos="fade-down" className="flex justify-between px-10 mt-12 ">
          <Image src="/cover-divider.svg" width={25} height={5} alt="divider" />
          <h3 className={`text-primary-200 text-2xl ${cormorant.className}`}>
            Pernikahan
          </h3>
          <Image src="/cover-divider.svg" width={25} height={5} alt="divider" />
        </div>

        <h1
          data-aos="fade"
          className={`text-primary-200 text-5xl text-center mt-5 ${alexBrush.className}`}
        >
          Salimah & Usamah
        </h1>

        <h3 data-aos="fade" className="mt-2 text-center text-primary-200">
          Rabu,27 Desember 2023
        </h3>
      </div>

      <div data-aos="fade" className="mb-14">
        {/* Countdown Timer */}
        <CountdownTimer targetTime={new Date("Dec 27, 2023 09:00:00")} />

        {/* <a
          href="https://calendar.google.com/calendar/u/0/r/eventedit?dates=20230514T070000/20230514T180000&ctz=Asia/Jakarta&text=Pernikahan+Ofi+%26+Wildan&location=Jl.+Anjasmoro+Gg.+1A,+RT/RW+05/01+Turirejo+Kec.+Lawang&uid=f4462101-061e-4976-9b9e-cc3f37b97a7c"
          target="_blank"
        > */}
          <button
          onClick={addGoogleCalendar}
          className="block px-6 py-2 mx-auto font-semibold transition border rounded-lg hover:bg-primary-900 hover:bg-opacity-20 border-primary-900 text-primary-900">
            Simpan Tanggal
          </button>
        {/* </a> */}
      </div>
    </section>
  );
}
