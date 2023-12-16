
import moment from "moment";
import { Grand_Hotel, Poppins } from "next/font/google";


import 'moment/locale/id'; // Import locale bahasa Indonesia

// Set locale bahasa Indonesia pada moment
moment.locale('id');

const grandHotel = Grand_Hotel({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function Maps() {

  return (
    <section
      className={`flex flex-col items-stretch py-12 bg-primary-900 px-6 ${poppins.className}`}
    >
      <h2
        data-aos="fade"
        className={`text-4xl text-center mb-2 ${grandHotel.className}`}
      >
       Navigasi Peta Lokasi Resepsi
      </h2>
      <div className="relative w-full h-96 lg:h-[450px] my-20">

    <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.608218143268!2d110.74312809999999!3d-7.6175378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a3fd95b5acf4f%3A0xdba5d4506d0820a3!2sGOR%20Pandawa!5e0!3m2!1sid!2sid!4v1702738609940!5m2!1sid!2sid"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
      {/* <p data-aos="fade" className="mb-6 text-xs text-center">
      Ucapan Selamat Dan Kebahagiaan Bisa Dari Mana Saja. Tanpa Jabatan-Jabatan Tangan Atau Pelukan-Pelukan Hangat, Masih Ada Simpul-Simpul Senyum Dan Doa-Doa Baik Yang Kami Harapkan.


      </p>
      {isSuccess ? (
        <div className="p-3 mb-8 bg-white rounded-lg shadow shadow-black/20">
          <p className="text-sm text-black">
            Terimakasih <span className="font-semibold">{name}</span> atas
            Ucapan & Doa nya
          </p>
        </div>
      ) : (
        <form data-aos="fade" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Anda"
            className="w-full px-2 py-1 mb-4 text-black bg-white border border-gray-200 rounded-lg drop-shadow-xl active:border-primary-900"
            required
          />
          <textarea
            type="text"
            id="wishes"
            name="wishes"
            value={wishes}
            onChange={(e) => setWishes(e.target.value)}
            placeholder="Tulis Ucapan & Doa"
            className="w-full px-2 py-1 mb-4 text-black bg-white border border-gray-200 rounded-lg drop-shadow-xl active:border-primary-900"
            required
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="block w-40 py-2 mx-auto mb-6 text-sm transition rounded-xl bg-primary-200 hover:bg-opacity-70"
          >
            {isLoading ? <>Menyimpan...</> : <>Kirim Ucapan</>}
          </button>
        </form>
      )}

      <div data-aos="fade" className="h-64 overflow-scroll">
        {isWishesError || isWishesLoading ? (
          <p>Loading Data ...</p>
        ) : (
          wishListData
            .sort((a, b) => (a.unix < b.unix ? 1 : -1))
            .map((wish,i) => (
              <div
                key={i}
                className="px-4 py-2 mb-2 text-black bg-white rounded-tr-lg rounded-bl-lg rounded-br-lg"
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-semibold truncate">{wish.name}</p>
                  <p className="text-xs">{wish.timestamp}</p>
                </div>
                <p className="text-sm">{wish.wishes}</p>
              </div>
            ))
        )}
      </div>
 <p className={`text-white text-2xl text-center my-6 ${grandHotel.className}`}>Sampai bertemu di acara kami</p> */}
    
    </section>
  );
}
