<template>
  <div class="table__row">
    <div class="table__column table__column_center">{{ id }}</div>
    <div class="table__column table__column_left">{{ title }}</div>
    <div class="table__column table__column_left">{{ body }}</div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    body: String,
  },
};
</script>

<style lang="scss" scoped>
.table__column {
  display: flex;
  align-items: center;

  padding: 15px 10px;
  cursor: default;
  border-left: 1px solid #e3e6ec;

  &:last-child {
    border-right: 1px solid #e3e6ec;
  }

  &_left {
    text-align: left;
    justify-content: flex-start;
  }

  &_center {
    justify-content: center;
  }
}
</style>