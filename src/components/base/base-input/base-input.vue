<script setup>
import { computed } from "vue";

const props = defineProps({
  type: String,
  modelValue: String,
  placeholder: String,
  error: String,
  title: String
});


const emit = defineEmits(["update:modelValue"]);

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
  <div class="base-input">
    <div v-if="!!title" class="title">
      {{ title }}
    </div>
    <input v-model="val" :class="{invalid: !!error}" :placeholder="props.placeholder" :type="props.type">
    <div v-if="error" class="error">
      *{{ error }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-input {
  color: var(--black);
  margin-bottom: 7.7rem;

  .title {
    font-size: 1.8rem;
    margin-bottom: 1.3rem;
  }

  input {
    width: 45.5rem;
    height: 5.5rem;
    padding-left: 5.7rem;
    padding-top: 1.7rem;
    padding-bottom: 1.7rem;
    display: flex;
    align-items: center;
    font-family: Montserrat;
    font-style: italic;
    font-size: 1.4rem;

    &:focus {
      outline: 0;
    }

    &.invalid {
      border: 1px solid var(--red-300);
    }
  }

  .error {
    padding-left: 5.7rem;
    font-family: Montserrat;
    font-style: italic;
    font-size: 1.4rem;
    color: var(--red-300);
    margin-top: 0.5rem;
  }

}
</style>
