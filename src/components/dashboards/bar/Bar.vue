<template>
  <Bar :data="data" :options="options" />
</template>

<script >
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";
import * as chartConfig from "../bar/BarConfig";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  components: {
    Bar,
  },
  data() {
    return chartConfig;
  },
};
</script>
