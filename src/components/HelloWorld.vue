<template>
  <div class="hello">
    <div class="post-count">
      <div class="postal-count">
        <h5 v-if="posts.length > 0">
          showing <span>{{ posts.length }}</span> posts
        </h5>
        <h5 v-else>No posts this time</h5>
      </div>
    </div>
    <div class="postInline" v-for="post in posts" :key="post.id">
      <div class="postBox">
        <div class="title-desc">
          <input
            v-if="post.id === postId"
            type="text"
            :value="title"
            @input="updateTitle"
          />
          <h5 v-else>{{ post.title }}</h5>
        </div>
        <div class="description">
          <textarea
            v-if="post.id === postId"
            type="text"
            :value="description"
            @input="updateDescription"
          />
          <router-link v-else to="/detail">{{ post.description }}</router-link>
        </div>
        <button
          @click="post.id === postId ? submit({ post }) : change({ post })"
        >
          {{ post.id === postId ? "Update Post" : "Edit Post" }}
        </button>
        <button @click="write({ id: post.id })">Delete Post</button>
      </div>
    </div>
    <button class="click__me">click me</button>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => {
    return {};
  },

  computed: mapState({
    posts: (state) => state.posts,
    showEdit: (state) => state.showEdit,
    postId: (state) => state.postId,
    title: (state) => state.title,
    description: (state) => state.description,
  }),
  methods: {
    ...mapActions(["change", "write", "submit"]),
    updateTitle(e) {
      this.$store.commit("updateMessage", e.target.value);
    },
    updateDescription(e) {
      this.$store.commit("updateDescription", e.target.value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 76px;
  color: green;
}
p {
  font-size: 19px;
  line-height: 10px;
  letter-spacing: 2px;
}
.postInline {
  display: flex;
  width: 600px;
  justify-content: flex-start;
  margin: 10px auto;
  overflow: hidden;
}
.postInline .postBox {
  background: linear-gradient(45deg, gold, yellow);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  transition: 0.4s linear;
}
.postInline .postBox.animate {
  transition: 0.5 linear;
  transform: matrix(1, 2, -1, 1, 600, 400);
}
.postBox h5 {
  width: 150px;
}

.postBox a {
  text-decoration: none;
  color: black;
  line-height: 5px;
  flex-basis: 50%;
  font-weight: 700;
  transition: 0.2s linear;
}
.postBox a:hover {
  color: darkgreen;
}
.postBox button {
  border: none;
  outline: none;
  font-weight: bold;
  padding: 15px 10px;
  text-transform: uppercase;
  cursor: pointer;
  color: black;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
.postBox button:disabled {
  opacity: 0.5;
  pointer-events: none;
}

.postBox button:last-child {
  background-color: red;
  color: white;
  margin-left: 5px;
}

.postBox .title-desc {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.postBox .title-desc input {
  padding: 10px 10px;
  margin: 10px 0;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  outline: none;
}

.postBox .description {
  flex: 1;
}
.postBox .description textarea {
  border: none;
  margin: 10px 0;
  background-color: rgba(255, 255, 255, 0.5);
}

.click__me {
  border: none;
  outline: none;
  width: 600px;
  padding: 15px;
  display: flex;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 19px;
  background-color: black;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.2s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-100%);
}
.post-count {
  width: 600px;
  display: flex;
  margin: 10px auto;
  padding: 0 5px;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: center;
}
.post-count h5 {
  font-size: 22px;
  font-weight: 900;
  font-family: Montserrat, sans-serif;
}
.post-count span {
  padding: 5px 10px;
  border-radius: 3px;
  background: orange;
}
</style>
