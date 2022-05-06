<template>
  <div class="table-head">
    <div class="table__column" @click="sortBy('id')">
      ID <img src="assets/arrow.svg" alt="arrow" />
    </div>
    <div class="table__column" @click="sortBy('title')">
      Заголовок <img src="assets/arrow.svg" alt="arrow" />
    </div>
    <div class="table__column" @click="sortBy('body')">
      Описание <img src="assets/arrow.svg" alt="arrow" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: mapMutations(["sortBy"]),
};
</script>

<style lang="scss" scoped>
.table-head {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #474955;
  padding: 19px 0 16px;
}

.table__column {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  img {
    margin-left: 35px;
  }
}
</style>