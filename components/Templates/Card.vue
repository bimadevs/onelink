<template>
  <main 
    class="p-3 sm:p-4 h-full w-full space-y-6 sm:space-y-8 pt-8 sm:pt-12 max-w-lg mx-auto"
    :style="backgroundStyle"
  >
    <div class="bg-white rounded-2xl shadow-xl p-6 mx-auto max-w-md relative overflow-hidden">
      <div class="absolute top-0 left-0 right-0 h-24" :style="{ backgroundColor: primaryColor }"></div>
      
      <div class="text-center relative">
        <div
          v-if="acc.i"
          class="h-24 w-24 rounded-full overflow-hidden mx-auto shadow-lg ring-4 ring-white"
          style="margin-top: -12px;"
        >
          <img :src="acc.i" alt="name" class="h-full w-full object-cover" />
        </div>
        <h1 v-if="acc.n" class="text-xl sm:text-2xl font-bold mt-4 tracking-tight" :style="{ color: textColor }">
          {{ acc.n }}
        </h1>
        <p v-if="acc.d" class="text-xs sm:text-sm mt-2 px-4 max-w-md mx-auto" :style="{ color: secondaryTextColor }">
          {{ acc.d }}
        </p>
      </div>
      
      <div
        v-if="!allSocialLinksAreEmpty"
        class="flex items-center justify-center flex-wrap gap-2 p-2 mt-6"
      >
        <span v-if="acc.f" class="social-icon-container">
          <a :href="acc.f" target="_blank" rel="noopener | noreferrer" class="social-icon-link" :style="socialIconStyle">
            <icon name="ph:facebook-logo-duotone" class="h-5 w-5 sm:h-5 sm:w-5" :style="{ color: primaryColor }" />
          </a>
        </span>
        <span v-if="acc.t" class="social-icon-container">
          <a :href="acc.t" target="_blank" rel="noopener | noreferrer" class="social-icon-link" :style="socialIconStyle">
            <icon name="ph:twitter-logo-duotone" class="h-5 w-5 sm:h-5 sm:w-5" :style="{ color: primaryColor }" />
          </a>
        </span>
        <span v-if="acc.ig" class="social-icon-container">
          <a :href="acc.ig" target="_blank" rel="noopener | noreferrer" class="social-icon-link" :style="socialIconStyle">
            <icon name="ph:instagram-logo-duotone" class="h-5 w-5 sm:h-5 sm:w-5" :style="{ color: primaryColor }" />
          </a>
        </span>
        <span v-if="acc.m" class="social-icon-container">
          <a :href="acc.m" target="_blank" rel="noopener | noreferrer" class="social-icon-link" :style="socialIconStyle">
            <icon name="ph:envelope-duotone" class="h-5 w-5 sm:h-5 sm:w-5" :style="{ color: primaryColor }" />
          </a>
        </span>
        <span v-if="acc.tg" class="social-icon-container">
          <a :href="acc.tg" target="_blank" rel="noopener | noreferrer" class="social-icon-link" :style="socialIconStyle">
            <icon name="ph:telegram-logo-duotone" class="h-5 w-5 sm:h-5 sm:w-5" :style="{ color: primaryColor }" />
          </a>
        </span>
        <span v-if="acc.w" class="social-icon-container">
          <a :href="`https://wa.me/${acc.w}`" target="_blank" rel="noopener | noreferrer" class="social-icon-link" :style="socialIconStyle">
            <icon name="ph:whatsapp-logo-duotone" class="h-5 w-5 sm:h-5 sm:w-5" :style="{ color: primaryColor }" />
          </a>
        </span>
        <span v-if="acc.y" class="social-icon-container">
          <a :href="acc.y" target="_blank" rel="noopener | noreferrer" class="social-icon-link" :style="socialIconStyle">
            <icon name="ph:youtube-logo-duotone" class="h-5 w-5 sm:h-5 sm:w-5" :style="{ color: primaryColor }" />
          </a>
        </span>
        <span v-if="acc.e" class="social-icon-container">
          <a :href="`mailto:${acc.e}`" target="_blank" rel="noopener | noreferrer" class="social-icon-link" :style="socialIconStyle">
            <icon name="ph:envelope-duotone" class="h-5 w-5 sm:h-5 sm:w-5" :style="{ color: primaryColor }" />
          </a>
        </span>
        <span v-if="acc.gh" class="social-icon-container">
          <a :href="acc.gh" target="_blank" rel="noopener | noreferrer" class="social-icon-link" :style="socialIconStyle">
            <icon name="ph:github-logo-duotone" class="h-5 w-5 sm:h-5 sm:w-5" :style="{ color: primaryColor }" />
          </a>
        </span>
        <span v-if="acc.l" class="social-icon-container">
          <a :href="acc.l" target="_blank" rel="noopener | noreferrer" class="social-icon-link" :style="socialIconStyle">
            <icon name="ph:linkedin-logo-duotone" class="h-5 w-5 sm:h-5 sm:w-5" :style="{ color: primaryColor }" />
          </a>
        </span>
      </div>
    </div>
    
    <ul class="space-y-3 px-2 max-w-md mx-auto">
      <ExternalLink
        v-for="(link, id) in acc.ls"
        :label="link.l"
        :icon="link.i"
        :url="link.u"
        :key="id"
        :theme="activeTheme"
      />
    </ul>
  </main>
</template>
<script setup>
const props = defineProps({
  acc: {
    type: Object,
    required: true,
  },
});

const colorThemes = {
  indigo: {
    primary: '#4f46e5',
    secondary: '#818cf8',
    textColor: '#1e293b',
    secondaryTextColor: '#64748b',
    backgroundFrom: 'white',
    backgroundTo: '#f8fafc'
  },
  emerald: {
    primary: '#10b981',
    secondary: '#34d399',
    textColor: '#1e293b',
    secondaryTextColor: '#64748b',
    backgroundFrom: 'white',
    backgroundTo: '#f0fdf4'
  },
  rose: {
    primary: '#e11d48',
    secondary: '#fb7185',
    textColor: '#1e293b',
    secondaryTextColor: '#64748b',
    backgroundFrom: 'white',
    backgroundTo: '#fff1f2'
  },
  amber: {
    primary: '#f59e0b',
    secondary: '#fbbf24',
    textColor: '#1e293b',
    secondaryTextColor: '#64748b',
    backgroundFrom: 'white',
    backgroundTo: '#fffbeb'
  },
  sky: {
    primary: '#0ea5e9',
    secondary: '#38bdf8',
    textColor: '#1e293b',
    secondaryTextColor: '#64748b',
    backgroundFrom: 'white',
    backgroundTo: '#f0f9ff'
  }
};

const activeTheme = computed(() => {
  return props.acc.th || 'indigo';
});

const primaryColor = computed(() => {
  return colorThemes[activeTheme.value]?.primary || colorThemes.indigo.primary;
});

const secondaryColor = computed(() => {
  return colorThemes[activeTheme.value]?.secondary || colorThemes.indigo.secondary;
});

const textColor = computed(() => {
  return colorThemes[activeTheme.value]?.textColor || colorThemes.indigo.textColor;
});

const secondaryTextColor = computed(() => {
  return colorThemes[activeTheme.value]?.secondaryTextColor || colorThemes.indigo.secondaryTextColor;
});

const backgroundStyle = computed(() => {
  if (props.acc.bg) {
    return {
      backgroundImage: `url(${props.acc.bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  }
  
  const from = colorThemes[activeTheme.value]?.backgroundFrom || colorThemes.indigo.backgroundFrom;
  const to = colorThemes[activeTheme.value]?.backgroundTo || colorThemes.indigo.backgroundTo;
  
  return {
    background: `linear-gradient(to bottom, ${from}, ${to})`
  };
});

const socialIconStyle = computed(() => {
  return {
    '--hover-color': `${secondaryColor.value}20` // 20% opacity
  };
});

const allSocialLinksAreEmpty = computed(() => {
  return (
    !props.acc.f &&
    !props.acc.t &&
    !props.acc.ig &&
    !props.acc.m &&
    !props.acc.tg &&
    !props.acc.w &&
    !props.acc.y &&
    !props.acc.e &&
    !props.acc.gh &&
    !props.acc.l
  );
});
</script>
<style scoped>
.social-icon-container {
  @apply p-1;
}

.social-icon-link {
  @apply block rounded-full p-2 bg-white shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300;
}

.social-icon-link:hover {
  background-color: var(--hover-color, rgba(129, 140, 248, 0.2));
}
</style> 