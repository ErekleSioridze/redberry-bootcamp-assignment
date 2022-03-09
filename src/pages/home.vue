<script setup>import BaseButton from "../components/base/base-button/base-button.vue";</script>

<template>
  <div class="home">
    <h1>Welcome Rocketeer !</h1>
    <router-link to="/create-form">
      <base-button>
        <span class="no-underline">Start Questionnaire</span>
      </base-button>
    </router-link>
    <router-link to="/submitted-forms">
      <span class="submitted-applications">Submitted Applications</span>
    </router-link>
    <img src="../assets/images/rocketman.png">
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 6.5rem;
  background-image: url("../assets/images/stars.png");


  h1 {
    font-size: 9.6rem;
    font-family: Rowdies, serif;
    color: var(--red-300);
    margin-bottom: 11.5rem;
  }


  .submitted-applications {
    display: flex;
    margin-top: 4rem !important;
    font-size: 2.4rem;
    text-decoration-line: underline;
    color: var(--white-100);
  }

  .no-underline {
    text-decoration: none;
  }
}

</style>
