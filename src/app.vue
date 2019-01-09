<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>TONKIA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>



    <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent">
      <v-btn color="teal" flat value="recent">
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>
      <v-btn color="teal" flat value="favorites">
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn color="teal" flat value="nearby">
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>

  </v-app>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: "recent"
    };
  }
};
</script>

<style>
</style>