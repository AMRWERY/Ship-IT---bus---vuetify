<template>
  <div>
    <apexchart
      type="radialBar"
      width="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [17],
      chartOptions: {
        chart: {
          height: 250,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "70%",
            },
          },
        },
        labels: ["increase"],
      },
    };
  },
};
</script>
