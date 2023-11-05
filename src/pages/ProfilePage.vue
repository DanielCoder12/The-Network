<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-md-8 col-12 post-div">
                <ProfileDetails />

                <div v-if="route.params.accountId == account.id">
                    <CreatePost />
                </div>
                <div v-for="post in posts" :key="post.id">
                    <PostCard :post="post" />
                </div>
                <div v-if="posts[0]">
                    <ChangePage />
                </div>
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
import { useRoute } from 'vue-router';
import { AppState } from '../AppState';
import { computed, reactive, onMounted, onUnmounted, watchEffect } from 'vue';
import { logger } from '../utils/Logger';
import { postService } from '../services/PostService';
import Pop from '../utils/Pop';
import { profileService } from '../services/ProfileService'
import CreatePost from '../components/CreatePost.vue';
import PostCard from '../components/PostCard.vue';
import AdCard from '../components/AdCard.vue';
import { adsService } from '../services/AdsService';
import ChangePage from '../components/ChangePage.vue';
import ProfileDetails from '../components/ProfileDetails.vue';

export default {
    setup() {
        const route = useRoute();
        function clearAppState() {
            profileService.clearAppState()
        }
        async function getProfileById() {
            try {
                await profileService.getProfileById(route.params.accountId);
                getPostsForProfile()
            }
            catch (error) {
                Pop.error(error);
            }
        }
        async function getPostsForProfile() {
            try {
                await postService.getPostsForProfile(route.params.accountId)
            } catch (error) {
                Pop.error(error)
            }
        }
        async function getAds() {
            try {
                adsService.getAds()
            } catch (error) {
                Pop.error(error)
            }
        }
        // const route = useRoute()
        watchEffect(() => {
            route.params
            clearAppState();
            getProfileById();
            getAds();
        })

        onMounted(() => {
            clearAppState();
            getProfileById();
            getAds();
        });
        return {
            route,
            account: computed(() => AppState.account),
            posts: computed(() => AppState.posts),
            ads: computed(() => AppState.ads)
        };
    },
    components: { CreatePost, PostCard, AdCard, ChangePage, ProfileDetails }
};
</script>


<style lang="scss" scoped>
//  TODO make this look better



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