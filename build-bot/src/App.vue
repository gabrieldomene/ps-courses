<template>
  <!-- Root foo: {{ rootFoo }} <br/>
  Robots foo: {{ robotsFoo }} <br/>
  Users foo: {{ usersFoo }} <br/>
  <br/>
  Root getter foo: {{ rootGetterFoo }} <br/>
  Robots getter foo: {{ robotsGetterFoo }} <br/> -->
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link :to="{name: 'Home'}"
            class="nav-link"
          >
            <img src="./assets/build-a-bot-logo.png" alt="" class="logo">
            Build-a-bot
          </router-link>
        </li>
         <li class="nav-item">
          <router-link :to="{name: 'Build'}"
            class="nav-link"
          >
            Build
          </router-link>
        </li>
         <li class="nav-item">
          <router-link :to="{name: 'BrowseParts'}"
            class="nav-link"
          >
            Browse
          </router-link>
        </li>
         <li class="nav-item cart">
          <router-link :to="{name: 'Cart'}"
            class="nav-link"
          >
            Cart
          </router-link>
          <div class="cart-items">
            {{ cart.length }}
          </div>
        </li>
      </ul>
    </nav>
  </header>
  <div class="container">
    <aside class="aside">
      <router-view name="sidebar"></router-view>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState({
      rootFoo: 'foo',
      usersFoo: (state) => state.users.foo,
    }),
    ...mapState('robots', { robotsFoo: 'foo' }),
    ...mapGetters({ rootGetterFoo: 'foo' }),
    ...mapGetters('robots', { robotsGetterFoo: 'foo' }),
    cart() {
      return this.$store.state.robots.cart;
    },
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

main {
  padding: 30px;
  background: #fff;
  width: 964px;
  min-width: 300px;
}

header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}

.nav-link {
  text-decoration: none;
  color: inherit;
}

.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}

.router-link-active {
  color: #fff;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
  min-height: 400px;
}
.aside {
  padding: 30px;
  background: #aaa;
  width: 100px;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background: mediumseagreen;
}
</style>
