<template>
  <div class="h-full flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 to-slate-100">
    <div
      class="overflow-y-auto shadow-2xl ring-8 ring-slate-800/90 overflow-hidden relative transform hover:scale-[1.02] transition-all duration-500"
      :class="deviceClasses"
    >
      <div class="absolute top-0 left-0 w-full h-6 bg-slate-800 flex items-center px-4 space-x-1 z-10">
        <span class="w-2 h-2 bg-red-500 rounded-full"></span>
        <span class="w-2 h-2 bg-yellow-500 rounded-full"></span>
        <span class="w-2 h-2 bg-green-500 rounded-full"></span>
      </div>
      <div class="mt-6 h-full">
        <component :is="activeTemplateComponent" :acc="data" />
      </div>
    </div>
    
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
      <div class="bg-white rounded-lg shadow p-2 flex space-x-3">
        <button 
          class="flex items-center justify-center p-1 rounded transition-colors"
          :class="{ 'bg-indigo-100 text-indigo-600': previewDevice === 'mobile' }"
          @click="previewDevice = 'mobile'"
          title="Mobile Preview"
        >
          <icon name="ph:device-mobile" class="h-5 w-5" />
        </button>
        <button 
          class="flex items-center justify-center p-1 rounded transition-colors"
          :class="{ 'bg-indigo-100 text-indigo-600': previewDevice === 'tablet' }"
          @click="previewDevice = 'tablet'"
          title="Tablet Preview"
        >
          <icon name="ph:device-tablet" class="h-5 w-5" />
        </button>
        <button 
          class="flex items-center justify-center p-1 rounded transition-colors"
          :class="{ 'bg-indigo-100 text-indigo-600': previewDevice === 'desktop' }"
          @click="previewDevice = 'desktop'"
          title="Desktop Preview"
        >
          <icon name="ph:device-desktop" class="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import TemplatesSimple from "../Templates/Simple.vue";
import TemplatesCard from "../Templates/Card.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const previewDevice = ref('mobile');

const deviceClasses = computed(() => {
  switch (previewDevice.value) {
    case 'mobile':
      return 'h-[500px] w-[260px] rounded-[2rem]';
    case 'tablet':
      return 'h-[600px] w-[450px] rounded-[1.5rem]';
    case 'desktop':
      return 'h-[700px] w-[650px] rounded-[1rem]';
    default:
      return 'h-[500px] w-[260px] rounded-[2rem]';
  }
});

const activeTemplateComponent = computed(() => {
  const templateName = props.data.tp || 'simple';
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
