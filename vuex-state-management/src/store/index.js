import { createStore } from 'vuex';
import productsModule from './modules/product';
import usersModule from './modules/user';

const store = createStore({
  modules: {
    products: productsModule,
    users: usersModule,
  },
  state() {
    return {
    };
  },
  mutations: {
  },
  actions: {
  },
});

export default store;
