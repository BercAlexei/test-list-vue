<template>
  <button class="btn" :disabled="btnDisable" @click="changePage()">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    btnDisable: Boolean,
  },
  methods: {
    changePage() {
      this.$emit("changeActivePage");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  border: none;
  background: transparent;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  cursor: pointer;
  color: #474955;

  &:disabled {
    color: #b3b7bf;
    cursor: default;
  }
}
</style>