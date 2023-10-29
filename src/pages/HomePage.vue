<template>
  <section class="row">
    <div class="col-md-8 col-12 post-div">
      <div>
        <CreatePost />
      </div>
      <div v-for="post in posts" :key="post.id">
        <PostCard :post="post" />

      </div>
      <ChangePage />
    </div>
    <div class="col-md-4 display-none display-md">
      <div v-for="ad in ads" :key="ad.title" class="text-center">
        <AdCard :ad="ad" />
      </div>

    </div>
  </section>
</template>

<script>
import { computed, onMounted } from 'vue';
import { postService } from '../services/PostService';
import { AppState } from '../AppState'
import PostCard from '../components/PostCard.vue';
import Pop from '../utils/Pop';
import CreatePost from '../components/CreatePost.vue';
import ChangePage from '../components/ChangePage.vue'
import { adsService } from '../services/AdsService'
import AdCard from '../components/AdCard.vue';
import { logger } from '../utils/Logger';
import { profileService } from '../services/ProfileService';

export default {
  setup() {
    onMounted(() => {
      clearAppState();
      getAds();
      getPosts();
    });

    function clearAppState() {
      profileService.clearAppState()
    }
    async function getAds() {
      try {
        await adsService.getAds()
      } catch (error) {
        Pop.error(error)
      }
    }

    async function getPosts() {
      try {
        await postService.getPosts();
      } catch (error) {
        Pop.error(error)
      }
    }

    return {
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account),
      ads: computed(() => AppState.ads),
    };
  },
  components: { PostCard, CreatePost, AdCard }
}
</script>

<style scoped lang="scss">
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
