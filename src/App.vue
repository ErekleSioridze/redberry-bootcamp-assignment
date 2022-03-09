<script setup></script>

<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rowdies:wght@300;400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --white-100: #ffffff;
  --white-200: #fffcfc;
  --black: #000000;
  --gray-100: #727272;
  --gray-200: #454545;
  --gray-300: #464646;
  --gray-400: #3a3a3a;
  --blue-700: #293b69;
  --red-100: #f05039;
  --red-300: #fe3b1f;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  background-color: var(--black);
  mix-blend-mode: normal;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--white-100);
}
</style>
