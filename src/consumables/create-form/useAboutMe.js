import { reactive, watch } from "vue";

export const useAboutMe = () => {
  const willOrganizeDevtalk = reactive({
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
    title: "Would you attend Devtalks and maybe also organize your own?",
    validation: (newVal) => {
      if (newVal === null || newVal === undefined) {
        willOrganizeDevtalk.error = "Is Required";
        return;
      }
      willOrganizeDevtalk.error = "";
      return true;
    },
  });

  watch(
      () => willOrganizeDevtalk.value,
      (newVal) => willOrganizeDevtalk.validation(newVal)
  );

  const devTalkTopic = reactive({
    value: null,
    error: "",
    title: "What would you speak about at Devtalk?",
    validation: (newVal) => {
      if (!newVal.length) {
        devTalkTopic.error = "Is Required";
        return;
      }
      devTalkTopic.error = "";
      return true;
    },
  });

  watch(
      () => devTalkTopic.value,
      (newVal) => devTalkTopic.validation(newVal)
  );

  const somethingSpecial = reactive({
    value: null,
    error: "",
    title: "Tell us something special",
    validation: (newVal) => {
      if (!newVal.length) {
        somethingSpecial.error = "Is Required";
        return;
      }
      somethingSpecial.error = "";
      return true;
    },
  });

  watch(
      () => somethingSpecial.value,
      (newVal) => somethingSpecial.validation(newVal)
  );

  return {
    devTalkTopic,
    willOrganizeDevtalk,
    somethingSpecial,
  };
};
