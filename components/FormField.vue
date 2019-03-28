<template>
  <div class="w-full">
    <label 
      :for="name" 
      class="block text-indigo-darker font-heading font-bold text-xs mb-2">
      {{ label }}
    </label>
    <textarea 
      v-if="type == 'textarea'"
      :id="name" 
      :value="value" 
      :name="name" 
      :placeholder="placeholder" 
      :required="required" 
      class="h-96 w-full px-4 py-3 appearance-none text-sm bg-grey-lightest resize-none outline-none rounded border border-grey-light focus:bg-white transition-all"/>
    <input 
      v-else
      :id="name" 
      :value="value" 
      :name="name" 
      :type="type" 
      :placeholder="placeholder" 
      :required="required" 
      class="w-full px-4 py-3 appearance-none text-sm bg-grey-lightest outline-none rounded border border-grey-light focus:bg-white transition-all">
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>
