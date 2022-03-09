<script setup>
import BaseInput from "../../components/base/base-input/base-input.vue";
import BaseTitle from "../../components/base/base-title/base-title.vue";

const props = defineProps({ data: Object });


</script>


<template>
  <section class="personal-information">
    <div class="left">
      <base-title> Hey, Rocketeer, what are your coordinates?</base-title>
      <div class="form">
        <base-input
            v-model="data.firstName.value"
            :error="data.firstName.error"
            placeholder="First Name"
            type="text"
        />
        <base-input
            v-model="data.lastName.value"
            :error="data.lastName.error"
            placeholder="Last Name"
            type="text"
        />
        <base-input
            v-model="data.email.value"
            :error="data.email.error"
            placeholder="Email"
            type="email"
        />
        <base-input
            v-model="data.phone.value"
            :error="data.phone.error"
            placeholder="+995 5__ __ __ __"
            type="text"
        />
      </div>
    </div>
    <div class="right">
      <base-title>Redberry Origins</base-title>
      <p class="form-description">
        You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question
        about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot
        the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company
        was inspired - Redberry 😇
      </p>
    </div>
  </section>
</template>


