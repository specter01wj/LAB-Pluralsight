(async () => {
  var apiData = await getApiData();
  const branches = apiData.map((o) => o.branch);
  const revenues2020 = apiData.map((o) => o.revenue2020);
  const revenues2019 = apiData.map((o) => o.revenue2019);
  const revenues2018 = apiData.map((o) => o.revenue2018);
  const colorPool = ["purple", "red", "green", "blue", "orange"];

  const button = document.getElementById("refreshButton");
  button.addEventListener("click", refresh);

  const ctx = document.getElementById("chart");
  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: branches,
      datasets: [
        {
          backgroundColor: pattern.draw("square", "rgba(255, 0, 0, 1)"),
          label: "Revenues 2018",
          data: revenues2018,
        },
        {
          backgroundColor: pattern.draw("circle", "purple"),
          label: "Revenues last year",
          data: revenues2019,
        },
        {
          backgroundColor: pattern.draw("diamond", "blue"),
          label: "Revenues per branch",
          data: revenues2020,
        },
      ],
    },
  });

  function refresh() {
    chart.data.datasets[2].data[2] = 50000;
    chart.update();
  }

  async function getApiData() {
    const apiResult = await fetch(
      "https://chartjsapi.azurewebsites.net/branch/revenues"
    );
    const json = await apiResult.json();
    return json;
  }
})();
