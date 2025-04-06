import { encode, decode } from "js-base64";
import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from "lz-string";

// Metode enkoding lama (dipertahankan sebagai fallback)
export const encodeDataLegacy = (obj) => {
  return encode(JSON.stringify(obj));
};

// Metode dekoding lama (dipertahankan sebagai fallback)
export const decodeDataLegacy = (base64) => JSON.parse(decode(base64));

// Metode enkoding baru yang menghasilkan URL lebih pendek
export const encodeData = (obj) => {
  return compressToEncodedURIComponent(JSON.stringify(obj));
};

// Metode dekoding baru
export const decodeData = (compressed) => {
  try {
    // Coba dengan metode kompresi baru
    const decompressed = decompressFromEncodedURIComponent(compressed);
    if (decompressed) {
      return JSON.parse(decompressed);
    }
    throw new Error("Failed to decompress with new method");
  } catch (error) {
    // Fallback ke metode lama jika gagal (untuk kompatibilitas)
    try {
      return JSON.parse(decode(compressed));
    } catch (fallbackError) {
      console.error("Error decoding data:", fallbackError);
      return {
        n: "Error",
        d: "Ada masalah saat memuat profil ini. Data mungkin rusak.",
        i: "",
        tp: "simple",
        ls: []
      };
    }
  }
};
