<template>
  <div class="h-screen flex flex-col md:flex-row lg:grid lg:grid-cols-3 divide-x">
    <div class="w-full lg:col-span-2 h-screen flex flex-col bg-gradient-to-br from-slate-50 to-white">
      <div class="border-b p-4 flex justify-between items-center bg-white">
        <div class="flex items-center space-x-2">
          <icon name="ph:link-bold" class="h-6 w-6 text-indigo-600" />
          <h1 class="text-xl font-bold text-slate-800">Onelink</h1>
        </div>
        <div class="flex space-x-2">
          <a
            href="https://github.com/bimadevs/onelink"
            target="_blank"
            class="flex items-center space-x-2 px-3 py-1.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <icon name="mdi:github" class="h-4 w-4" />
            <span class="hidden sm:inline"> Github </span>
          </a>
        </div>
      </div>
      
      <div class="border-b bg-white">
        <nav class="flex">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            @click="activeTab = tab.id"
            class="px-4 py-3 text-sm font-medium border-b-2 transition-colors"
            :class="activeTab === tab.id ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'"
          >
            {{ tab.label }}
          </button>
        </nav>
      </div>
      
      <div class="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <div class="max-w-2xl mx-auto space-y-6">
          <!-- Profile Tab -->
          <div v-if="activeTab === 'profile'">
            <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
              <app-form-profile
                v-model:name="data.n"
                v-model:desc="data.d"
                v-model:image="data.i"
                v-model:theme="data.th"
              />
            </div>
            
            <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-100 mt-6">
              <app-form-social-links
                v-model:facebook="data.f"
                v-model:twitter="data.t"
                v-model:instagram="data.ig"
                v-model:github="data.gh"
                v-model:telegram="data.tg"
                v-model:linkedin="data.l"
                v-model:email="data.e"
                v-model:whatsapp="data.w"
                v-model:youtube="data.y"
              />
            </div>
            
            <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-100 mt-6">
              <app-form-links v-model="data.ls" />
            </div>
          </div>
          
          <!-- Appearance Tab -->
          <div v-if="activeTab === 'appearance'">
            <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
              <app-form-template-selector
                v-model:template="data.tp"
                v-model:background="data.bg"
              />
            </div>
            
            <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-100 mt-6">
              <app-form-profile
                v-model:theme="data.th"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div class="border-t bg-white p-4 flex flex-wrap items-center justify-between gap-4">
        <div class="flex space-x-2">
          <button
            @click="prefillDemoData"
            class="flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <icon name="mdi:code-json" class="h-4 w-4" />
            <span> Add demo data </span>
          </button>
        </div>
        <button
          @click="publish"
          class="flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium"
          :class="activeThemeButtonClass"
        >
          <icon name="ph:paper-plane-tilt-bold" class="h-4 w-4" />
          <span> Publish </span>
        </button>
      </div>
    </div>
    
    <div class="hidden md:block md:w-full lg:w-auto">
      <app-form-preview :data="data" />
    </div>
    
    <div class="md:hidden w-full p-4 bg-white border-t flex justify-center">
      <button
        @click="toggleMobilePreview"
        class="w-full px-4 py-2 rounded-md flex items-center justify-center space-x-2 text-sm font-medium text-white"
        :class="activeThemeButtonClass"
      >
        <span>{{ showMobilePreview ? 'Hide Preview' : 'Show Preview' }}</span>
        <icon :name="showMobilePreview ? 'ph:eye-slash' : 'ph:eye'" class="h-4 w-4" />
      </button>
    </div>
    
    <!-- Mobile Preview Modal -->
    <div 
      v-if="showMobilePreview" 
      class="md:hidden fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      @click.self="showMobilePreview = false"
    >
      <div class="bg-white rounded-2xl p-4 w-full max-w-xs max-h-[85vh] overflow-hidden">
        <div class="flex justify-between items-center mb-4">
          <h3 class="font-bold text-slate-800">Preview</h3>
          <button @click="showMobilePreview = false" class="p-1 rounded-full hover:bg-slate-100">
            <icon name="ph:x-bold" class="h-5 w-5" />
          </button>
        </div>
        <div class="overflow-y-auto max-h-[calc(85vh-70px)]">
          <component :is="activeTemplateComponent" :acc="data" />
        </div>
      </div>
    </div>
    
    <a
      href="https://instagram.com/biimaa_jo"
      target="_blank"
      class="hidden md:block absolute bottom-0 right-0 bg-white rounded-tl-lg shadow-md px-4 py-1.5 font-medium text-sm text-slate-500 hover:text-indigo-600 transition-colors"
    >
      Made by BimaDev
    </a>
  </div>
</template>

<script setup>
import { encodeData } from "../utils/transformer";
import TemplatesSimple from "../components/Templates/Simple.vue";
import TemplatesCard from "../components/Templates/Card.vue";
import { saveData } from "../utils/storage";

const data = ref({
  n: "",
  d: "",
  i: "",
  f: "",
  t: "",
  ig: "",
  gh: "",
  tg: "",
  l: "",
  e: "",
  w: "",
  y: "",
  th: "indigo", // Default theme
  tp: "simple", // Default template
  bg: "", // Custom background
  ls: [],
});

const showMobilePreview = ref(false);
const activeTab = ref('profile');

const tabs = [
  {
    id: 'profile',
    label: 'Profile & Links'
  },
  {
    id: 'appearance',
    label: 'Appearance'
  }
];

const toggleMobilePreview = () => {
  showMobilePreview.value = !showMobilePreview.value;
};

const colorThemes = {
  indigo: {
    primary: '#4f46e5',
    secondary: '#818cf8',
    buttonClass: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm',
  },
  emerald: {
    primary: '#10b981',
    secondary: '#34d399',
    buttonClass: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm',
  },
  rose: {
    primary: '#e11d48',
    secondary: '#fb7185',
    buttonClass: 'bg-rose-600 hover:bg-rose-700 text-white shadow-sm',
  },
  amber: {
    primary: '#f59e0b',
    secondary: '#fbbf24',
    buttonClass: 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm',
  },
  sky: {
    primary: '#0ea5e9',
    secondary: '#38bdf8',
    buttonClass: 'bg-sky-600 hover:bg-sky-700 text-white shadow-sm',
  }
};

const activeThemeButtonClass = computed(() => {
  return colorThemes[data.value.th]?.buttonClass || colorThemes.indigo.buttonClass;
});

const activeTemplateComponent = computed(() => {
  const templateName = data.value.tp || 'simple';
  if (templateName === 'simple') {
    return TemplatesSimple;
  } else if (templateName === 'card') {
    return TemplatesCard;
  } else {
    return TemplatesSimple; // Default fallback
  }
});

const prefillDemoData = () => {
  data.value = {
    n: "BimaDev",
    d: "I'm BimaDev, FullStack Developer from Indonesia",
    i: "https://www.bimadev.xyz/_next/image?url=%2Fimages%2Flogo-color.png&w=256&q=75",
    f: "https://www.facebook.com/bima.jovanta.7",
    t: "https://twitter.com/bimadev",
    ig: "https://www.instagram.com/biimaa_jo",
    e: "mail@bimadev.xyz",
    gh: "https://github.com/bimadevs",
    tg: "https://t.me/bimadev",
    w: "+6285730000000",
    y: "https://youtube.com/@bimadev",
    l: "https://linkedin.com/bimadev",
    th: "indigo", // Color theme
    tp: "simple", // Template
    bg: "", // Background image
    ls: [
      {
        l: "My Website",
        i: "ph:globe-duotone",
        u: "https://bimadev.xyz",
      },
      {
        l: "Amazon wishlist",
        i: "ant-design:amazon-outlined",
        u: "https://amazon.in",
      },
      {
        l: "React JS course",
        i: "grommet-icons:reactjs",
        u: "https://reactjs.org/",
      },
      {
        l: "Donate for our cause",
        i: "iconoir:donate",
        u: "https://who.int",
      },
      {
        l: "Download my resume",
        i: "ph:file-pdf",
        u: "https://google.com",
      },
    ],
  };
};

const publish = () => {
  // Simpan data dan dapatkan ID pendek
  const shortId = saveData(data.value);
  
  // Buat URL pendek dengan ID
  const url = `${window.location.origin}/1?id=${shortId}`;
  
  navigator.clipboard.writeText(url).then(() => {
    alert("Link pendek berhasil disalin ke clipboard");
  });
};
</script>
