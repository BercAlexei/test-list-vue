<template>
  <div id="app">
    <div class="container">
      <SearchInput />
      <div class="table">
        <TableHead />
        <router-view />
      </div>
      <div class="controls">
        <BtnControl
          text="Назад"
          :disabled="id == 1 ? true : false"
          @changeActivePage="prevPage()"
        />
        <div class="controls__pages">
          <router-link
            :to="'/' + page"
            class="page"
            active-class="page_active"
            v-for="page in pages"
            :key="page"
          >
            {{ page }}
          </router-link>
        </div>
        <BtnControl
          text="Далее"
          :disabled="id == pages ? true : false"
          @changeActivePage="nextPage()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "./components/searchInput.vue";
import TableHead from "./components/tableHead.vue";
import BtnControl from "./components/btnControl.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    SearchInput,
    TableHead,
    BtnControl,
  },
  data() {
    return {
      id: this.$router.currentRoute.params["id"],
    };
  },
  computed: {
    ...mapGetters(["pages"]),
  },
  methods: {
    ...mapActions(["getPosts"]),
    prevPage() {
      this.$router.push(`/${Number(this.id) - 1}`);
    },
    nextPage() {
      this.$router.push(`/${Number(this.id) + 1}`);
    },
  },
  watch: {
    $route(toRoute) {
      this.id = toRoute.params["id"];
    },
  },
  async mounted() {
    await this.getPosts();
    if (this.id > this.pages) {
      this.$router.push("/1");
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,700&display=swap");

#app {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}

.container {
  position: relative;
  margin: 0 auto;
  max-width: 1077px;
  padding: 23px 0;
}

.table {
  width: 100%;

  &__column {
    cursor: pointer;
    width: 100%;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;

    &:first-child {
      max-width: 110px;
    }
  }

  &__row {
    display: flex;
    justify-content: space-around;
    color: black;
    border-bottom: 1px solid #e3e6ec;
  }
}

.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  .page {
    font-style: italic;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
    margin-right: 10px;
    color: #474955;
    text-decoration: none;

    &:last-child {
      margin: 0;
    }
    &_active {
      color: #7ebc3c;
    }
  }
}
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
