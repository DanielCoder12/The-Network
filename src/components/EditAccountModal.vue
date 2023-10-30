<template>
    <div class="modal fade modal-xl" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="container-fluid">
                    <section class="row">
                        <div class="col-12 background-color modal-header fs-1">
                            Edit Profile
                        </div>
                        <div class="">
                            <form @submit.prevent="changeAccountDetails()">
                                <div class="col-12">
                                    <section class="row">
                                        <div class="col-12 d-flex justify-content-between"
                                            style=" width: 100%;
                                            height: 10rem;
                                            object-fit: cover;
                                            object-position: 50% 50%;
                                             /*TODO FIX THIS  */
                                            background-image: url('https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f');">
                                            <div class="d-flex go-down align-items-center ps-2">
                                                <img class="profile-picture  img-fluid rounded-circle"
                                                    :src="profile.picture" alt="">
                                                <p class="pt-5 fs-2">{{ profile.name }}</p>
                                            </div>
                                            <div class="w-25 pt-3 pe-3">
                                                <input type="url" class="form-control w-100" v-model="editable.coverImg"
                                                    id="coverImg" aria-describedby="emailHelp" placeholder="Image Url...">
                                                <label for="coverImg">Cover Image Url</label>
                                            </div>
                                        </div>
                                    </section>
                                    <section class="row d-flex align-items-end p-3">
                                        <div class="col-7">

                                            <label for="picture">Profile Image Url</label>
                                            <input type="url" v-model="editable.picture" class="form-control w-100"
                                                id="picture" aria-describedby="emailHelp" placeholder="Image Url...">

                                            <div class="d-flex pt-3">
                                                <div class="w-75">
                                                    <label for="class">Attending Class</label>
                                                    <input type="text" v-model="editable.class" class="form-control w-100"
                                                        id="class" aria-describedby="emailHelp" placeholder="Class...">
                                                </div>
                                                <div class="flex-column align-items-center d-flex">
                                                    <label class="form-check-lg" for="graduated">
                                                        Default checkbox
                                                    </label>
                                                    <input class="form-check" v-model="editable.graduated" type="checkbox"
                                                        value="" id="graduated">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-5">
                                            <div class="pt-3">
                                                <label for="github">Github</label>
                                                <input type="url" v-model="editable.github" class="form-control w-100"
                                                    id="github" aria-describedby="emailHelp" placeholder="Url...">

                                            </div>
                                            <div class="pt-3">
                                                <label for="linkedin">LinkedIn</label>
                                                <input v-model="editable.linkedin" type="url" class="form-control w-100"
                                                    id="linkedin" aria-describedby="emailHelp" placeholder="Url...">

                                            </div>
                                            <div class="pt-3">

                                                <label for="resume">Resume</label>
                                                <input v-model="editable.resume" type="url" class="form-control w-100"
                                                    id="resume" aria-describedby="emailHelp" placeholder="Url...">

                                            </div>
                                        </div>
                                    </section>
                                    <section class="row p-3">
                                        <div class="col-12">
                                            <label for="exampleFormControlTextarea1">Bio</label>
                                            <textarea class="form-control" v-model="editable.bio"
                                                id="exampleFormControlTextarea1" placeholder="Tell us about yourself"
                                                rows="3"></textarea>
                                        </div>
                                        <div class="d-flex justify-content-end ps-4 py-4">
                                            <button class="btn me-5">Cancel</button>
                                            <button type="submit" class="btn ms-5 btn-secondary">Submit Changes</button>
                                        </div>
                                    </section>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref, watchEffect } from 'vue';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { accountService } from '../services/AccountService';
import { Modal } from 'bootstrap';
export default {
    setup() {
        const editable = ref({})
        watchEffect(() =>
            editable.value = {
                ...AppState.account
            }
        )
        return {
            editable,
            profile: computed(() => AppState.profile),
            async changeAccountDetails() {
                try {
                    logger.log(editable.value)
                    await accountService.editAccount(editable.value)
                    Modal.getOrCreateInstance('#exampleModal').hide()
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped>
.go-down {
    position: relative;
    top: 50%;
}


.background-color {
    background-color: #8ADDD4;
}

.background-img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
    object-position: 50% 50%;

}

.profile-picture {
    height: 18dvh;
    aspect-ratio: 1/1;
}
</style>