<template>
  <nav class="navbar navbar-expand-lg  px-3 justify-content-between align-items-center background-color">
    <router-link class="navbar-brand d-flex align-items-center" :to="{ name: 'Home' }">
      <H1 class="text-white">Network</H1>
    </router-link>
    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <!-- <div class="collapse navbar-collapse" id="navbarText"> -->

    <li class="d-flex align-items-center">

      <div class="input-group mb-3">
        <input v-model="editable.link" type="text" class="form-control" placeholder="Search"
          aria-label="Recipient's username" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <!-- <router-link :style="{ PointerEvent: 'none' }" v-if="editable.link == ''" aria-disabled="true"
            :to="{ name: 'Search', params: { query: 'nothing' } }" class="">
            <button disabled class="btn btn-light">
              <i class="mdi mdi-magnify"></i>
            </button>
          </router-link> -->
          <button v-if="editable.link != ''" @click="changeRoute()" class="btn btn-light">
            <i class="mdi mdi-magnify"></i>
          </button>
          <button v-else disabled @click="changeRoute()" class="btn btn-light">
            <i class="mdi mdi-magnify"></i>
          </button>

        </div>
      </div>


    </li>

    <!-- </div> -->
  </nav>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Pop from '../utils/Pop';
import { logger } from '../utils/Logger';

// import Login from './Login.vue';
export default {
  setup() {
    const router = useRouter()

    const editable = ref({ link: '' })
    return {
      editable,
      changeRoute() {
        const value = editable.value.link
        editable.value.link = ''
        router.push(`/search/${value}`)
      }
    }
  },
  // components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}

.background-color {
  background-color: #8ADDD4;
}
</style>
