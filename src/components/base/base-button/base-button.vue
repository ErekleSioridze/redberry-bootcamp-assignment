<template>
  <div class="base-button">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.base-button {
  background: var(--red-300);
  border-radius: 50px;
  padding: 2rem 0;
  display: flex;
  font-size: 2.4rem;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  min-width: 39.5rem;
  border: 0;
  color: var(--white-100);
  cursor: pointer;
}
</style>
