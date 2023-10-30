<template>
    <div class="bg-white shadow  m-4">
        <img class="background-img img-fluid" :src="profile.coverImg" alt="">
        <div class="d-flex justify-content-between">
            <div class="ps-3">

                <img class="img-fluid  rounded-circle profile-picture img-go-up" :src="profile.picture" alt="">
                <img v-if="profile.graduated" class="graduation-img rounded-circle img-fluid"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4prNy-OrMMoaU7326MZR-5Rzv_3K3jC8PGw&usqp=CAU"
                    alt="">
            </div>
            <div>
                <a class="pe-3" v-if="profile.github" :href="profile.github">
                    <i class="mdi mdi-github fs-1"></i>
                </a>
                <a class="pe-3" v-if="profile.linkedin" :href="profile.linkedin">
                    <i class="mdi mdi-linkedin fs-1"></i>
                </a>
                <a class="pe-3" v-if="profile.resume" :href="profile.resume">
                    <i class="mdi mdi-file-account fs-1"></i>
                </a>
            </div>
        </div>
        <div class="px-4 bio-position">
            <p class="mb-0">{{ profile.class }}</p>
            <p> {{ profile.name }}</p>
            <i class="pt-3">{{ profile.bio }}</i>
            <div class="text-end">

                <button v-if="profile.id == account.id" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    class="btn btn-outline-primary">Edit</button>
            </div>

        </div>
    </div>
    <EditAccountModal />
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import EditAccountModal from './EditAccountModal.vue';
export default {
    setup() {
        return {
            profile: computed(() => AppState.profile),
            account: computed(() => AppState.account)
        };
    },
    components: { EditAccountModal }
};
</script>


<style lang="scss" scoped>
.graduation-img {
    height: 6dvh;
    aspect-ratio: 1/1;
    border: 1px solid #7EDACF;
    position: relative;
    top: -15px;
    left: -18%;
}

a {
    color: inherit;
}

.bio-position {
    position: relative;
    top: -30px;
}

.img-go-up {
    position: relative;
    top: -40%;
    border: 3px solid #7EDACF;
}



.profile-picture {
    height: 20dvh;
    aspect-ratio: 1/1;
}

.background-img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
    object-position: 50% 50%;

}
</style>