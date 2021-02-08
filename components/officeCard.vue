<template>
  <div
    :class="[
      'overflow-y-hidden',
      'transition-height',
      'duration-500',
      'ease-in-out',
      'h-close',
      'transform',
      'rounded-down',
      'shadow-lg',
      'm-card',
      isRemoved ? 'h-delete p-delete m-delete' : '',
      isOpen ? 'h-open' : '',
    ]"
  >
    <div
      :class="[
        'rounded-up',
        'transition',
        'p-card',
        'font-sans',
        'text-left',
        'transition',
        'duration-500',
        'ease-in-out',
        'bg-white',
        isOpen ? 'bg-gray-office-card' : '',
      ]"
      @click="dropdown"
    >
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-col">
          <p
            :class="[
              'font-bold',
              'text-header',
              'transition',
              'duration-500',
              'ease-in-out',
              'text-black',
              isOpen ? 'text-white' : '',
            ]"
          >
            {{ title }}
          </p>
          <p
            :class="[
              'transition',
              'duration-500',
              'ease-in-out',
              'text-sub-header',
              isOpen ? 'text-white' : 'text-gray-office-card',
            ]"
          >
            {{ address }}
          </p>
        </div>
        <fa
          :icon="['fas', 'chevron-down']"
          :class="[
            'justify-items-end',
            'transition',
            'duration-500',
            'transform',
            'ease-in-out',
            isOpen ? 'text-white -rotate-180' : 'text-blue-add',
          ]"
        />
      </div>
    </div>
    <div
      :class="['bg-white', 'rounded-down', 'p-card', 'font-sans', 'text-left']"
    >
      <div class="items-center">
        <div class="flex flex-col space-y-sp">
          <p :class="['font-bold', 'text-header', 'text-black']">
            {{ fullname.slice(0, 13) }}{{fullname.length > 13 ? "..." : ""}}
          </p>
          <p :class="['text-black', 'text-sub-header']">
            {{ job }}
          </p>
          <p :class="['text-blue-header', 'text-sub-header']">
            {{ email }}
          </p>
          <p :class="['text-black', 'text-sub-header']">
            {{ phone }}
          </p>
          <hr class="m-line border-line" />
          <div class="flex flex-row justify-between">
            <button @click="autoEdit" class="flex flex-row justify-between items-center bg-white space-x-icon-btn text-gray-office-card">
              <fa :icon="['fas', 'pen']" class="text-icon" />
              <p class="text-button">EDIT</p>
            </button>
            <button @click="autoRemove" class="flex flex-row justify-between items-center bg-white space-x-icon-btn text-danger">
              <fa :icon="['far', 'trash-alt']" class="text-icon" />
              <p class="text-button">DELETE</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      isRemoved: false,
    };
  },
  props: {
    title: String,
    address: String,
    fullname: String,
    job: String,
    email: String,
    phone: String,
    remove: Function,
    editOffice: Function
  },
  methods: {
    dropdown() {
      this.isOpen = !this.isOpen;
    },
    autoRemove(){
      this.isOpen = false;
      this.isRemoved = true;
      setTimeout(()=>this.remove(), 500);
    },
    autoEdit(){
      this.dropdown();
      this.editOffice();
    }
  }
};
</script>
<style>

</style>
