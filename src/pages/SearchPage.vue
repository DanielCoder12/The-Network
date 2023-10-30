<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-8 post-div">
        <section class="row">
          <h2 class="pt-4">People</h2>
          <div class="col-12">
            <div v-for="profile in profiles" :key="profile.id">
              <SearchProfile :profile="profile" />
            </div>
          </div>
        </section>
        <section class="row">
          <h2>Posts</h2>
          <div class="col-12">
            <div v-for="post in posts" :key="post.id">
              <PostCard :post="post" />

            </div>
            <div class="pb-3">
              <ChangePage />

            </div>

          </div>
        </section>
      </div>
      <div class="col-md-4 display-none display-md">
        <div v-for="ad in ads" :key="ad.title" class="text-center">
          <AdCard :ad="ad" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, watchEffect } from 'vue';
import { AppState } from '../AppState';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { useRoute } from 'vue-router';
import { postService } from '../services/PostService';
import ChangePage from '../components/ChangePage.vue';
import { profileService } from '../services/ProfileService'
import SearchProfile from '../components/SearchProfile.vue';

export default {
  setup() {
    const route = useRoute();
    onMounted(() => {
      getPostsFromSearch();
      getAccFromSearch();
    });
    async function getAccFromSearch() {
      try {
        profileService.getAccFromSearch(route.params.query);
      }
      catch (error) {
        Pop.error(error);
      }
    }
    async function getPostsFromSearch() {
      try {
        logger.log('route', route.params.query);
        postService.getPostsFromSearch(route.params.query);
      }
      catch (error) {
        Pop.error(error);
      }
    }
    return {
      ads: computed(() => AppState.ads),
      posts: computed(() => AppState.posts),
      profiles: computed(() => AppState.profiles)
    };
  },
  components: { ChangePage, SearchProfile }
}
</script>
<style lang="scss" scoped>
.post-div {
  height: 90vh;
  overflow: scroll;
  overflow-x: hidden;

}

.post-div::-webkit-scrollbar {
  border-radius: 0 5px 5px 0;
  display: none;
}

.post-div::-webkit-scrollbar-button {
  display: none;
}
</style>