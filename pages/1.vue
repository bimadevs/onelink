<template>
  <div class="min-h-screen bg-gradient-to-br from-white to-slate-50">
    <component :is="activeTemplateComponent" v-if="decodedData" :acc="decodedData" />
    <div
      v-else
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
    >
      <div class="mb-4 p-2 rounded-full bg-white shadow-md">
        <icon name="ph:link-bold" class="h-6 w-6 text-indigo-600 animate-pulse" />
      </div>
      <div class="bg-white px-4 py-2 rounded-full shadow-md">
        <span class="text-sm font-medium text-slate-700">Loading profile...</span>
      </div>
    </div>
    
    <a
      href="/"
      class="fixed bottom-4 right-4 bg-white rounded-full shadow-md p-3 text-indigo-600 hover:bg-indigo-50 transition-colors duration-300"
    >
      <icon name="ph:pencil-bold" class="h-5 w-5" />
    </a>
  </div>
</template>
<script setup>
import { decodeData } from "../utils/transformer";
import { getData } from "../utils/storage";
import TemplatesSimple from "../components/Templates/Simple.vue";
import TemplatesCard from "../components/Templates/Card.vue";

const route = useRoute();
const shortId = route.query.id;
const encodedData = route.query.data;
const decodedData = ref({});

// Logika loading data - coba ID pendek dahulu, fallback ke data terenkode
if (shortId) {
  // Gunakan sistem ID pendek
  const data = getData(shortId);
  if (data) {
    decodedData.value = data;
  } else {
    decodedData.value = {
      n: "Error",
      d: "Profil tidak ditemukan. ID mungkin salah atau telah kedaluwarsa.",
      i: "",
      tp: "simple",
      ls: []
    };
  }
} else if (encodedData) {
  // Fallback ke metode lama (data terenkode di URL)
  try {
    decodedData.value = decodeData(encodedData);
  } catch (error) {
    console.error("Error decoding data:", error);
    decodedData.value = {
      n: "Error",
      d: "Ada masalah saat memuat profil ini. Data mungkin rusak.",
      i: "",
      tp: "simple",
      ls: []
    };
  }
} else {
  // Jika tidak ada ID atau data
  decodedData.value = {
    n: "Error",
    d: "Tidak ada ID atau data yang diberikan. Silahkan buat profil baru.",
    i: "",
    tp: "simple",
    ls: []
  };
}

const activeTemplateComponent = computed(() => {
  const templateName = decodedData.value.tp || 'simple';
  if (templateName === 'simple') {
    return TemplatesSimple;
  } else if (templateName === 'card') {
    return TemplatesCard;
  } else {
    return TemplatesSimple; // Default fallback
  }
});
</script>
<style scoped></style>
