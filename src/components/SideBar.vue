<template>
  <v-container>
    <v-navigation-drawer permanent color="primary">
      <v-list>
        <v-list-item title="FitSpace" subtitle="Club staff system"></v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Dashboard" router to="/"> </v-list-item>
        <v-list-item title="Schedule" router to="/schedule"> </v-list-item>
        <v-list-item title="Groups" router to="/groups"> </v-list-item>
        <v-list-item title="Trainers" router to="/trainers"> </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>
