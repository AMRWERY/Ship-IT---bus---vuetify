<template>
  <v-app-bar color="primary" density="compact">
    <v-app-bar-title
      ><v-icon icon="mdi mdi-van-utility" start></v-icon>Ship-IT
      (Business)</v-app-bar-title
    >

    <v-btn icon @click="toggleTheme">
      <v-icon icon="mdi mdi-weather-night"> </v-icon>
    </v-btn>
  </v-app-bar>
</template>


<script>
import { useTheme } from "vuetify";

export default {
  name: "Toolbar",

  //change theme

  setup() {
    const theme = useTheme();

    return {
      theme,
      toggleTheme: () =>
        (theme.global.name.value = theme.global.current.value.dark
          ? "light"
          : "dark"),
    };
  },
};
</script>
