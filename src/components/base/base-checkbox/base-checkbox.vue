<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
  options: Array,
  error: String,
  modelValue: String,
  disabled: Boolean
});

const emit = defineEmits(["update:modelValue"]);

const val = computed({
  get() {
    return props.modelValue;
  },
  set(newVal) {
    emit("update:modelValue", newVal.value);
  }
});

const onOptionClick = (option) => {
  if (props.disabled) return;
  val.value = option;
};


</script>

<template>
  <div :class="['base-checkbox']">
    <div class="title">
      {{ title }}
    </div>
    <div v-if="!!error" class="error">
      *{{ error }}
    </div>
    <div class="options">
      <div v-for="(option, i) in options" :key="i" :class="['option',{active: val === option.value}]"
           @click="onOptionClick(option)">
        <div class="circle" />
        <span>{{ option.name }}</span>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.base-checkbox {


  color: var(--black);
  margin-bottom: 5rem;

  .title {
    font-size: 1.8rem;
    margin-bottom: 1.3rem;
  }

  .error {
    padding-left: 5.7rem;
    font-family: Montserrat;
    font-style: italic;
    font-size: 1.4rem;
    color: var(--red-300);
    margin-top: 0.5rem;
  }

  .options {
    display: flex;
    flex-direction: column;


    .option {
      cursor: pointer;
      margin: 1rem 0;
      font-size: 1.4rem;
      display: flex;
      align-items: center;

      &.active {
        .circle {
          position: relative;

          &::before {
            position: absolute;
            content: "";
            width: 40%;
            height: 40%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            border: 1px solid var(--black);
          }
        }
      }

      .circle {
        margin-right: 0.5rem;
        width: 1.2rem;
        height: 1.2rem;
        border: 1px solid var(--black);
        border-radius: 50%;
        background-color: transparent;
      }
    }
  }
}
</style>
