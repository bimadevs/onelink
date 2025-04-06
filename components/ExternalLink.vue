<template>
  <li>
    <nuxt-link :to="url" target="_blank" v-if="label && url">
      <dt
        class="flex items-center space-x-3 p-3 rounded-xl hover:bg-white bg-slate-50/80 hover:shadow-md transition-all duration-300 border border-transparent hover:border-slate-100"
        :style="{ backgroundColor: bgColor }"
      >
        <div
          class="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg"
          :style="{ backgroundColor: iconBgColor, color: themeColor }"
        >
          <icon v-if="icon" :name="icon" class="h-5 w-5" />
          <icon v-else name="ph:link-simple" class="h-5 w-5" />
        </div>
        <div class="w-full flex-grow min-w-0">
          <p class="font-medium text-sm leading-5 truncate" :style="{ color: textColor }">
            {{ label }}
          </p>
        </div>
        <div class="flex-shrink-0 transition-colors duration-300" :style="{ color: themeColor }">
          <icon name="ph:arrow-right" class="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </dt>
    </nuxt-link>
  </li>
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "ph:link-simple",
  },
  theme: {
    type: String,
    default: "indigo"
  }
});

const colorThemes = {
  indigo: {
    primary: '#4f46e5',
    iconBg: 'rgba(79, 70, 229, 0.1)',
    textColor: '#1e293b',
    bgColor: 'rgba(241, 245, 249, 0.8)'
  },
  emerald: {
    primary: '#10b981',
    iconBg: 'rgba(16, 185, 129, 0.1)',
    textColor: '#1e293b',
    bgColor: 'rgba(240, 253, 244, 0.8)'
  },
  rose: {
    primary: '#e11d48',
    iconBg: 'rgba(225, 29, 72, 0.1)',
    textColor: '#1e293b',
    bgColor: 'rgba(255, 241, 242, 0.8)'
  },
  amber: {
    primary: '#f59e0b',
    iconBg: 'rgba(245, 158, 11, 0.1)',
    textColor: '#1e293b',
    bgColor: 'rgba(255, 251, 235, 0.8)'
  },
  sky: {
    primary: '#0ea5e9',
    iconBg: 'rgba(14, 165, 233, 0.1)',
    textColor: '#1e293b',
    bgColor: 'rgba(240, 249, 255, 0.8)'
  }
};

const themeColor = computed(() => {
  return colorThemes[props.theme]?.primary || colorThemes.indigo.primary;
});

const iconBgColor = computed(() => {
  return colorThemes[props.theme]?.iconBg || colorThemes.indigo.iconBg;
});

const textColor = computed(() => {
  return colorThemes[props.theme]?.textColor || colorThemes.indigo.textColor;
});

const bgColor = computed(() => {
  return colorThemes[props.theme]?.bgColor || colorThemes.indigo.bgColor;
});
</script>
