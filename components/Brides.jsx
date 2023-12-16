import { Grand_Hotel, Parisienne, Poppins } from "next/font/google";
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

export default function Brides() {
  return (
    <section
      id="brides"
      className="flex flex-col items-center py-12 bg-primary-900"
    >
      <h2
        data-aos="fade-down"
        className={`text-4xl text-center mb-4 ${grandHotel.className}`}
      >
        Pasangan Mempelai
      </h2>
      <p
        data-aos="fade-down"
        className={`px-4 text-xs font-light text-center ${poppins.className}`}
      >
        Dengan Memohon Rahmat Dan Ridho Allah SWT Yang Telah Menciptakan
        Makhluk-Nya Secara Berpasang-Pasangan, Kami Bermaksud Menyelenggarakan
        Pernikahan Kami.
      </p>

      {/* <div
        data-aos="fade-left"
        className="p-1 my-8 bg-contain bg-card-ovi h-80 w-72"
      >
        <Image
          src="/img/salimah.jpeg"
          width={220}
          height={220}
          alt="salimah"
          className="mt-6 px-7"
        />
        <p className={`text-center mt-2 text-2xl ${parisienne.className}`}>
          Salimah
        </p>
      </div> */}

      <div
        data-aos="fade-left"
        class="my-8 w-full max-w-xs bg-primary-400 border border-gray-200 rounded-lg shadow "
      >
        <div class="flex flex-col items-center py-10 px-5 text-center">
          <img
            className="w-36 h-36 mb-3 rounded-full shadow-lg bg-cover"
            src="/img/salimah.jpeg"
            alt="Salimah"
          />
          <h5 class="mb-1 text-lg font-medium"> 𝓢𝓪𝓵𝓲𝓶𝓪𝓱 𝓢𝓪𝓾𝔃𝓪𝓷 𝓠𝓾𝓻𝓻𝓪𝓽𝓾 𝓐𝓲𝓷𝓲</h5>
          <p
            data-aos="fade"
            className={`px-4 mt-2 text-xs font-light text-center ${poppins.className}`}
          >
            Putri Pertama dari <br />
            Bapak Sadali & Ibu Fatonah
          </p>
          <span data-aos="fade" className="flex mt-2 mb-10">
            <Image src="/instagram.svg" width={16} height={16} alt="salimah" />
            <a
              href="https://instagram.com/kayyisa_azharil_jannah"
              target="_blank"
              className={`mx-1 text-xs font-light ${poppins.className}`}
            >
              @kayyisa_azharil_jannah
            </a>
          </span>
        </div>
      </div>

     

      <Image
        data-aos="fade"
        src="/brides-divider.svg"
        width={300}
        height={60}
        alt="divider"
      />
  <div
        data-aos="fade-right"
        class="my-8 w-full max-w-xs bg-primary-400 border border-gray-200 rounded-lg shadow "
      >
        <div class="flex flex-col items-center py-10 px-5 text-center">
          <img
            className="w-36 h-36 mb-3 rounded-full shadow-lg bg-cover"
            src="/img/usamah.jpeg"
            alt="Salimah"
          />
             <h5 className="text-lg">𝓤𝓼𝓪𝓶𝓪𝓱 𝓗𝓪𝓯𝓲𝓭𝔃𝓾𝓭𝓭𝓲𝓷 𝓐𝓫𝓭𝓾𝓵𝓵𝓪𝓱</h5>

<p
  data-aos="fade"
  className={`px-4 mt-2 text-xs font-light text-center ${poppins.className}`}
>
  Putra kelima dari <br />
  Bapak Fathul Khobir & Ibu Ade Aqsho
</p>

<span data-aos="fade" className="flex mt-2">
  <Image src="/instagram.svg" width={16} height={16} alt="usamah" />
  <a
    href="https://instagram.com/hafidzabrarr"
    target="_blank"
    className={`mx-1 text-xs font-light ${poppins.className}`}
  >
    @hafidzabrarr
  </a>
</span>

        </div>
      </div>
  
      <div className="text-center space-y-2 mt-5">
        <p data-aos="fade-down" className="text-white px-10 lg:px-30">
          “Maha Suci Tuhan yang telah menciptakan pasangan-pasangan semuanya,
          baik dari apa yang ditumbuhkan oleh bumi dan dari diri mereka maupun
          dari apa yang tidak mereka ketahui.”
        </p>
        <p data-aos="fade-down">Yasiin (36:36)</p>
      </div>
    </section>
  );
}
