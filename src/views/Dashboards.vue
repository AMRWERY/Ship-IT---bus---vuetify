<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h2 class="text-red">Dashboard</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4">
        <v-card width="400">
          <v-col>
            <h5 class="text-h5 text-center text-purple-darken-2">
              Daily Sales
            </h5>
            <br />
            <span class="text-orange-lighten-1">14%</span>
            increase in daily sales
          </v-col>
          <v-col>
            <Column />
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4">
        <v-card width="400">
          <v-col>
            <h5 class="text-h5 text-center text-purple-darken-2">
              Monthly Sales
            </h5>
            <br />
            <span class="text-orange-lighten-1">26%</span>
            increase in monthly sales
          </v-col>
          <v-col>
            <Bar />
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4">
        <v-card width="400">
          <v-col>
            <h5 class="text-h5 text-center text-purple-darken-2">
              Yearly Sales
            </h5>
            <br />
            <span class="text-orange-lighten-1">17%</span>
            increase in yearly sales
          </v-col>
          <v-col>
            <Radialbar />
          </v-col>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <Cards />
    </v-row>
  </v-container>
</template>

<script>
import Bar from "../components/dashboards/bar/Bar.vue";
import Column from "@/components/dashboards/column/Column.vue";
import Radialbar from "@/components/dashboards/radialbar/Radialbar.vue";
import Cards from "@/components/dashboards/Cards.vue";

export default {
  name: "Dashboard",

  components: { Bar, Column, Radialbar, Cards },
};
</script>


