<script setup>
import BaseTitle from "../../components/base/base-title/base-title.vue";
import BaseCheckbox from "../../components/base/base-checkbox/base-checkbox.vue";
import BaseDatePicker from "../../components/base/base-date-picker/base-date-picker.vue";

const props = defineProps({ data: Object });


</script>


<template>
  <section class="personal-information">
    <div class="left">
      <base-title> Covid Stuff</base-title>
      <div class="form">
        <base-checkbox
            v-model="data.workPreference.value"
            :error="data.workPreference.error"
            :options="data.workPreference.options"
            :title="data.workPreference.title"
        />
        <base-checkbox
            v-model="data.hadCovid.value"
            :error="data.hadCovid.error"
            :options="data.hadCovid.options"
            :title="data.hadCovid.title"
        />
        <base-date-picker
            v-if="data.hadCovid.value"
            v-model="data.hadCovidAt.value"
            :error="data.hadCovidAt.error"
            :title="data.hadCovidAt.title"
            placeholder="Date"
        />
        <base-checkbox
            v-model="data.isVaccinated.value"
            :error="data.isVaccinated.error"
            :options="data.isVaccinated.options"
            :title="data.isVaccinated.title"
        />
        <base-date-picker
            v-if="data.isVaccinated.value"
            v-model="data.vaccinatedAt.value"
            :error="data.vaccinatedAt.error"
            :title="data.vaccinatedAt.title"
            placeholder="Date"

        />
      </div>
    </div>
    <div class="right">
      <base-title>Redberry Covid Policies</base-title>
      <p class="form-description">
        As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as
        safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit
        our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we
        think face-to-face communications > Zoom meetings. Both on the fun and productivity scales.
      </p>
    </div>
  </section>
</template>


