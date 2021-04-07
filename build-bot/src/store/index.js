import { createStore } from 'vuex';
import robotsModule from './modules/robots';
import usersModule from './modules/users';

// eslint-disable-next-line import/prefer-default-export
export const store = createStore({
  state: {
    foo: 'root-foo',
  },
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
  getters: {
  },
});
