import Vue from 'vue'
import Vuex from 'vuex'
import {vuexfireMutations} from 'vuexfire';
import users from './modules/users';
import phoneNumber from './modules/phoneNumber';
import proizvodi from './modules/proizvodi';
import imgStorage from './modules/imgStorage';

Vue.use(Vuex)

export default new Vuex.Store({
  

  mutations: vuexfireMutations,

  modules:{
    phoneNumber,
    users,
    proizvodi,
    imgStorage
  }
})
