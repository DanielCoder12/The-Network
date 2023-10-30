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
          <!-- TODO fix when going from one profile page to another -->
          <Login />
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
import Login from './components/Login.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState),
      account: computed(() => AppState.account)
    }
  },
  components: { Navbar, Login }
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
