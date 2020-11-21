import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    firstName: "taofeek",
    lastName: "adebayo",
    edit: false,
    title: "",
    postId: 0,
    description: "",
    posts: [
      { id: 1, title: "post one", description: "my number one post" },
      { id: 2, title: "post two", description: "my number two post" },
      { id: 3, title: "post three", description: "my number three post" },
      { id: 4, title: "post four", description: "my number four post" },
    ],
  },
  mutations: {
    editPost(state, payload) {
      if (!state.edit) {
        const { post } = payload;
        state.postId = post.id;
        state.title = post.title;
        state.description = post.description;
      }
    },
    submitPost(state, payload) {
      const { post } = payload;
      let getPost = state.posts.find((postal) => postal.id === post.id);
      getPost.title = state.title;
      getPost.description = state.description;
      state.postId = 0;
    },
    updateMessage(state, title) {
      state.title = title;
    },
    updateDescription(state, description) {
      state.description = description;
    },
    deletePost(state, payload) {
      console.log("welcome");
      const filterState = [...state.posts];
      const filterPost = filterState.filter((post) => post.id !== payload.id);
      let animates = document.querySelectorAll(".postBox");
      animates.forEach((animate) => {
        animate.onclick = function() {
          this.classList.add("animate");
        };
      });
      setTimeout(() => {
        state.posts = filterPost;
      }, 1000);
    },
  },

  actions: {
    change({ commit }, payload) {
      commit("editPost", payload);
    },
    write({ commit }, payload) {
      commit("deletePost", payload);
    },
    submit({ commit }, payload) {
      commit("submitPost", payload);
    },
  },
});

export default store;
