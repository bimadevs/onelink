
# Onelink

Onelink adalah alat link-in-bio yang praktis dan elegan untuk membuat halaman landing profil sederhana dengan semua link sosial media dan konten penting Anda. Berbeda dengan alat serupa, Onelink menawarkan dua opsi penyimpanan data:

1. **Enkoding URL** - data disimpan langsung dalam URL (versi original)
2. **ID Pendek** - data disimpan dalam localStorage dan diakses via ID pendek 5 karakter (fitur baru)

<!-- 
Tambahkan screenshot aplikasi Anda di sini:
![Onelink Screenshot](https://link-ke-screenshot-anda.jpg)
-->

## 🌟 Fitur

- 🔗 Buat profil dengan link sosial media dan link kustom lainnya
- 🎨 Pilih dari beberapa tema warna (indigo, emerald, rose, amber, sky)
- 📱 Tampilan responsif untuk mobile, tablet, dan desktop
- 🖼️ Dua template berbeda: Simple dan Card
- 🔍 Preview real-time saat membuat profil
- 📝 URL pendek dengan hanya 5 karakter untuk berbagi lebih mudah
- 🔒 Tidak memerlukan database - data disimpan di localStorage browser


## 🚀 Installasi Lokal

Pastikan untuk menginstal dependensi:

```bash
# yarn
yarn install --ignore-engines

# npm
npm install

# pnpm
pnpm install
```

## 💻 Server Pengembangan

Mulai server pengembangan di http://localhost:3000

```bash
yarn dev
# atau
npm run dev
```

## 🏗️ production

Build aplikasi untuk production:

```bash
yarn build
# atau
npm run build
```

Preview build production secara lokal:

```bash
yarn preview
# atau
npm run preview
```

## 🌐 Deploy ke Production

Onelink dapat dengan mudah di-deploy ke platform seperti Vercel, Netlify, atau layanan hosting statis lainnya.

### Deploy ke Vercel (Rekomendasi)

1. Buat akun di [Vercel](https://vercel.com) jika belum memilikinya
2. Install Vercel CLI: `npm i -g vercel`
3. Jalankan `vercel` di folder proyek
4. Ikuti instruksi untuk menghubungkan ke akun Vercel Anda

### Deploy ke Netlify

1. Buat akun di [Netlify](https://netlify.com)
2. Drag and drop folder `dist` (setelah `npm run build`) ke dashboard Netlify
   atau
3. Hubungkan dengan repositori GitHub Anda dan konfigurasikan build command: `npm run build`

## 🛠️ Teknologi yang Digunakan

- [Nuxt.js 3](https://nuxt.com/) - Framework Vue.js
- [Tailwind CSS](https://tailwindcss.com/) - Untuk styling
- [lz-string](https://github.com/pieroxy/lz-string) - Untuk kompresi data
- [js-base64](https://github.com/dankogai/js-base64) - Untuk enkoding/dekoding data
- [Nuxt Icon](https://github.com/nuxt-modules/icon) - Untuk ikon

## 🔄 Roadmap

1. ✅ URL Pendek - Implementasi ID pendek 5 karakter
2. ✅ Multiple Templates - Simple dan Card templates
3. 🔲 Database Integrasi - Opsi untuk menyimpan data di database eksternal
4. 🔲 Analitik - Pelacakan klik dan interaksi pengunjung
5. 🔲 Domain Kustom - Dukungan untuk domain dan subdomain kustom
6. 🔲 SEO Optimization - Meta tags dan fitur SEO lainnya

## 🤝 Kontribusi

Kontribusi, masalah, dan permintaan fitur sangat diterima!

## 📄 Lisensi

[MIT](LICENSE)

duksi, pertimbangkan untuk mengganti `localStorage` dengan database seperti Firebase, MongoDB, atau layanan penyimpanan lainnya.
