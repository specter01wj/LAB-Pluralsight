"use strict";

(function _callee() {
  var apiData, branches, revenues2020, revenues2019, revenues2018, colorPool, button, ctx, chart, refresh, getApiData;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          getApiData = function _ref2() {
            var apiResult, json;
            return regeneratorRuntime.async(function getApiData$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return regeneratorRuntime.awrap(fetch("https://chartjsapi.azurewebsites.net/branch/revenues"));

                  case 2:
                    apiResult = _context.sent;
                    _context.next = 5;
                    return regeneratorRuntime.awrap(apiResult.json());

                  case 5:
                    json = _context.sent;
                    return _context.abrupt("return", json);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            });
          };

          refresh = function _ref() {
            chart.data.datasets[2].data[2] = 50000;
            chart.update();
          };

          Chart.defaults.global.defaultColor = "rgba(255,0,0,1)"; //Chart.defaults.scale.ticks.beginAtZero = true;
          //Chart.defaults.global.legend.display = false;
          //Chart.defaults.global.animation.duration = 2000;

          _context2.next = 5;
          return regeneratorRuntime.awrap(getApiData());

        case 5:
          apiData = _context2.sent;
          branches = apiData.map(function (o) {
            return o.branch;
          });
          revenues2020 = apiData.map(function (o) {
            return o.revenue2020;
          });
          revenues2019 = apiData.map(function (o) {
            return o.revenue2019;
          });
          revenues2018 = apiData.map(function (o) {
            return o.revenue2018;
          });
          colorPool = ["purple", "red", "green", "blue", "orange"];
          button = document.getElementById("refreshButton");
          button.addEventListener("click", refresh);
          ctx = document.getElementById("chart");
          chart = new Chart(ctx, {
            type: "bar",
            data: {
              labels: branches,
              datasets: [{
                backgroundColor: pattern.draw("square", "rgba(255, 0, 0, 1)"),
                label: "Revenues 2018",
                data: revenues2018
              }, {
                backgroundColor: pattern.draw("circle", "purple"),
                label: "Revenues last year",
                data: revenues2019
              }, {
                backgroundColor: pattern.draw("diamond", "blue"),
                label: "Revenues per branch",
                data: revenues2020
              }]
            },
            options: {
              legend: {
                display: false
              },
              animation: {
                duration: 5000
              },
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  });
})();