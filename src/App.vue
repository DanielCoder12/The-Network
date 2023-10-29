<template>
  <header>
    <div class="container-fluid">
      <section class="row">
        <div class="col-md-2 display-none display-md bg-white ">

        </div>
        <div class="col-md-10 col-12 p-0">
          <Navbar />
        </div>
      </section>
    </div>
  </header>

  <main class="h-100">
    <div class="container-fluid">
      <section class="row h-100">
        <div class="col-md-2 display-none display-md bg-white">
          <div v-if="account.id" class="">
            <div class="text-center">
              <router-link :to="{ name: 'Profile', params: { accountId: account.id } }">
                <img :src="account.picture" class="rounded-circle text-center side-img " alt="">
              </router-link>
            </div>
            <div>
              <p>
                {{ account.class }}
              </p>
              <p>
                {{ account.name }}
              </p>
              <div class="d-flex flex-column">
                <i v-if="account.github" class="mdi mdi-github"> {{ account.github }}</i>
                <i v-if="account.linkedin" class="mdi mdi-linkedin"> {{ account.linkedin }}</i>
                <i v-if="account.resume" class="mdi mdi-file-account"> {{ account.resume }}</i>
              </div>
            </div>
          </div>
          <div v-else>
            put login thing here
          </div>
        </div>
        <div class="col-md-10 col-12">
          <router-view />

        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState),
      account: computed(() => AppState.account)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}

.side-img {
  height: 23dvh;
  aspect-ratio: 1/1;

}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
