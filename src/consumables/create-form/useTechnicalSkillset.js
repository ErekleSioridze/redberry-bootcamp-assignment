import { onMounted, ref } from "vue";
import { $axios } from "../../utils/axios/axios-instance";

export const useTechnicalSkillset = () => {
  const selectedSkills = ref(new Map());
  const skills = ref([]);
  const skillError = ref("");

  onMounted(async () => {
    skills.value = await $axios.get("skills").then((r) =>
        r.data.map((skill) => ({
          value: skill.id,
          name: skill.title,
        }))
    );
  });

  const addSkill = ({ name, id, duration }) => {
    if (selectedSkills.value.get(id)) {
      skillError.value = "Skill Already Exists";
      return;
    }

    if (!name || !id || !duration) {
      skillError.value = "Skill/Duration is Required";
      return;
    }

    selectedSkills.value.set(id, {
      name,
      id,
      duration,
    });
    skillError.value = "";
  };

  const deleteSkill = (id) => {
    selectedSkills.value.delete(id);
    skillValidation();
  };

  const skillValidation = () => {
      if (selectedSkills.value.size === 0) {
      skillError.value = "You must select at least one skill";
      return false;
    }
    skillError.value = "";
    return true;
  };

  return {
    selectedSkills,
    skills,
    addSkill,
    deleteSkill,
    skillValidation,
    skillError,
  };
};
