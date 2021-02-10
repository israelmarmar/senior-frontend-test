<template>
  <div>
    <nav :class="['nav', isUpdated ? 'opacity-100' : 'opacity-0']">
      <fa :icon="['fas', 'check']" class="text-check" />
      <h3 class="text-twelve">THE LOCATION HAS BEEN UPDATED</h3>
    </nav>
    <div class="container">
      <div>
        <h1 class="title text-blue-header my-title">Offices</h1>
        <LocationCard
          :rendernumber="componentKey"
          ref="locationcard"
          :save="save"
          @input="pageTitle = $event"
        />
        <OfficeCard
          v-for="(office, index) of offices"
          v-bind:key="office.title + index"
          :title="office.title"
          :address="office.address"
          :fullname="office.fullname"
          :job="office.job"
          :email="office.email"
          :phone="office.phone"
          :remove="() => remove(index)"
          :editOffice="() => editOffice(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import OfficeCard from "../components/officeCard.vue";
import LocationCard from "../components/locationCard.vue";
import offices from "../data/fake-data.json";

export default {
  data() {
    return {
      offices,
      isUpdated: false,
      isLocationCardOpen: false,
      isEdit: false,
      componentKey: 0,
    };
  },
  components: {
    OfficeCard,
    LocationCard,
  },
  methods: {
    forceRerender() {
      setTimeout(()=>this.componentKey += 1, 500);
    },
    save(data, index) {
      this.forceRerender();
      if (index != null) {
        const offices = [...this.offices];
        offices[index] = {
          title: data.title,
          address: data.address,
          fullname: data.fullname,
          job: data.job,
          email: data.email,
          phone: data.phone,
        };
        this.offices = offices;
      } else{
        this.offices.unshift({
          title: data.title,
          address: data.address,
          fullname: data.fullname,
          job: data.job,
          email: data.email,
          phone: data.phone,
        });
      }
    },
    remove(index) {
      this.$delete(this.offices, index);
    },
    editOffice(index) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.isEdit = true;
      this.$refs.locationcard.open(this.offices[index], index);
    },
  },
  watch: {
    offices() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.isUpdated = true;
      setTimeout(() => (this.isUpdated = false), 4000);
    },
  },
};
</script>

<style>
.nav {
  @apply bg-white h-navbar flex content-center justify-center items-center space-x-check transition-opacity duration-500 ease-in-out;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}

.title {
  font-family: "Proxima Nova", Arial, sans-serif;
  font-style: normal;
  display: block;
  font-weight: 300;
  font-size: 64px;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
