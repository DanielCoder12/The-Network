<template>
  <span class="navbar-text">
    <div class="text-center" v-if="!user.isAuthenticated">
      <button class="btn btn-outline-dark selectable text-center fs-2 lighten-30 text-uppercase my-2 my-lg-0"
        @click="login">
        Login
      </button>
    </div>
    <div v-else>

      <div v-if="account.id" class="">
        <div class="text-center">
          <router-link :to="{ name: 'Profile', params: { accountId: account.id } }">
            <div>
              <img :src="account.picture" class="rounded-circle text-center side-img " alt="">
              <img v-if="account.graduated" class="graduation-img rounded-circle img-fluid"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4prNy-OrMMoaU7326MZR-5Rzv_3K3jC8PGw&usqp=CAU"
                alt="">

            </div>
          </router-link>
        </div>
        <div>
          <p class="mb-0 fw-light ps-2">
            {{ account.class }}
          </p>
          <p class="fs-2 mb-0">
            {{ account.name }}
          </p>
          <div class="d-flex flex-column">
            <a :href="account.github">
              <i v-if="account.github" class="mdi fs-2 mdi-github">
                <span class="fs-5 fw-normal">
                  Github
                </span>
              </i>
            </a>
            <a :href="account.linkedin">
              <i v-if="account.linkedin" class="mdi fs-2 mdi-linkedin">
                <span class="fs-5 fw-normal">
                  Linkedin
                </span>
              </i>
            </a>
            <a :href="account.resume">
              <i v-if="account.resume" class="mdi fs-2 mdi-file-account">
                <span class="fs-5 fw-normal">
                  Resume
                </span>
              </i>
            </a>
          </div>
          <div class="list-group-item dropdown-item list-group-item-action text-danger selectable" @click="logout">
            <i class="mdi mdi-logout ps-1"></i>
            logout
          </div>
        </div>
      </div>

      <!-- original dropdown thing -->
      <!-- <div class="dropdown my-2 my-lg-0">
        <div type="button" class="bg-dark border-0 selectable no-select" data-bs-toggle="dropdown" aria-expanded="false">
          <div v-if="account.picture || user.picture">
            <img :src="account.picture || user.picture" alt="account photo" height="40" class="rounded" />
          </div>
        </div>
        <div class="dropdown-menu dropdown-menu-lg-end dropdown-menu-start p-0" aria-labelledby="authDropdown">
          <div class="list-group">
            <router-link :to="{ name: 'Account' }">
              <div class="list-group-item dropdown-item list-group-item-action">
                Manage Account
              </div>
            </router-link>

          </div>
        </div>
      </div> -->
    </div>
  </span>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
import Login from './Login.vue';
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  },
  // components: { Login }
}
</script>

<style lang="scss" scoped>
// TODO FIX THIS
.graduation-img {
  height: 6dvh;
  aspect-ratio: 1/1;
  border: 1px solid #7EDACF;
  position: relative;
  top: 50px;
  left: -20%;
}
</style>
