<script setup>
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <v-app>
    <SideBar />

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped></style>
