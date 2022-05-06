import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    curnetPosts: 10,
    pageActive: 1
  },
  getters: {
    allPost(state) {
      return state.posts
    },
    pages(state) {
      return Math.ceil(state.posts.length / state.curnetPosts);
    },
    paginationPage(state) {
      let from = (state.pageActive - 1) * state.curnetPosts;
      let to = from + state.curnetPosts;

      return state.posts.slice(from, to);
    },
  },
  mutations: {
    updatePost(state, data) {
      state.posts = data
    },
    searchPost(state, text) {
      if (text !== '') {
        state.posts = state.posts.filter(item => {
          switch (true) {
            case ((item.title.toLowerCase().lastIndexOf(text.trim()) + 1 >= 1 && item.title.toLowerCase().lastIndexOf(text.trim()) !== item.title.length) || (item.body.toLowerCase().lastIndexOf(text.trim()) + 1 >= 1 && item.body.toLowerCase().lastIndexOf(text.trim()) !== item.body.length)):
              return item
          }
        })
      }
    },
    curentActivePage(state, activePage) {
      state.pageActive = activePage
    },
    sortBy(state, condition) {
      if (condition === "id") {
        state.posts.sort((a, b) => b.id - a.id);
      }
      if (condition === "title") {
        state.posts.sort((a, b) => a.title.localeCompare(b.title));
      }
      if (condition === "body") {
        state.posts.sort((a, b) => a.body.localeCompare(b.body));
      }
    }
  },
  actions: {
    async getPosts({ commit }) {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
      const dataPosts = await data.json();

      commit('updatePost', dataPosts)
    }
  },
})
