<template>
  <div>
    <nav class="navbar navbar-light bg-light login-navbar nav-container justify-content-between">
        <a class="navbar-brand" href="https://birkman.com/" target="_blank">
          <img src="./../assets/birkmanlogo.svg" alt="" width="160" />
        </a>
        <a class="nav-link logout" href="#" v-if="cookie" @click="logout()">Logout</a>
    </nav>
  </div>
</template>

<script>

import VueCookies from "vue-cookies";
import {login} from '../common/sharedata';
import { eventBus } from '../common/event';

export default {
  name: "Navbar",
  data: () => {
    return {
        cookie: VueCookies.get("token")
    }
  },
  created() {
    eventBus.$on('tokenSet', (token) => this.cookie = token);
  },
  computed: {
    loginStatus: {
      get () { return login.status },
      set (val) { login.status = val }
    },
  },
  methods: {
    logout(){
      VueCookies.remove("token");
      this.cookie = false;
      this.$router.push('/')
    }
  }
};
</script>

<style scoped>
.logout{
  color: #484848;
}
.logout:hover{
  color: black;
}
.nav-container {
  padding-right: 20px;
  padding-left: 100px;
  width: 100%;
}
.navbar {
  box-shadow: 0 5px 7px 0 #9b9b9e;
}
</style>