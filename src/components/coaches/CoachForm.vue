<template>
  <base-card>
    <form class="form-container">
      <div class="form-control">
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" v-model.trim="newCoach.firstName" />
      </div>
      <div class="form-control">
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" v-model.trim="newCoach.lastName" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea rows="5" id="description" v-model.trim="newCoach.description" />
      </div>
      <div class="form-control">
        <label for="lastName">Hourly Rate</label>
        <input type="number" id="rate" v-model.number="newCoach.rate" />
      </div>
      <div class="form-control">
        <h3>Areas of Expertise</h3>
        <div>
          <input type="checkbox" id="frontend" value="frontend" v-model="newCoach.areas" />
          <label for="frontend">Frontend Development</label>
        </div>
        <div>
          <input type="checkbox" id="backend" value="backend" v-model="newCoach.areas" /><label
            for="backend"
            >Backend Development</label
          >
        </div>
        <div>
          <input type="checkbox" id="career" value="career" v-model="newCoach.areas" /><label
            for="career"
            >Career Development</label
          >
        </div>
      </div>
      <BaseButton id="sub-btn" type="submit" mode="flat">Register</BaseButton>
    </form>
  </base-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BaseButton from '../UI/BaseButton.vue'

const newCoach = ref({
  firstName: '',
  lastName: '',
  description: '',
  rate: null,
  areas: [],
})
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: rgb(230, 254, 230);
  outline: none;
  border-color: var(--color-primary-dark);
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: var(--color-primary-dark) solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

#sub-btn {
  margin-top: 2rem;
}
</style>
