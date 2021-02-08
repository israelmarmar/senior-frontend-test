<template>
  <div
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
      isWarning ? 'h-location-warning' : '',
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
      <button @click="close" class="text-black">
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
      :warning.sync="titleWarning"
    />
    <Input
      v-model="address"
      id="address"
      label="Enter the address"
      :warning.sync="addressWarning"
    />
    <h3 class="text-twelve text-blue-header">CONTACT INFORMATION</h3>
    <hr class="m-line-location border-line" />
    <Input
      v-model="fullname"
      id="fullname"
      label="Full name"
      :warning.sync="fullnameWarning"
    />
    <Input
      v-model="job"
      id="job"
      label="Job Position"
      :warning.sync="jobWarning"
    />
    <Input
      v-model="email"
      id="email"
      label="Email address"
      placeholder="name@example.com"
      type="email"
      :warning.sync="emailWarning"
    />
    <Input
      v-model="phone"
      id="phone"
      label="Phone"
      placeholder="(xxx) xxx-xxxx"
      type="tel"
      :warning.sync="phoneWarning"
    />
    <button
      class="bg-blue-add p-save text-white w-save rounded-all"
      @click="saveAll"
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
    data: Object
  },
  components: {
    Input,
  },
  methods: {
    reset(){
      this.title = "";
      this.address = "";
      this.fullname = "";
      this.job = "";
      this.email = "";
      this.phone = "";
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
      this.reset();
    },
    check() {
      if (!isValidEmail(this.email)) this.emailWarning = invalidEmail;
      if (!isValidPhoneNumber(this.phone)) this.phoneWarning = invalidNumber;
      if (this.title.length === 0) this.titleWarning = emptyField;
      if (this.address.length === 0) this.addressWarning = emptyField;
      if (this.fullname.length === 0) this.fullnameWarning = emptyField;
      if (this.job.length === 0) this.jobWarning = emptyField;
      if (this.email.length === 0) this.emailWarning = emptyField;
      if (this.phone.length === 0) this.phoneWarning = emptyField;

      return (
        isValidEmail(this.email) &&
        isValidPhoneNumber(this.phone) &&
        this.title.length > 0 &&
        this.address.length > 0 &&
        this.fullname.length > 0 &&
        this.job.length > 0 &&
        this.email.length > 0 &&
        this.phone.length > 0
      );
    },
    saveAll() {
      if (this.check()) {
        this.save(this.$data, this.indexCurr);
        this.isOpen = false;
        this.indexCurr = null;
      }
    },
  },
  watch: {
    title() {
      this.isOpen = true;
      this.titleWarning = null;
    },
    address() {
      this.isOpen = true;
      this.addressWarning = null;
    },
    fullname() {
      this.isOpen = true;
      this.fullnameWarning = null;
    },
    job() {
      this.isOpen = true;
      this.jobWarning = null;
    },
    email() {
      this.isOpen = true;
      this.emailWarning = null;
    },
    phone() {
      this.isOpen = true;
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
