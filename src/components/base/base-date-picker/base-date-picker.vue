<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  modelValue: String,
  placeholder: String,
  error: String,
  title: String,
  disabled: Boolean
});

const input = ref();
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
  <div class="base-datepicker">
    <div v-if="!!title" class="title">
      {{ title }}
    </div>

    <div class="input">
      <input
        ref="input"
        v-model="val"
        :class="{invalid: !!error}"
        :disabled="disabled"
        :placeholder="props.placeholder"
        type="text"
        @focus="() => {if(!disabled) input.type = 'date'}"
      >
      <img src="../../../assets/images/calendar.png">
    </div>
    <div v-if="error" class="error">
      *{{ error }}
    </div>
  </div>
</template>


<style lang="scss" scoped>
.base-datepicker {
  color: var(--black);
  margin-bottom: 7.7rem;

  .title {
    font-size: 1.8rem;
    margin-bottom: 1.3rem;
  }

  .input {
    position: relative;
    width: 45.5rem;
    height: 5.5rem;

    input {
      width: 100%;
      height: 100%;
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

    img {
      position: absolute;
      right: 1.5rem;
      top: 50%;
      transform: translateY(-50%);
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

