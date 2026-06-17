import type { WeddingConfig } from "./types";
const parseJson = <T,>(jsonString: string | undefined, defaultValue: T): T => {
  if (!jsonString) return defaultValue;
  try {
    return JSON.parse(jsonString) as T;
  } catch (e) {
    console.warn("Failed to parse JSON env:", e);
    return defaultValue;
  }
};
export const MAX_GUESTS = parseInt(
  import.meta.env.PUBLIC_RSVP_MAX_GUESTS ?? "5",
  10
);

// Menggunakan lagu: A Thousand Years - The Piano Guys (Piano Cover)
export const MUSIC_URL =
  import.meta.env.PUBLIC_MUSIC_URL ??
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

export const WEDDING_TEXT = {
  // 1. Salam Pembuka (Universal, Manis, & Sederhana)
  opening: {
    salam: "Warmest Greetings,\n\nTwo different stories now intertwine into a single journey to complement one another and grow together. On this day filled with happiness, we would love to invite you to be a part of the beginning of our new chapter.",
    intro: "",
  },

  // 2. Quotes Pembuka (Elegan & Khidmat)
  quote: {
    ar_rum: `"Dan di atas semuanya itu: kenakanlah kasih, sebagai pengikat yang mempersatukan dan menyempurnakan."`,
    source: "Kolose 3:14",
  },

  // 3. Kalimat Undangan
  invitation:
    "Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, kawan, dan sahabat, untuk memberikan doa restu pada acara pernikahan kami:",

  // 4. Penutup (Footer)
  closing: {
    text: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.",
    salam: "Terima Kasih & Tuhan Memberkati",
    signature: "Kami yang berbahagia,",
    family: "Keluarga Besar Denny & Ingrid",
  },

  // 5. Informasi Dresscode Tambahan (Sesuai Pilihan Anda)
  gift: {
    title: "Dress Code & Tanda Kasih",
    desc: "Demi keselarasan estetika acara, para tamu undangan dihimbau untuk mengenakan pakaian bernuansa All Black (Hitam). Kehadiran serta dukungan doa Anda sangat melengkapi kebahagiaan kami.",
  },
};

export const WEDDING_CONFIG: WeddingConfig = {
  couple: {
    groom: {
      name: "Denny",
      fullName: "Denny Kiiii",
      parents: "Putra pertama dari Bapak Kiiii & Ibu Juuuuu",
      image: "https://placehold.co/600x800?text=Denny+Portrait",
    },
    bride: {
      name: "Ingrid",
      fullName: "Ingrid Melyana",
      parents: "Putri pertama dari Bapak Gohhh & Ibu Helll",
      image: "https://placehold.co/600x800?text=Ingrid+Portrait",
    },
  },
  venue: {
    name: "Grha Mahameru",
    address: "Jalan Raya Jemursari 73, Wonocolo, Surabaya, Jawa Timur 60237",
    latitude: -7.3195, 
    longitude: 112.7483,
  },
  events: {
    akad: {
      title: "Pemberkatan Nikah",
      day: "Sabtu",
      date: "23 Januari 2027",
      startTime: "13:00",
      endTime: "Selesai",
      startDateTime: new Date("2027-01-23T13:00:00+07:00"),
      endDateTime: new Date("2027-01-23T15:00:00+07:00"),
    },
    resepsi: {
      title: "Resepsi Pernikahan",
      day: "Sabtu",
      date: "23 Januari 2027",
      startTime: "18:00",
      endTime: "Selesai",
      startDateTime: new Date("2027-01-23T18:00:00+07:00"),
      endDateTime: new Date("2027-01-23T21:00:00+07:00"),
    },
  },
  hero: {
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    city: "Surabaya",
  },
};

// Bagian Love Story dikosongkan agar fiturnya tidak muncul di halaman web
export const LOVE_STORY = [];

export const BANK_ACCOUNTS = parseJson(import.meta.env.PUBLIC_BANK_ACCOUNTS, [
  { bank: "Bank BCA", number: "................", name: "Ingrid Melyana" },
]);

export const GALLERY_IMAGES = parseJson(import.meta.env.PUBLIC_GALLERY_IMAGES, [
  "https://placehold.co/800x1200",
  "https://placehold.co/1200x800",
]);
