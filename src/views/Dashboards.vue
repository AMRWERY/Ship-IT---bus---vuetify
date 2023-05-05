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
            <h5 class="text-h5 text-center text-orange-lighten-4">
              Daily Sales
            </h5>
            <br />
            <span class="text-light-green-accent-2">55%</span>
            increase in today sales
            <v-divider />
            <h6 class="text-body-2 mt-4 text-deep-orange-lighten-2">
              updated 4 minutes ago
            </h6>
          </v-col>
          <v-col>
            <Bar class="bg-purple-lighten-4" />
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4">
        <v-card width="400">
          <v-col>
            <h5 class="text-h5 text-center text-orange-lighten-4">
              Completed Tasks
            </h5>
            <br />
            <span>Last Campaign Performance</span>
            <v-divider />
            <h6 class="text-body-2 mt-4 text-deep-orange-lighten-2">
              campaign sent 26 minutes ago
            </h6>
          </v-col>
          <v-col>
            <Scatter class="bg-blue-lighten-4" />
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="4">
        <v-card width="400">
          <v-col>
            <h5 class="text-h5 text-center text-orange-lighten-4">
              Email Subscription
            </h5>
            <br />
            <span>Last Campaign Performance</span>
            <v-divider />
            <h6 class="text-body-2 mt-4 text-deep-orange-lighten-2">
              updated 10 days ago
            </h6>
          </v-col>
          <v-col>
            <Line class="bg-pink-lighten-4" />
          </v-col>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <Cards />
    </v-row>
    <v-row>
      <TaskStats />
    </v-row>
  </v-container>
</template>

<script>
import Bar from "@/components/dashboards/bar/Bar.vue";
import Line from "@/components/dashboards/line/Line.vue";
import Scatter from "@/components/dashboards/scatter/Scatter.vue";
import Cards from "@/components/dashboards/Cards.vue";
import TaskStats from "@/components/dashboards/TaskStats.vue";

export default {
  name: "Dashboard",

  components: { Bar, Line, Scatter, Cards, TaskStats },
};
</script>
