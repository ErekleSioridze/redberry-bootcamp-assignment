<script setup>
import { onMounted, ref } from "vue";
import { $axios } from "../utils/axios/axios-instance";
import BaseCheckbox from "../components/base/base-checkbox/base-checkbox.vue";
import BaseTextarea from "../components/base/base-textarea/base-textarea.vue";
import BaseDatePicker from "../components/base/base-date-picker/base-date-picker.vue";
import { useTechnicalSkillset } from "../consumables/create-form/useTechnicalSkillset";


const data = ref([]);
const collapsedApplications = ref([]);

const { skills } = useTechnicalSkillset();
onMounted(async () => [
  data.value = await $axios.get("applications", {
    params: {
      token: "9b225fdb-29e2-4caa-a57b-9e06aad2eddc"
    }
  }).then(r => r.data)
]);

const onCollapseClick = (key) => {
  const contains = collapsedApplications.value.includes(key);
  if (contains) {
    collapsedApplications.value = collapsedApplications.value.filter(el => el !== key);
  } else {
    collapsedApplications.value.push(key);
  }
};

</script>


<template>
  <div class="submitted-applications">
    <div class="title">
      Submitted Applications
    </div>
    <div class="applications">
      <div
          v-for="(application,i) in data"

          :key="i"
          class="application"
      >
        <div :class="['header', {collapsed: collapsedApplications.includes(i)}]" @click="onCollapseClick(i)">
          <span>{{ i + 1 }}</span>
          <img src="../assets/images/arrow-down-white.svg">
        </div>
        <div v-if="collapsedApplications.includes(i)" class="body">
          <div class="block">
            <section class="personal-information">
              <div class="title">
                Personal Information
              </div>
              <div class="info">
                <div class="inf">
                  <div class="key">
                    First Name
                  </div>
                  <div class="value">
                    {{ application.first_name }}
                  </div>
                </div>
                <div class="inf">
                  <div class="key">
                    Last Name
                  </div>
                  <div class="value">
                    {{ application.last_name }}
                  </div>
                </div>
                <div class="inf">
                  <div class="key">
                    E Mail
                  </div>
                  <div class="value">
                    {{ application.email }}
                  </div>
                </div>
                <div class="inf">
                  <div class="key">
                    Phone
                  </div>
                  <div class="value">
                    {{ application.phone }}
                  </div>
                </div>
              </div>
            </section>
            <section class="skillset">
              <div class="title">
                Skillset
              </div>
              <div class="info">
                <div v-for="(skill,i) in application.skills" :key="i" class="inf">
                  <div class="key">
                    {{ skills.find(el => el.value === skill.id).name }}
                  </div>
                  <div class="value">
                    Years of Experience {{ skill.experience }}
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="block">
            <section class="covid-situation">
              <div class="title">
                Covid Situation
              </div>
              <div class="info">
                <base-checkbox
                    v-model="application.work_preference"
                    :disabled="true"
                    :options="[{name: 'From Sairme Office', value: 'from_office'},{name: 'From Home', value: 'from_home'},{name: 'Hybrid', value: 'hybrid'}]"
                    title="how would you prefer to work?"
                    white
                />
                <base-checkbox
                    v-model="application.had_covid"
                    :disabled="true"
                    :options="[{name: 'Yes', value: true},{name: 'No', value: false}]"
                    title="Did you have covid 19?"
                    white
                />
                <base-date-picker
                    v-model="application.had_covid_at"
                    :disabled="true"
                    title="When did you have covid 19?"
                />
                <base-checkbox
                    v-model="application.vaccinated"
                    :disabled="true"
                    :options="[{name: 'Yes', value: true},{name: 'No', value: false}]"
                    title="Have you been vaccinated?"
                />
                <base-date-picker
                    v-model="application.vaccinated_at"
                    :disabled="true"
                    title="When did you get covid vaccine?"
                    white
                />
              </div>

            </section>
            <section class="insights">
              <div class="title">
                Insigts
              </div>
              <div class="info">
                <base-checkbox
                    v-model="application.will_organize_devtalk"
                    :disabled="true"
                    :options="[{name: 'Yes', value: true},{name: 'No', value: false}]"
                    title="Would you attend Devtalks and maybe also organize your own?"
                />
                <base-textarea
                    v-model="application.devtalk_topic"
                    :disabled="true"
                    title="What would you speak about at Devtalk?"
                />
                <base-textarea
                    v-model="application.something_special"
                    :disabled="true"
                    title="Tell us somthing special"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.submitted-applications {
  padding-top: 9.5rem;
  width: 70%;
  margin: 0 auto;
  background-color: var(--black);
  color: var(--white);
  min-height: 100vh;

  .title {
    font-size: 9.6rem;
    font-weight: bold;
    font-family: Rowdies;
    margin-bottom: 5.5rem;
  }

  .applications {

    .application {
      width: 90%;
      color: var(--black);
      margin-bottom: 1rem;

      .header {
        padding: 2.5rem 1.5rem;
        background-color: var(--red-300);
        color: var(--white-100);
        display: flex;
        justify-content: space-between;

        &.collapsed {
          background-color: var(--red-100);

          img {
            transform: rotate(180deg);
          }
        }
      }


      .body {
        background-color: var(--white-100);
        padding: 3.5rem 5rem;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-between;
        align-content: space-between;

        .block {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .base-datepicker {
          width: 35rem;
        }

        .base-textarea {
          width: 45rem;
        }

        .title {
          font-style: italic;
          font-weight: normal;
          font-size: 1.8rem;
          text-decoration-line: underline;
          color: var(--red-300);
          margin-bottom: 4rem;
          font-family: Montserrat;
        }


        .info {

          .inf {
            margin-bottom: 2rem;
            display: flex;
            align-items: center;
            width: 50rem;

            .key,
            .value {
              width: 50%;
            }

          }
        }

        section {
          width: 50%;
          margin-bottom: 16rem;
        }

      }


    }
  }
}
</style>
