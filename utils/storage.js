// Penyimpanan data sementara (pengganti database)
const storage = new Map();

// Karakter yang digunakan untuk ID
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// Fungsi untuk menghasilkan ID acak dengan panjang tertentu
const generateId = (length = 5) => {
  let id = '';
  for (let i = 0; i < length; i++) {
    id += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }
  return id;
};

// Menyimpan data dan mengembalikan ID pendek
export const saveData = (data) => {
  const id = generateId(5);
  storage.set(id, data);
  
  // Untuk demo, kita simpan ke localStorage juga
  // Di implementasi sebenarnya, ini akan disimpan ke database
  if (process.client) {
    try {
      const storedData = JSON.parse(localStorage.getItem('onelinkData') || '{}');
      storedData[id] = data;
      localStorage.setItem('onelinkData', JSON.stringify(storedData));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }
  
  return id;
};

// Mengambil data berdasarkan ID
export const getData = (id) => {
  // Coba ambil dari memori terlebih dahulu
  if (storage.has(id)) {
    return storage.get(id);
  }
  
  // Jika tidak ada di memori, coba cari di localStorage
  if (process.client) {
    try {
      const storedData = JSON.parse(localStorage.getItem('onelinkData') || '{}');
      if (storedData[id]) {
        // Simpan ke memori untuk akses berikutnya
        storage.set(id, storedData[id]);
        return storedData[id];
      }
    } catch (e) {
      console.error('Error loading from localStorage', e);
    }
  }
  
  return null;
}; 