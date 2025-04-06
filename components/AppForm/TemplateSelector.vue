<template>
  <div class="space-y-4">
    <h3 class="text-base font-medium text-slate-900">Template</h3>
    
    <div class="grid grid-cols-2 gap-4">
      <div 
        class="border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
        :class="{ 'ring-2 ring-indigo-500': selectedTemplate === 'simple' }"
        @click="selectTemplate('simple')"
      >
        <div class="h-32 bg-slate-50 flex flex-col items-center justify-center p-2">
          <div class="w-8 h-8 rounded-full bg-slate-300 mb-2"></div>
          <div class="w-16 h-2 bg-slate-300 mb-1"></div>
          <div class="w-24 h-1 bg-slate-200"></div>
          <div class="flex space-x-1 mt-2">
            <div v-for="i in 3" :key="i" class="w-2 h-2 rounded-full bg-slate-300"></div>
          </div>
          <div class="w-full h-4 bg-slate-200 mt-2 rounded"></div>
        </div>
        <div class="p-2 bg-white text-center">
          <span class="text-xs font-medium">Simple</span>
        </div>
      </div>
      
      <div 
        class="border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
        :class="{ 'ring-2 ring-indigo-500': selectedTemplate === 'card' }"
        @click="selectTemplate('card')"
      >
        <div class="h-32 bg-slate-50 flex flex-col items-center justify-center p-2">
          <div class="w-full h-5 bg-slate-300 mb-2 -mt-4"></div>
          <div class="w-8 h-8 rounded-full bg-slate-300 mb-2 ring-2 ring-white"></div>
          <div class="w-16 h-2 bg-slate-300 mb-1"></div>
          <div class="w-24 h-1 bg-slate-200"></div>
          <div class="flex space-x-1 mt-2">
            <div v-for="i in 3" :key="i" class="w-2 h-2 rounded-full bg-slate-300"></div>
          </div>
          <div class="w-full h-4 bg-slate-200 mt-2 rounded"></div>
        </div>
        <div class="p-2 bg-white text-center">
          <span class="text-xs font-medium">Card</span>
        </div>
      </div>
    </div>
    
    <div class="pt-4">
      <h3 class="text-base font-medium text-slate-900 mb-2">Background Image (optional)</h3>
      <input
        type="url"
        :value="backgroundImage"
        @input="$emit('update:background', $event.target.value)"
        class="block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="Background image URL"
      />
      <p class="text-xs text-slate-500 mt-1">Leave empty to use theme color</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  template: {
    type: String,
    required: false,
    default: "simple"
  },
  background: {
    type: String,
    required: false,
    default: ""
  }
});

const selectedTemplate = ref(props.template);
const backgroundImage = ref(props.background);

const selectTemplate = (template) => {
  selectedTemplate.value = template;
  emit('update:template', template);
};

const emit = defineEmits(['update:template', 'update:background']);
</script> 