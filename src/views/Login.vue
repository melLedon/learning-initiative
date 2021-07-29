<template>
  <div class="Login">
    <div class="form-container">
      <div class="card text-dark mb-3 login-form" style="max-width: 28rem">
        <div class="card-body">
          <div class="mb-3 text-center">
            <span class="message" v-if="logged">Wrong credentials, try again!</span>
          </div>
          <h4 style="padding-top: 10px">Welcome!</h4>
          <div class="mb-3" style="padding-top: 10px">
            <label for="Email" class="col-sm-3">User</label>
            <input type="text" id="Email" v-model="username" required="required"/>
          </div>
          <div class="mb-3">
            <label for="inputPassword" class="col-sm-3">Password</label>
            <div>
            <input :type="show ? 'text' : 'password'" id="inputPassword" v-model="password"
               @keyup.enter="singIn()" required="required"/>
               <i class="showhide fas fa-eye" @mouseup="show = false"
              @mousedown="show = true" @mouseout="show = false"></i>
              </div>
          </div>
          <div class="mb-3 text-center">
            <button type="button" class="btn" @click="singIn()">Sing in</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueCookies from "vue-cookies";
import {login} from "../common/sharedata";
import { eventBus } from '../common/event';
const baseURL = "http://127.0.0.1:6005/1/1/";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      system: "bdirect",
      logged: false,
      show: false
    }
  },
  computed: {
    loginStatus: {
      get () { return login.status },
      set (val) { login.status = val }
    }
  },
  methods: {
    singIn() {
      const userData = { username: this.username, password: this.password, system: this.system };
      axios.post(baseURL + "oauth/login", userData).then( (response) => {
          if (response.status == 200) {
            VueCookies.set("token", response.data.token);
            eventBus.$emit('tokenSet', response.data.token);
            this.$router.push('home')
            this.loginStatus = true;
          }
        }).catch( (error) => {
          this.logged = true;
        });
    },
  },
};
</script>

<style scoped>
.showhide {
  margin-left: -30px;
  color: #484848;
}
.login-form {
  height: fit-content;
}
.message{
  color: red;
  font-weight: bold;
}
input {
  background-color: transparent;
  box-sizing: border-box;
  border-bottom: 2px solid #707070;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0px;
  line-height: 1.625rem;
  width: 100%;
  color: #484848;
}
input:focus {
  outline: none;
  background-color: #ffffff;
  border-bottom: 2px solid #707070;
  border-top: none;
  border-left: none;
  border-right: none;
  width: 100%;
}
label {
  text-align: left;
  width: 100%;
  color: #000000de;
  font-family: "Roboto";
  font-size: 16px;
  letter-spacing: 0.02px;
  line-height: 1rem;
  display: inline-block;
  margin-bottom: 8px;
  font-weight: bold;
}
.form-container {
  width: 100%;
  height: calc(100vh - 50px);
  background-color: #f5f5f6;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  width: 450px;
}
button {
  width: 100%;
  background-color: #007ea0;
  color: white;
  border-radius: 25px;
  margin-top: 8px;
  font-weight: bold;
}
button:hover {
  outline: none;
  background-color: #107590;
  color: white;
}
button:active{
  outline: none;
}
</style>


