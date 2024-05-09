var options = {
  chart: {
    type: "radar",
  },

  series: [
    {
      name: "This Week",
      data: [45, 52, 38, 24, 33, 10],
    },
  ],
  labels: ["April", "May", "June", "July", "August", "September"],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
