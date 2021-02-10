<template>
  <div class="flex flex-col m-input">
    <label class="text-sub-header"
      >{{ label }}
      <span class="m-asterisk text-gray-office-card">*</span></label
    >
    <div
      id="input_container"
      :class="[
        warning ? 'ring-danger' : 'ring-input',
        'h-input',
        'p-input',
        'rounded-input',
        'border-transparent',
        'shadow-sm',
        'ring-2',
        'focus-within:outline-none',
        'focus-within:ring-2',
        'focus-within:ring-input-blue',
      ]"
    >
      <input
        v-if="type === 'tel'"
        :type="type"
        :id="id"
        :value="value"
        :placeholder="placeholder"
        @input="({ target }) => $emit('input', target.value)"
        @focusout="unselect"
        @change="onChange"
        v-mask="'(999) 999-9999'"
      />
      <input
        v-else
        :type="type"
        :id="id"
        :value="value"
        :placeholder="placeholder"
        @focusout="unselect"
        @change="onChange"
        @input="({ target }) => $emit('input', target.value)"
      />
      <fa
        v-if="warning"
        :icon="['fas', 'exclamation-circle']"
        class="text-danger"
      />
    </div>
    <p v-if="warning" class="text-twelve text-danger m-warning">
      {{ warning }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    warning: {
      type: String,
      default: null,
    },
    change: {
      type: Function
    }
  },
  methods: {
    onChange(event){
      this.change();
    },
    unselect() {
      this.change();
    },
  },
};
</script>
<style scoped>
#input_container {
  @apply flex flex-row justify-between items-center;
}
input {
  outline: none;
  width: 100%;
  background-color: transparent;
}
</style>