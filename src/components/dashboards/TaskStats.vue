<template>
  <v-col cols="12" xs="12" sm="12" md="9" lg="6">
    <v-card width="600" class="mx-auto">
      <v-toolbar color="amber-lighten-1" theme="dark">
        <v-toolbar-title class="text-h6"
          >Employees Stats
          <br />
          New employees on 15th April, 2023
        </v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">ID</th>
              <th class="text-left">Name</th>
              <th class="text-left">Salary</th>
              <th class="text-left">Country</th>
              <th class="text-left">City</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>${{ item.salary }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.city }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </v-col>

  <v-col cols="12" xs="12" sm="12" md="9" lg="6">
    <v-card width="600" class="mx-auto">
      <v-toolbar color="green-lighten-2" theme="dark">
        <v-toolbar-title class="text-h6">Tasks</v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <v-list density="compact">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            active-color="primary"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "TaskStats",

  data() {
    return {
      desserts: [
        {
          id: 1,
          name: "Dakota Rice",
          salary: 36.738,
          country: "Niger",
          city: "Oud-Turnhout",
        },
        {
          id: 2,
          name: "Minerva Hooper",
          salary: 23.738,
          country: "Curaçao",
          city: "Sinaai-Waas",
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          salary: 56.142,
          country: "Netherlands",
          city: "Overland Park",
        },
        {
          id: 1,
          name: "Philip Chaney",
          salary: 38.735,
          country: "Korea, South",
          city: "Gloucester",
        },
      ],
      items: [
        {
          text: "What are conference organizers afraid of?",
          icon: "mdi-clock",
        },
        {
          text: "Lines From Great Russian Literature?",
          icon: "mdi-account",
        },
        {
          text: "Flooded: One year later.",
          icon: "mdi-flag",
        },
      ],
    };
  },
};
</script>
