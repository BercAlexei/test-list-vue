<template>
  <div>
    <TableRow
      v-for="post in paginationPage"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :body="post.body"
    />
  </div>
</template>

<script>
import TableRow from "../components/tableRow.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    TableRow,
  },
  data() {
    return {
      id: this.$router.currentRoute.params["id"],
    };
  },
  computed: {
    ...mapGetters(["paginationPage", "pages"]),
  },
  methods: {
    ...mapMutations(["curentActivePage"]),
  },
  watch: {
    $route(toR) {
      this.curentActivePage(toR.params["id"]);
    },
  },
  mounted() {
    this.curentActivePage(this.id);
  },
};
</script>

<style>
</style>