import { Grand_Hotel, Poppins } from "next/font/google";
import Image from "next/image";

const grandHotel = Grand_Hotel({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function Date({ sesi }) {
  return (
    <section
      id="dates"
      className={`flex flex-col items-stretch py-12 bg-primary-300 ${poppins.className}`}
    >
      <h2
        data-aos="fade-down"
        className={`text-4xl text-center mb-6 ${grandHotel.className}`}
      >
        Rangkaian acara yang akan diselenggarakan
      </h2>

      {/* <div
        data-aos="fade"
        className="mx-5 mb-6 bg-center bg-cover bg-cover-dates h-52 rounded-xl"
      ></div> */}

      <div
        data-aos="fade-down"
        className="mx-5 bg-white drop-shadow rounded-xl"
      >
        {/* 1 Date Info */}
        <div data-aos="fade-left" className="flex flex-col items-stretch">
          <div className="flex items-center justify-between pt-8 pl-4 pr-6 mb-4">
            <div className="flex flex-col items-stretch">
              <h3 className="mb-2 text-xl font-medium text-primary-900">
                Rabu
              </h3>
              <div className="flex items-center mb-1">
                <p className="mr-2 text-3xl font-bold text-primary-900">27</p>
                <div className="flex flex-col">
                  <p className="text-lg text-primary-900">Desember 2023</p>
                  <p className="text-xs font-bold text-primary-900">
                    Pukul 09.00 s.d Selesai
                  </p>
                </div>
              </div>
              <Image
                src="/dates-divider-sm.svg"
                alt="akad nikah"
                width={210}
                height={4}
              />
              <p className="my-1 text-xs font-medium text-primary-900">
                KUA Wonosari Klaten
              </p>
              <p className="text-xs text-primary-900">
                Jl. Pakis - Daleman No.418, Dusun I, Bentangan,
                <br />
                Kec. Wonosari, Kabupaten Klaten, Jawa Tengah
              </p>
            </div>
            <Image
              src="/akad-nikah.svg"
              alt="akad nikah"
              width={25}
              height={60}
            />
          </div>

          <a
            href="https://maps.app.goo.gl/nKVv3WHHPyz21uoP7"
            target="_blank"
            className="block px-8 py-2 mx-auto text-xs transition border rounded-xl bg-primary-900 hover:bg-opacity-70 "
          >
            Buka Maps
          </a>
        </div>

        <Image
          data-aos="fade-down"
          src="/dates-divider.svg"
          alt="divider"
          width={600}
          height={30}
          className="px-4 my-6"
        />

        {/* 1 Date Info */}
        <div data-aos="fade-right" className="flex flex-col items-stretch mb-6">
          <div className="flex items-center justify-between pl-6 pr-4 mb-4">
            <Image src="/resepsi.svg" alt="resepsi" width={46} height={80} />
            <div className="flex flex-col items-end">
              <h3 className="mb-2 text-2xl font-medium text-end text-primary-900">
                Rabu
              </h3>
              <div className="flex items-center justify-end mb-1">
                <div className="flex flex-col">
                  <p className="text-xl text-primary-900 text-end">Mei 2023</p>
                  {sesi === "1" ? (
                    <p className="text-sm font-bold text-primary-900 text-end">
                      Pukul: 12.00 - 15.00 WIB
                    </p>
                  ) : (
                    <p className="text-sm font-bold text-primary-900 text-end">
                      Pukul: 12.30 - Selesai
                    </p>
                  )}
                </div>
                <p className="ml-2 text-4xl font-bold text-primary-900">14</p>
              </div>
              <Image
                src="/dates-divider-sm.svg"
                alt="akad nikah"
                width={210}
                height={4}
              />
              <p className="my-1 text-sm font-medium text-primary-900 text-end">
                Gedung Balai Desa Pandanan
              </p>
              <p className="text-sm text-primary-900 text-end">
                Jl. Wonosari - Pakis, Dusun II, Pandanan, <br />
                Kec. Wonosari, Kabupaten Klaten, Jawa Tengah
              </p>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/KKkf8P4dsTKNz59i9"
            target="_blank"
            className="block px-8 py-2 mx-auto text-xs transition border rounded-xl bg-primary-900 hover:bg-opacity-70 "
          >
            Buka Maps
          </a>
        </div>
      </div>
    </section>
  );
}
