<template>
  <form @submit.prevent="FormHandler">
    <input type="text" placeholder="Income Title..." v-model="formData.title" />
    <input
      type="number"
      placeholder="Income Value..."
      v-model="formData.value"
    />
    <textarea
      type="text"
      placeholder="Income Description..."
      v-model="formData.desc"
    />
    <input type="date" placeholder="Income Date..." v-model="formData.date" />
    <input type="submit" value="SUBMIT" />
  </form>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Form",
  props: {
    state: Object,
    type: String,
  },
  setup(props, { emit }) {
    const formData = reactive({
      title: null,
      desc: null,
      value: null,
      date: null,
      category: null,
    });

    function FormHandler() {
      const formattedDate = new Date(formData.date).toISOString();

      emit("add-income", {
        title: formData.title,
        desc: formData.desc,
        value: formData.value,
        date: formattedDate,
        category: props.type,
      });
      formData.title = null;
      formData.desc = null;
      formData.value = null;
      formData.date = null;
      formData.category = null;
    }

    return {
      FormHandler,
      formData,
    };
  },
};
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 2000px) {
    margin-top: 2rem;
    gap: 30px;
  }

  @media (min-width: 768px) {
    margin-top: 0.5rem;
    gap: 20px;
  }
}

form input {
  color: #888;
  border: none;
  outline: none;
  font-size: 10px;
  width: 100%;
  border-radius: 10px;
  background-color: #f2f2f2;

  @media (min-width: 768px) {
    max-width: 300px;
    font-size: 20px;
  }

  @media (min-width: 2000px) {
    max-width: 600px;
    font-size: 40px;
    border-radius: 20px;
  }
}

form input::placeholder {
  color: #838383;
}
form textarea::placeholder {
  color: #838383;
}

form textarea {
  color: #888;
  border: none;
  outline: none;
  font-size: 10px;
  width: 100%;
  border-radius: 10px;
  height: 50px;
  padding: 1rem;
  border: 2px solid #0061c8;
  background-color: #f2f2f2;

  &:focus {
    background-color: #cddeef;
  }

  @media (min-width: 768px) {
    max-width: 300px;
    font-size: 20px;
    height: 150px;
  }

  @media (min-width: 2000px) {
    max-width: 600px;
    font-size: 40px;
    height: 300px;
    border-radius: 20px;
  }
}

form input:not([type="submit"]) {
  display: flex;
  flex-direction: column;
  border: none;
  outline: none;
  padding: 5px 15px;
  border: 2px solid #0061c8;

  &:focus {
    background-color: #cddeef;
  }
}

form input[type="submit"] {
  display: flex;
  flex-direction: column;
  background: none;
  border: none;
  outline: none;

  color: rgb(91, 105, 148);
  font-weight: 500;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  padding: 5px 15px;
  background-color: #ffce00;

  cursor: pointer;
}
</style>
