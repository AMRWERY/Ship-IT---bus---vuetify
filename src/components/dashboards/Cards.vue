<template>
  <v-col cols="12" xs="12" sm="12" md="6" lg="3">
    <v-card width="300">
      <v-btn
        icon="mdi mdi-store"
        size="x-large"
        color="green-lighten-2"
      ></v-btn>
      <v-row class="float-right ma-5">
        <p>Revenue</p>
      </v-row>
      <v-divider />
      <v-col>
        <p>
          <v-icon icon="mdi mdi-calendar-account-outline"></v-icon> Last 24
          Hours
        </p>
      </v-col>
    </v-card>
  </v-col>
  <v-col cols="12" xs="12" sm="12" md="6" lg="3">
    <v-card width="300">
      <v-card width="300">
        <v-btn
          icon="mdi mdi-content-duplicate"
          size="x-large"
          color="orange-lighten-2"
        ></v-btn>
        <v-row class="float-right ma-5">
          <p>Used Space</p>
        </v-row>
        <v-divider />
        <v-col>
          <p><v-icon icon="mdi mdi-alert"></v-icon> Get More Space...</p>
        </v-col>
      </v-card>
    </v-card>
  </v-col>
  <v-col cols="12" xs="12" sm="12" md="6" lg="3">
    <v-card width="300">
      <v-card width="300">
        <v-btn
          icon="mdi mdi-alert-circle-outline"
          size="x-large"
          color="red-darken-1"
        ></v-btn>
        <v-row class="float-right ma-5">
          <p>Fixed Issues</p>
        </v-row>
        <v-divider />
        <v-col>
          <p>
            <v-icon icon="mdi mdi-bookmark-outline"></v-icon> Tracked from
            Github
          </p>
        </v-col>
      </v-card>
    </v-card>
  </v-col>
  <v-col cols="12" xs="12" sm="12" md="6" lg="3">
    <v-card width="300">
      <v-card width="300">
        <v-btn
          icon="mdi mdi-twitter"
          size="x-large"
          color="blue-darken-1"
        ></v-btn>
        <v-row class="float-right ma-5">
          <p>Followers</p>
        </v-row>
        <v-divider />
        <v-col>
          <p><v-icon icon="mdi mdi-clock-outline"></v-icon> Just Updated</p>
        </v-col>
      </v-card>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Cards",
};
</script>
