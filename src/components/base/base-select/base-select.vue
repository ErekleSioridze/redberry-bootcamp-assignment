<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  modelValue: String,
  placeholder: String,
  options: Array
});

const emit = defineEmits(["update:modelValue"]);
const dropdown = ref(false);

const val = computed({
  get() {
    return props.modelValue;
  },
  set(newVal) {
    emit("update:modelValue", newVal);
  }
});

</script>


<template>
  <div class="base-select" @click="dropdown = !dropdown">
    <div class="value">
      <span>
        {{ val && val.name || placeholder }}
      </span>
      <img src="../../../assets/images/arrow-down.png" />
    </div>

    <div v-if="dropdown" class="base-input-dropdown">
      <div v-for="(option,i) in options" :key="i" class="option" @click.stop="val = option; dropdown = false">
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-select {
  position: relative;
  margin-bottom: 5rem;

  .value {
    width: 45.5rem;
    height: 5.5rem;
    padding: 1.7rem 1rem 1.7rem 5.7rem;
    display: flex;
    align-items: center;
    font-style: italic;
    font-size: 1.4rem;
    border: 1px solid #525557;
    cursor: pointer;
    color: black;
    justify-content: space-between;
  }

  .base-input-dropdown {
    position: absolute;
    left: 0;
    background-color: var(--gray-400);
    width: 100%;

    .option {
      padding: 1rem;
      cursor: pointer;
    }
  }
}

</style>
