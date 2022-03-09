<script setup>
import BaseTitle from "../../components/base/base-title/base-title.vue";
import BaseSelect from "../../components/base/base-select/base-select.vue";
import { ref } from "vue";
import BaseInput from "../../components/base/base-input/base-input.vue";

const props = defineProps({
  selectedSkills: Map,
  skills: Array,
  addSkill: Function,
  deleteSkill: Function,
  skillError: String
});

const skillData = ref({
  skill: null,
  duration: null
});

const onAddSkill = () => {
  props.addSkill({
    name: skillData.value?.skill?.name,
    id: skillData.value?.skill?.value,
    duration: skillData.value?.duration
  });

  if (skillData.value?.skill && skillData.value.duration) {
    skillData.value.skill = null;
    skillData.value.duration = null;
  }
};


</script>

<template>
  <section>
    <div class="left">
      <base-title>Tell us about your skills</base-title>
      <div class="form">
        <base-select v-model="skillData.skill" :options="skills" placeholder="Skill" />
        <base-input v-model="skillData.duration" placeholder="Experience Duration in Years" />
        <div class="error">
          {{ skillError }}
        </div>
        <button class="add" @click="onAddSkill">Add Programming Language</button>
      </div>

      <div class="selected-skills">
        <div v-for="skill of selectedSkills" class="selected-skill">
          <span class="name">{{ skill[1].name }}</span>
          <span class="duration">{{ skill[1].duration }}</span>
          <img alt="" class="remove" src="../../assets/images/Remove.png" @click="deleteSkill(skill[1].id)">
        </div>
      </div>

    </div>
    <div class="right">
      <base-title>A bit about our battles</base-title>
      <p class="form-description">
        As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety
        of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack
        with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we
        have set foot in the web3 industry.
      </p>
    </div>
  </section>
</template>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;

  .base-input {
    margin-bottom: 2rem;
  }

  button {
    cursor: pointer;
    width: 20rem;
    height: 3.2rem;
    background-color: var(--red-300);
    color: var(--white-100);
    border: 0;
    margin-left: auto;
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

.selected-skills {
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

  .selected-skill {
    margin-bottom: 1.7rem;
    width: 40rem;
    height: 5rem;
    padding: 0 2rem;
    border: 1px solid #525557;
    background-color: var(--white-100);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-style: italic;
    font-size: 1.4rem;
    color: var(--black);
  }


}
</style>
