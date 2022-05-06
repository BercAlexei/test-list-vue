<template>
  <form class="search" @submit.prevent="search()">
    <input
      type="text"
      v-model="searchText"
      class="search__input"
      placeholder="Поиск"
    />
    <button class="search__btn" for="search">
      <img src="assets/Vector.svg" alt="search" />
    </button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    ...mapMutations(["searchPost"]),
    search() {
      this.searchText.toLowerCase();
      this.searchPost(this.searchText);
      this.$router.push("/1");
      this.searchText = "";
    },
  },
};
</script>

<style scoped lang="scss">
.search {
  position: relative;
  width: 631px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #5a5c66;
  padding: 0 26px;
  margin-bottom: 15px;

  &__input {
    border: none;
    padding: 18px 0;
    width: 100%;
    color: white;
    background: #5a5c66;
    outline: none;
    margin-right: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    &::placeholder {
      color: #b3b7bf;
    }
  }

  &__btn {
    cursor: pointer;
    background: transparent;
    border: none;
  }
}
</style>
