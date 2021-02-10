<template>
  <div
    v-bind:key="rendernumber"
    :class="[
      'overflow-y-hidden',
      'transition-height',
      'duration-500',
      'ease-in-out',
      'transform',
      'rounded-all',
      'shadow-lg',
      'p-card',
      'm-card',
      'w-default',
      'font-sans',
      'text-left',
      'bg-white',
      'flex',
      'flex-col',
      isOpen ? 'h-location' : 'bg-blue-add h-button-location',
    ]"
  >
    <div
      v-if="isOpen"
      class="text-sub-header font-bold text-black flex flex-row justify-between items-center m-title-location"
    >
      <h3 class="text-sub-header font-bold">
        {{ isEdit ? "Edit Location" : "New Location" }}
      </h3>
      <button @click="dropdown" class="text-black">
        <fa :icon="['fas', 'times']" />
      </button>
    </div>

    <div
      @click="dropdown"
      v-else
      class="space-x-btn font-sans cursor-pointer text-white flex flex-row justify-between items-center m-title-location"
    >
      <span class="text-sub-header text-white">Add New Location</span>
      <button class="text-white">
        <fa :icon="['fas', 'plus']" />
      </button>
    </div>

    <Input
      v-model="title"
      id="title"
      label="Title"
      :change="titleChange"
      :warning="titleWarning"
    />
    <Input
      v-model="address"
      id="address"
      label="Enter the address"
      :change="addressChange"
      :warning="addressWarning"
    />
    <h3 class="text-twelve text-blue-header">CONTACT INFORMATION</h3>
    <hr class="m-line-location border-line" />
    <Input
      v-model="fullname"
      id="fullname"
      label="Full name"
      :change="fullnameChange"
      :warning="fullnameWarning"
    />
    <Input
      v-model="job"
      id="job"
      label="Job Position"
      :change="jobChange"
      :warning="jobWarning"
    />
    <Input
      v-model="email"
      id="email"
      label="Email address"
      placeholder="name@example.com"
      type="email"
      :change="emailChange"
      :warning="emailWarning"
    />
    <Input
      v-model="phone"
      id="phone"
      label="Phone"
      placeholder="(xxx) xxx-xxxx"
      type="tel"
      :change="phoneChange"
      :warning="phoneWarning"
    />
    <button
      :class="['bg-blue-add p-save text-white w-save rounded-all', check() ? '' : 'opacity-50 bg-disabled']"
      @click="saveAll"
      :disabled="!check()"
    >
      Save
    </button>
  </div>
</template>
<script>
import Input from "./input.vue";
import { isValidEmail, isValidPhoneNumber } from "../utils/validators";
const emptyField = "This field cannot be empty";
const invalidNumber = "Invalid number";
const invalidEmail = "Invalid e-mail";

export default {
  data() {
    return {
      title: "",
      address: "",
      fullname: "",
      job: "",
      email: "",
      phone: "",
      titleWarning: null,
      addressWarning: null,
      fullnameWarning: null,
      jobWarning: null,
      emailWarning: null,
      phoneWarning: null,
      isOpen: false,
      isEdit: false,
      indexCurr: null
    };
  },
  props: {
    save: Function,
    data: Object,
    rendernumber: Number
  },
  components: {
    Input,
  },
  methods: {
    reset(){
      this.title = null;
      this.address = null;
      this.fullname = null;
      this.job = null;
      this.email = null;
      this.phone = null;
      this.titleWarning = null;
      this.addressWarning = null;
      this.fullnameWarning = null;
      this.jobWarning = null;
      this.emailWarning = null;
      this.phoneWarning = null;
    },
    open(data, index) {
      this.reset();
      this.isOpen = true;
      if(data){
        this.indexCurr = index;
        this.isEdit = true;
        this.title = data.title;
        this.address = data.address;
        this.fullname = data.fullname;
        this.job = data.job;
        this.email = data.email;
        this.phone = data.phone;
      }
    },
    close() {
      this.isOpen = false;
      this.isEdit = false;
    },
    dropdown() {
      this.isOpen = !this.isOpen;
      this.Edit = false;
      setTimeout(this.reset, 500);
    },
    check() {
      return (
        isValidEmail(this.email) &&
        isValidPhoneNumber(this.phone) &&
        this.title && this.title.length > 0 &&
        this.address && this.address.length > 0 &&
        this.fullname && this.fullname.length > 0 &&
        this.job && this.job.length > 0 &&
        this.email && this.email.length > 0 &&
        this.phone && this.phone.length > 0
      );
    },
    saveAll() {
      if (this.check()) {
        this.save(this.$data, this.indexCurr);
        this.dropdown();
        this.indexCurr = null;
      }
    },
    titleChange() {
      this.isOpen = true;
      console.log(this.title);
      if(!this.title || this.title !== null && this.title.length === 0){
        this.titleWarning = emptyField;
      }
      else
        this.titleWarning = null;
    },
    addressChange() {
      this.isOpen = true;
      if(!this.address || this.address !== null && this.address.length === 0)
        this.addressWarning = emptyField;
      else
        this.addressWarning = null;
    },
    fullnameChange() {
      this.isOpen = true;
      if(!this.fullname || this.fullname !== null && this.fullname.length === 0)
        this.fullnameWarning = emptyField;
      else
        this.fullnameWarning = null;
    },
    jobChange() {
      this.isOpen = true;
      if(!this.job || this.job !== null && this.job.length === 0)
        this.jobWarning  = emptyField;
      else
        this.jobWarning = null;
    },
    emailChange() {
      this.isOpen = true;
      if(!this.email || this.email !== null && this.email.length === 0)
        this.emailWarning = emptyField;
      else if(this.email != null && !isValidEmail(this.email))
        this.emailWarning = invalidEmail;
      else
        this.emailWarning = null;
    },
    phoneChange() {
      this.isOpen = true;
      if(!this.phone || this.phone !== null && this.phone.length === 0)
        this.phoneWarning = emptyField;
      else if(this.phone != null && !isValidPhoneNumber(this.phone))
        this.phoneWarning = invalidNumber;
      else
        this.phoneWarning = null;
    },
  },
  computed: {
    isWarning: function () {
      return (
        this.titleWarning ||
        this.addressWarning ||
        this.fullnameWarning ||
        this.jobWarning ||
        this.emailWarning ||
        this.phoneWarning
      );
    },
  },
};
</script>
