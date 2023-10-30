<template>
    <div class="d-flex bg-white m-4 shadow p-3 ">
        <div>
            <router-link :to="{ name: 'Profile', params: { accountId: profile._id } }">
                <img class="img-fluid rounded-circle border-big" :src="profile.picture" alt="">
                <img class="border-small graduation-img rounded-circle" v-if="profile.graduated == true"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4prNy-OrMMoaU7326MZR-5Rzv_3K3jC8PGw&usqp=CAU"
                    alt="">
            </router-link>
        </div>
        <div class="flex-column justify-content-center d-flex pt-4">
            <p class="fs-4 mb-0">
                {{ profile.class }}
            </p>
            <p class="fs-2">
                {{ profile.name }}
            </p>

        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Account } from '../models/Account';
export default {
    props: {
        // profile: { type: Account }
        profile: { type: Object }
    },
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>
.graduation-img {
    height: 5dvh;
    aspect-ratio: 1/1;
    border: 1px solid #7EDACF;
    position: relative;
    top: 40px;
    left: -18%;
}

img {
    height: 18dvh;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
    border: 1px solid #7EDACF;
}

.border-big {
    border: 3px solid #7EDACF;
}

.border-small {
    border: 1px solid #7EDACF;
}
</style>