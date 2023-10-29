<template>
    <div class="d-flex justify-content-evenly">
        <button @click="changePosts(newer)" v-if="newer == null" disabled class="btn">
            <i class="mdi mdi-arrow-left"></i> Newer
        </button>
        <button @click="changePosts(newer)" v-else class="btn">
            <i class="mdi mdi-arrow-left"></i> Newer
        </button>

        <button @click="changePosts(older)" v-if="older == null" disabled class="btn">
            Older <i class="mdi mdi-arrow-right"></i>
        </button>
        <button @click="changePosts(older)" v-else class="btn">
            Older <i class="mdi mdi-arrow-right"></i>
        </button>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { logger } from '../utils/Logger';
import { postService } from '../services/PostService';
export default {
    setup() {
        return {
            newer: computed(() => AppState.previousPage),
            older: computed(() => AppState.nextPage),
            async changePosts(daLink) {
                try {
                    logger.log('this should please be da link or null', daLink)
                    await postService.changePosts(daLink)
                } catch (error) {
                    Pop.error
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>