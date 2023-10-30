<template>
    <div class="bg-white px-4 pt-2 pb-4 m-4 shadow">
        <div class="text-end">

            <div v-if="post.creator.id == account.id" class="btn-group dropstart">
                <i class="mdi mdi-dots-horizontal text-end" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">

                </i>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <!-- TODO MAKE EDIT WORK -->
                    <a data-bs-toggle="modal" data-bs-target="#editModal" class="dropdown-item">Edit</a>
                    <!-- TODO FIX DELETE -->
                    <p @click="deletePost(post.id)" class="text-danger dropdown-item">Delete</p>
                </div>

            </div>
            <div v-else class="p-2"></div>
        </div>
        <div class=" d-flex">
            <router-link :to="{ name: 'Profile', params: { accountId: post.creatorId } }">
                <img class="post-creator-image rounded-circle" :src="post.creator.picture" alt="">
            </router-link>
            <div class="ps-3">
                <router-link class="no-blue" :to="{ name: 'Profile', params: { accountId: post.creatorId } }">
                    <p class="mb-0">
                        {{ post.creator.name }}
                    </p>
                </router-link>
                <p>{{ post.createdAt.toLocaleDateString() }} <span v-if="post.creator.graduated"> <i
                            class="mdi mdi-school"></i></span></p>
            </div>
        </div>

        <p>{{ post.body }}</p>
        <img v-if="post.imgUrl" class="img-fluid post-img" :src="post.imgUrl" alt="">
        <div class="d-flex justify-content-end align-items-center">
            <!-- TODO MAKE LIKES FUNCTIONAL -->

            <div v-if="!user.isAuthenticated" @click="login">
                <i class="mdi mdi-heart-outline blue-text fs-2 ">
                </i>
                <span class="fs-4"> {{ post.likeIds.length }}</span>
            </div>
            <div v-else>
                <i v-if="!post.likeIds.find(id => id == account.id)" @click="changeLikeState(post.id)"
                    class="mdi mdi-heart-outline blue-text fs-2 ">
                </i>
                <i v-else @click="changeLikeState(post.id)" class="mdi mdi-heart blue-text fs-2"></i>
                <span class="fs-4"> {{ post.likeIds.length }}</span>
            </div>
        </div>
    </div>
    <EditPostModalVue />
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Post } from '../models/Post';
import { Account } from '../models/Account';
import { RouterLink } from 'vue-router';
import Pop from '../utils/Pop';
import { postService } from '../services/PostService';
import { AuthService } from '../services/AuthService';
export default {
    props: {
        post: { type: Post, required: true }
    },
    setup() {
        return {
            async login() {
                AuthService.loginWithPopup()
            },
            account: computed(() => AppState.account),
            user: computed(() => AppState.user),
            async deletePost(postId) {
                try {
                    const yes = await Pop.confirm('Delete Post?')
                    if (!yes) {
                        return
                    }
                    await postService.deletePost(postId)
                    Pop.success('Post Deleted!')
                } catch (error) {
                    Pop.error(error)
                }
            },
            async changeLikeState(postId) {
                try {
                    await postService.changeLikeState(postId)
                } catch (error) {
                    Pop.error(error)
                }
            }
        };
    },
    components: { RouterLink }
};
</script>


<style lang="scss" scoped>
.no-blue {
    color: inherit;
}

.blue-text {
    color: #8ADDD4;
}

.post-img {
    width: 100%;
    object-fit: fill;
}

.post-creator-image {
    height: 4rem;
    aspect-ratio: 1/1;

}
</style>