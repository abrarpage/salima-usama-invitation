import { db } from "@/helpers";
import axios from "axios";
import { addDoc, collection, getDocs } from "firebase/firestore";
import moment from "moment";
import { Grand_Hotel, Poppins } from "next/font/google";
import Image from "next/image";
import {  useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";

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

export default function Wishes() {
  const [name, setName] = useState("");
  const [wishes, setWishes] = useState("");
  const [dataList, setDataList] = useState([]);
  const queryClient = useQueryClient();

  const fetchWishes = async() => {

    // return axios.get(
    //   "https://api.sheetson.com/v2/sheets/Ucapan1?apiKey=bbg8btmHgC8YAG0G3Wb6dP3KWyYdPuaTmffbpVVxbma87ZmQY24irqn7QrE&spreadsheetId=1SZZvv0j8YCDAG_yQQfxCjA21ZMEIVqTsYvGVVCPp6Y0&limit=100"
    // );
  };


  const findAll = async () => {
    const doc_refs = await getDocs(collection(db, 'wishlists'))

    const res = []

    doc_refs.forEach(item => {
        res.push({
            id: item.id, 
            ...item.data()
        })
    })

    return res
}
  const {
    isLoading: isWishesLoading,
    isError: isWishesError,
    error: wishListError,
    data: wishListData,
  } = useQuery("wishes", findAll, {
    onSuccess: (data) => {
      console.log("datas", data);
      // setDataList([...data.data.results]);
    },
    onError: () => {
      console.log(wishListError);
    },
  });



  const addWishes = async(wishesData) => {
    await addDoc(collection(db, 'wishlists'), { ...wishesData});
    // return axios.post(
    //   "https://api.sheetson.com/v2/sheets/Ucapan1",
    //   {
    //     ...wishesData,
    //   },
    //   {
    //     headers: {
    //       Authorization:
    //         "Bearer bbg8btmHgC8YAG0G3Wb6dP3KWyYdPuaTmffbpVVxbma87ZmQY24irqn7QrE",
    //       "X-Spreadsheet-Id": "1SZZvv0j8YCDAG_yQQfxCjA21ZMEIVqTsYvGVVCPp6Y0",
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
  };

  const {
    mutate: addWishesData,
    isLoading,
    isSuccess,
    error,
  } = useMutation(addWishes, {
    onSuccess: (data) => {
      
      toast("Terimakasih! Ucapan & Doa anda telah tersimpan", {
        type: "success",
      });
      queryClient.invalidateQueries("wishes");
      // setDataList([...dataList, data.data]);
    },
    onError: () => {
      console.log(error, "error");
      toast(error.message, { type: "error" });
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoading) return;

    const date = new Date();
    const unix = date.getTime();
    const timestamp = moment().format("MMMM Do YYYY, h:mm a");
    
    addWishesData({ name, wishes, timestamp, unix });
  };
  // ro9rt4qmr43u5
  return (
    <section
      id="wishes"
      className={`flex flex-col items-stretch py-12 bg-primary-900 px-6 ${poppins.className}`}
    >
      <h2
        data-aos="fade"
        className={`text-4xl text-center mb-2 ${grandHotel.className}`}
      >
        Ucapan & Doa
      </h2>
      <p data-aos="fade" className="mb-6 text-xs text-center">
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
 <p className={`text-white text-2xl text-center my-6 ${grandHotel.className}`}>Sampai bertemu di acara kami</p>
      {/* <Image
        src="/wishes-footer.svg"
        width={340}
        height={100}
        alt="footer"
        className="mx-auto mt-6"
      /> */}
    </section>
  );
}
