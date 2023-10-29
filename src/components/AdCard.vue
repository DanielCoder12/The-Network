<template>
    <!-- i hate ads -->
    <img class="img-fluid shadow m-3" :src="ad.square" :alt="ad.title">
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Ad } from '../models/Ad'
export default {
    props: {
        ad: { type: Ad, required: true }
    },
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>
img {
    height: 18rem;
}
</style>