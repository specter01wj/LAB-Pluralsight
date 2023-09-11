(
    async () => {
        var apiData = await getApiData();
        const branches = apiData.map(o => o.branch); 
        const revenues2020 = apiData.map(o => o.revenue2020);
        const revenues2019 = apiData.map(o => o.revenue2019);
        const revenues2018 = apiData.map(o => o.revenue2018);
        const average = apiData.map(o => 
            (o.revenue2020 + o.revenue2019 + o.revenue2018) / 3);
        const colorPool = ["purple", "red", "green", "blue", "orange"];

        const ctx = document.getElementById('chart');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: branches,
                datasets: [
                    {
                        label: "Average",
                        data: average,
                        type: "line",
                        borderColor: "green"
                    },
                    {
                        backgroundColor: "red",
                        label: "Revenues 2018",
                        data: revenues2018
                    },
                    {
                        backgroundColor: "purple",
                        label: "Revenues last year",
                        data: revenues2019
                    },
                    {
                        backgroundColor: "blue",
                        label: "Revenues per branch",
                        data: revenues2020
                    }
                ]
            }
        });

        async function getApiData() {
            const apiResult = await fetch("https://chartjsapi.azurewebsites.net/branch/revenues");
            const json = await apiResult.json();
            return json;
        }
    }
)();

