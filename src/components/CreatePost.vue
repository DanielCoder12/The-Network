<template>
    <div v-if="account.id" class="bg-white p-4 shadow m-4 d-flex">
        <router-link :to="{ name: 'Profile', params: { accountId: account.id } }">
            <img class="rounded-circle post-creator-image" :src="account.picture" alt="">
        </router-link>
        <div class="w-100">
            <form @submit.prevent="createPost()">
                <div class="form-group">
                    <textarea class="form-control " v-model="editable.body" required placeholder="share whats happening..."
                        id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="d-flex justify-content-between align-items-center">

                    <div class="form-group">

                        <input type="url" v-model="editable.imgUrl" class="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Enter Image Url">
                    </div>

                    <button v-if="editable.body == ''" disabled class="btn"><i class="mdi mdi-send"></i> Post</button>
                    <button v-else class="btn"><i class="mdi mdi-send"></i> Post</button>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { Account } from '../models/Account';
import Pop from '../utils/Pop';
import { postService } from '../services/PostService';
import { logger } from '../utils/Logger';
export default {
    // props: {
    //     account: { type: Account, required: true }
    // },
    setup() {
        const editable = ref({})

        return {
            editable,
            account: computed(() => AppState.account),
            async createPost() {
                try {
                    // logger.log(editable)
                    await postService.createPost(editable.value)
                    Pop.success('Post Created')
                    editable.value = {}
                } catch (error) {
                    Pop.error
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped>
.post-creator-image {
    height: 4rem;
    aspect-ratio: 1/1;

}
</style>