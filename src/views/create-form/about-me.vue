<script setup>
import BaseTitle from "../../components/base/base-title/base-title.vue";
import BaseCheckbox from "../../components/base/base-checkbox/base-checkbox.vue";
import BaseTextarea from "../../components/base/base-textarea/base-textarea.vue";

const props = defineProps({ data: Object });


</script>


<template>
  <section class="personal-information">
    <div class="left">
      <base-title> What about you?</base-title>
      <div class="form">
        <base-checkbox
            v-model="data.willOrganizeDevtalk.value"
            :error="data.willOrganizeDevtalk.error"
            :options="data.willOrganizeDevtalk.options"
            :title="data.willOrganizeDevtalk.title"
        />
        <base-textarea
            v-model="data.devTalkTopic.value"
            :error="data.devTalkTopic.error"
            :title="data.devTalkTopic.title"
            placeholder="I would..."
        />
        <base-textarea
            v-model="data.somethingSpecial.value"
            :error="data.somethingSpecial.error"
            :title="data.somethingSpecial.title"
        />
      </div>
    </div>
    <div class="right">
      <base-title>Redberrian Insights</base-title>
      <p class="form-description">
        We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday
        celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try
        our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk
        about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We
        hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an
        attendee or a speaker!
      </p>
    </div>
  </section>
</template>


