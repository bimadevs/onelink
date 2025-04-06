<template>
  <base-form-section
    title="Profile"
    description="Some public information about you"
  >
    <div class="shadow sm:overflow-hidden sm:rounded-md">
      <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
        <div class="col-span-6 sm:col-span-3">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Name</label
          >
          <input
            type="text"
            name="name"
            id="name"
            autocomplete="given-name"
            :value="name"
            @input="$emit('update:name', $event.target.value)"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label for="about" class="block text-sm font-medium text-gray-700"
            >About yourself</label
          >
          <div class="mt-1">
            <textarea
              id="about"
              name="about"
              rows="3"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder-slate-400"
              placeholder="I am an astronaut"
              maxlength="100"
              :value="desc"
              @input="$emit('update:desc', $event.target.value)"
            ></textarea>
          </div>
        </div>

        <div class="flex-grow col-span-6 sm:col-span-3">
          <label for="photo-url" class="block text-sm font-medium text-gray-700"
            >Photo Url</label
          >
          <input
            type="text"
            name="photo-url"
            id="photo-url"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            :value="image"
            @input="$emit('update:image', $event.target.value)"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Color Theme</label>
          <div class="grid grid-cols-5 gap-2">
            <div 
              v-for="(theme, index) in colorThemes" 
              :key="index"
              class="w-full aspect-square rounded-lg cursor-pointer p-1"
              :class="{ 'ring-2 ring-offset-2 ring-offset-white': selectedTheme === theme.id }"
              @click="selectTheme(theme.id)"
            >
              <div 
                class="h-full w-full rounded-md border"
                :style="{ background: `linear-gradient(45deg, ${theme.colors.primary}, ${theme.colors.secondary})` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </base-form-section>
</template>
<script setup>
const colorThemes = [
  {
    id: 'indigo',
    name: 'Indigo',
    colors: {
      primary: '#4f46e5',
      secondary: '#818cf8',
      background: 'white',
      text: '#1e293b'
    }
  },
  {
    id: 'emerald',
    name: 'Emerald',
    colors: {
      primary: '#10b981',
      secondary: '#34d399',
      background: 'white',
      text: '#1e293b'
    }
  },
  {
    id: 'rose',
    name: 'Rose',
    colors: {
      primary: '#e11d48',
      secondary: '#fb7185',
      background: 'white',
      text: '#1e293b'
    }
  },
  {
    id: 'amber',
    name: 'Amber',
    colors: {
      primary: '#f59e0b',
      secondary: '#fbbf24',
      background: 'white',
      text: '#1e293b'
    }
  },
  {
    id: 'sky',
    name: 'Sky',
    colors: {
      primary: '#0ea5e9',
      secondary: '#38bdf8',
      background: 'white',
      text: '#1e293b'
    }
  },
];

const props = defineProps({
  name: {
    type: String,
    required: false,
    default: "",
  },
  desc: {
    type: String,
    required: false,
    default: "",
  },
  image: {
    type: String,
    required: false,
    default: "",
  },
  theme: {
    type: String,
    required: false,
    default: "indigo"
  }
});

const selectedTheme = ref(props.theme);

const selectTheme = (themeId) => {
  selectedTheme.value = themeId;
  emit('update:theme', themeId);
};

const emit = defineEmits(['update:name', 'update:desc', 'update:image', 'update:theme']);
</script>
