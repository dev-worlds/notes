<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <!--          <v-list-item-title class="text-h6">-->
          <!--            Application-->
          <!--          </v-list-item-title>-->
          <!--          <v-list-item-subtitle>-->
          <!--            subtext-->
          <!--          </v-list-item-subtitle>-->
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
<!--        <v-list-item-->
<!--          v-for="item in items"-->
<!--          :key="item.title"-->
<!--          link-->
<!--        >-->
<!--          <v-list-item-icon>-->
<!--            <v-icon>{{ item.icon }}</v-icon>-->
<!--          </v-list-item-icon>-->

<!--          <v-list-item-content>-->
<!--            <v-list-item-title>{{ item.title }}</v-list-item-title>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <nuxt-link to="/">
          <div class="logo-img"></div>
        </nuxt-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <nuxt></nuxt>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
}
</script>

<style scoped lang="scss">
.logo-img {
  mask-image: url("/new_logo.svg");
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;
  background: white;
  width: 200px;
  height: 50px;
}
</style>
