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

// Music track: A Thousand Years - The Piano Guys (Piano Cover)
export const MUSIC_URL =
  import.meta.env.PUBLIC_MUSIC_URL ??
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

export const WEDDING_TEXT = {
  // 1. Opening Greeting (Dikosongkan karena tidak didukung oleh layout template)
  opening: {
    salam: "",
    intro: "",
  },

  // 2. Opening Quotes (Tetap anggun sebagai ayat pembuka)
  quote: {
    ar_rum: `"And over all these virtues put on love, which binds them all together in perfect unity."`,
    source: "Colossians 3:14",
  },

  // 3. Invitation Message (Kalimat pengantar cerita digabung di sini agar pasti muncul)
  invitation:
    "Two different stories now intertwine into a single journey to complement one another and grow together. On this day filled with happiness, we would love to invite you to be a part of the beginning of our new chapter.\n\nWith all due respect, we cordially invite our family, friends, and colleagues to join us and celebrate our wedding day:",

  // 4. Closing (Footer)
  closing: {
    text: "It would be our greatest honor and joy to have your presence to celebrate and bless our marriage.",
    salam: "Thank You & God Bless",
    signature: "With love,",
    family: "The Families of Denny & Ingrid",
  },

  // 5. Dress Code Info (Bebas dari kata "Blessing/Restu")
  gift: {
    title: "Dress Code & Attire",
    desc: "To complement the aesthetic of our celebration, guests are kindly requested to dress in All Black attire. Your presence and kind prayers are the greatest gifts to complete our happiness.",
  },
};

export const WEDDING_CONFIG: WeddingConfig = {
  couple: {
    groom: {
      name: "Denny",
      fullName: "Denny Kiiii",
      parents: "First son of Mr. Kiiii & Mrs. Juuuuu",
      image: "https://placehold.co/600x800?text=Denny+Portrait",
    },
    bride: {
      name: "Ingrid",
      fullName: "Ingrid Melyana",
      parents: "First daughter of Mr. Gohhh & Mrs. Helll",
      image: "https://placehold.co/600x800?text=Ingrid+Portrait",
    },
  },
  venue: {
    name: "Grha Mahameru",
    address: "Jalan Raya Jemursari 73, Wonocolo, Surabaya, East Java 60237",
    latitude: -7.3195, 
    longitude: 112.7483,
  },
  events: {
    akad: {
      title: "Holy Matrimony",
      day: "Saturday",
      date: "January 23, 2027",
      startTime: "13:00",
      endTime: "Until Finished",
      startDateTime: new Date("2027-01-23T13:00:00+07:00"),
      endDateTime: new Date("2027-01-23T15:00:00+07:00"),
    },
    resepsi: {
      title: "Wedding Reception",
      day: "Saturday",
      date: "January 23, 2027",
      startTime: "18:00",
      endTime: "Until Finished",
      startDateTime: new Date("2027-01-23T18:00:00+07:00"),
      endDateTime: new Date("2027-01-23T21:00:00+07:00"),
    },
  },
  hero: {
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    city: "Surabaya",
  },
};

// Bagian Love Story dikosongkan agar fiturnya tersembunyi
export const LOVE_STORY = [];

export const BANK_ACCOUNTS = parseJson(import.meta.env.PUBLIC_BANK_ACCOUNTS, [
  { bank: "Bank BCA", number: "................", name: "Ingrid Melyana" },
]);

export const GALLERY_IMAGES = parseJson(import.meta.env.PUBLIC_GALLERY_IMAGES, [
  "https://placehold.co/800x1200",
  "https://placehold.co/1200x800",
]);
