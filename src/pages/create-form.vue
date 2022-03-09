<script setup>
import { ref } from "vue";

import PersonalInformation from "../views/create-form/personal-information.vue";
import TechnicalSkillset from "../views/create-form/technical-skillset.vue";
import PageSwitcher from "../components/create-form/page-switcher/page-switcher.vue";
import CovidStuff from "../views/create-form/covid-stuff.vue";
import AboutMe from "../views/create-form/about-me.vue";
import BaseButton from "../components/base/base-button/base-button.vue";

import { usePersonalInformation } from "../consumables/create-form/usePersonalInformation";
import { useTechnicalSkillset } from "../consumables/create-form/useTechnicalSkillset";
import { useCovidStuff } from "../consumables/create-form/useCovidStuff";
import { useAboutMe } from "../consumables/create-form/useAboutMe";
import { $axios } from "../utils/axios/axios-instance";
import { useRouter } from "vue-router";

const views = ["PersonalInformation", "TechnicalSkillSet", "Covid", "RedberrianInsights", "Submit", "ThanksForJoining"];
const currentView = ref("PersonalInformation");

const { firstName, lastName, email, phone } = usePersonalInformation();
const { addSkill, deleteSkill, selectedSkills, skills, skillValidation, skillError } = useTechnicalSkillset();
const { isVaccinated, hadCovidAt, hadCovid, workPreference, vaccinatedAt } = useCovidStuff();
const { somethingSpecial, devTalkTopic, willOrganizeDevtalk } = useAboutMe();

const router = useRouter();


function onPageChange(page) {
  let shouldGoNext;
  switch (currentView.value) {
    case "PersonalInformation":
      shouldGoNext = [
        firstName.validation(firstName.value),
        lastName.validation(lastName.value),
        email.validation(email.value),
        phone.validation(phone.value)
      ].filter(el => !el);
      if (shouldGoNext.length) return;
      currentView.value = page;
      break;
    case "TechnicalSkillSet":
      shouldGoNext = skillValidation();
      if (!shouldGoNext) return;
      currentView.value = page;
      break;
    case "Covid":
      shouldGoNext = [
        isVaccinated.validation(isVaccinated.value),
        hadCovidAt.validation(hadCovidAt.value),
        hadCovid.validation(hadCovid.value),
        workPreference.validation(workPreference.value),
        vaccinatedAt.validation(vaccinatedAt.value)
      ].filter(el => !el);

      if (shouldGoNext.length) return;
      currentView.value = page;
      break;
    case "RedberrianInsights":
      shouldGoNext = [
        somethingSpecial.validation(somethingSpecial.value),
        willOrganizeDevtalk.validation(willOrganizeDevtalk.value),
        hadCovid.validation(hadCovid.value),
        willOrganizeDevtalk.validation(willOrganizeDevtalk.value)
      ].filter(el => !el);
      if (shouldGoNext.length) return;
      currentView.value = page;
      break;
    case "Submit":
      currentView.value = "RedberrianInsights";
  }
}

async function submitForm() {
  const skills = [];
  for (const value of selectedSkills.value.values()) {
    skills.push(({
      id: value.id,
      experience: value.duration
    }));
  }
  const data =
      {
        token: "9b225fdb-29e2-4caa-a57b-9e06aad2eddc",
        first_name: firstName.value,
        last_name: lastName.value,
        email: email.value,
        phone: phone.value,
        skills,
        work_preference: workPreference.value,
        had_covid: hadCovid.value,
        had_covid_at: hadCovidAt.value,
        vaccinated: isVaccinated.value,
        vaccinated_at: vaccinatedAt.value,
        will_organize_devtalk: willOrganizeDevtalk.value,
        devtalk_topic: devTalkTopic.value,
        something_special: somethingSpecial.value
      };


  if (!data.phone) delete data.phone;
  if (!data.vaccinated_at) delete data.vaccinated_at;
  if (!data.had_covid_at) delete data.had_covid_at;


  const response = await $axios.post("application", data).then(r => r.data);
  currentView.value = "ThanksForJoining";
  setTimeout(() => {
    router.push("/submitted-forms");
  }, 2000);
}

</script>


<template>
  <template v-if="currentView !== 'Submit' && currentView !== 'ThanksForJoining' ">
    <div class="create-form">
      <personal-information
          v-if="currentView === 'PersonalInformation'"
          :data="{firstName, lastName, email,phone}"
      />
      <technical-skillset
          v-if="currentView === 'TechnicalSkillSet'"
          :add-skill="addSkill"
          :delete-skill="deleteSkill"
          :selected-skills="selectedSkills"
          :skill-error="skillError"
          :skills="skills"
      />
      <covid-stuff
          v-if="currentView === 'Covid'"
          :data="{isVaccinated, hadCovidAt, hadCovid, workPreference, vaccinatedAt}"
      />
      <about-me
          v-if="currentView === 'RedberrianInsights'"
          :data="{somethingSpecial, devTalkTopic, willOrganizeDevtalk}"
      />
      <section>
        <div class="left">
          <page-switcher
              :current-page="currentView"
              :pages="views"
              @page-change="onPageChange"
          />
        </div>
      </section>
    </div>
  </template>
  <template v-else>
    <div v-if="currentView === 'Submit'" class="submit-form">
      <base-button @click="submitForm">
        Submit
      </base-button>
      <span @click="onPageChange('Submit')">
      go back
    </span>
    </div>
    <div v-else class="thanking">
      <h1>Thanks for Joining 😊</h1>
    </div>
  </template>
</template>


<style lang="scss">
.create-form {
  padding-top: 7rem;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%);
  min-height: 100vh;

  section {
    display: flex;
    padding-bottom: 4rem;

    .base-title {
      margin-bottom: 8rem;
    }

    .left,
    .right {
      display: flex;
      flex-direction: column;
      align-items: center;

    }

    .left {
      width: 50%;

      .form {
        display: flex;
        flex-direction: column;

        .base-input {
          margin-bottom: 4rem;
        }
      }
    }

    .right {
      margin-left: auto;
      width: 50%;
      padding: 0 14rem;

      .form-description {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 2.4rem;
        line-height: 4.8rem;
        display: flex;
        align-items: center;
        letter-spacing: 0.05em;
      }
    }
  }
}

.submit-form,
.thanking {
  background-color: var(--black);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 9.6rem;
    color: var(--red-100);
  }

  span {
    cursor: pointer;
    display: flex;
    margin-top: 4rem !important;
    font-size: 2.4rem;
    text-decoration-line: underline;
    color: var(--white-100);
  }
}
</style>
