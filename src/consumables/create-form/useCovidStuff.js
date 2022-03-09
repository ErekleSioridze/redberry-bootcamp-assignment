import { reactive, watch } from "vue";

export const useCovidStuff = () => {
  const workPreference = reactive({
    value: null,
    error: "",
    options: [
      {
        name: "From Sairme Office",
        value: "from_office",
      },
      {
        name: "From Home",
        value: "from_home",
      },
      {
        name: "Hybrid",
        value: "hybrid",
      },
    ],
    title: "how would you prefer to work?",
    validation: (newVal) => {
      if (!newVal) {
        workPreference.error = "Is Required";
        return false;
      }
      workPreference.error = "";
      return true;
    },
  });

  watch(
      () => workPreference.value,
      (newVal) => workPreference.validation(newVal)
  );

  const hadCovid = reactive({
    value: null,
    error: "",
    options: [
      {
        name: "Yes",
        value: true,
      },
      {
        name: "No",
        value: false,
      },
    ],
    title: "Did you contact covid 19? :(",
    validation: (newVal) => {
      if (newVal === null || newVal === undefined) {
        hadCovid.error = "Is Required";
        return false;
      }
      hadCovid.error = "";
      return true;
    },
  });

  watch(
      () => hadCovid.value,
      (newVal) => hadCovid.validation(newVal)
  );

  const hadCovidAt = reactive({
    value: null,
    error: "",
    title: "When?",
    validation: (newVal) => {
      if ((!newVal || !newVal.length) && hadCovid.value) {
        hadCovidAt.error = "Is Required";
        return false;
      }
      hadCovidAt.error = "";
      return true;
    },
  });

  watch(
      () => hadCovidAt.value,
      (newVal) => hadCovidAt.validation(newVal)
  );

  const isVaccinated = reactive({
    value: null,
    error: "",
    options: [
      {
        name: "Yes",
        value: true,
      },
      {
        name: "No",
        value: false,
      },
    ],
    title: "Have you been vaccinated?",
    validation: (newVal) => {
      if (newVal === null || newVal === undefined) {
        isVaccinated.error = "Is Required";
        return false;
      }
      isVaccinated.error = "";
      return true;
    },
  });

  watch(
      () => isVaccinated.value,
      (newVal) => isVaccinated.validation(newVal)
  );

  const vaccinatedAt = reactive({
    value: null,
    error: "",
    title: "When did you get your last covid vaccine?",
    validation: (newVal) => {
      if ((!newVal || !newVal.length) && isVaccinated.value) {
        vaccinatedAt.error = "Is Required";
        return false;
      }
      vaccinatedAt.error = "";
      return true;
    },
  });

  watch(
      () => vaccinatedAt.value,
      (newVal) => vaccinatedAt.validation(newVal)
  );

  return {
    workPreference,
    hadCovid,
    hadCovidAt,
    isVaccinated,
    vaccinatedAt,
  };
};
