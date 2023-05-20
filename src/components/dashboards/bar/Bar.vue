<template>
  <div>
    <apexchart
      type="bar"
      height="250"
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
      series: [
        {
          data: [
            400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 1400, 1420,
          ],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
      },
    };
  },
};
</script>


