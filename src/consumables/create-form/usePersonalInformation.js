import { reactive, watch } from "vue";

export const usePersonalInformation = () => {
  // First Name
  const firstName = reactive({
    value: null,
    error: "",
    validation: (newVal) => {
      if (!newVal || newVal.length < 0) {
        firstName.error = "First Name is required";
        return false;
      }
      if (!newVal || newVal.length < 2) {
        firstName.error = "First Name should be at least 2 chars";
        return false;
      }
      firstName.error = "";
      return true;
    },
  });

  watch(
      () => firstName.value,
      (newVal) => firstName.validation(newVal)
  );

  // Last name
  const lastName = reactive({
    value: null,
    error: "",
    validation: (newVal) => {
      if (!newVal || newVal.length < 0) {
        lastName.error = "Last Name is required";
        return false;
      }
      if (!newVal || newVal.length < 2) {
        lastName.error = "Last Name should be at least 2 chars";
        return false;
      }
      lastName.error = "";
      return true;
    },
  });

  watch(
      () => lastName.value,
      (newVal) => lastName.validation(newVal)
  );

  // Email
  const email = reactive({
    value: null,
    error: "",
    validation: (newVal) => {
      if (newVal && newVal.length < 0) {
        email.error = "Email is required";
        return false;
      }
      if (
          !newVal ||
          !newVal
              .toLowerCase()
              .match(
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              )
      ) {
        email.error = "Email format is invalid";
        return false;
      }
      email.error = "";
      return true;
    },
  });

  watch(
      () => email.value,
      (newVal) => email.validation(newVal)
  );

  // Phone
  const phone = reactive({
    value: null,
    error: "",
    validation: (newVal) => {
      if (newVal && newVal.length > 0 && newVal.length < 13) {
        phone.error = "Phone code is invalid";
        return false;
      }
      phone.error = "";
      return true;
    },
  });

  watch(
      () => phone.value,
      (newVal) => phone.validation(newVal)
  );

  return {
    firstName,
    lastName,
    email,
    phone,
  };
};
