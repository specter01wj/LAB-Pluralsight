(
    async () => {
        var apiData = await getApiData();
        const branches = apiData.map(o => o.branch); 
        const revenues2020 = apiData.map(o => o.revenue2020);
        const revenues2019 = apiData.map(o => o.revenue2019);
        const revenues2018 = apiData.map(o => o.revenue2018);
        const colorPool = ["purple", "red", "green", "blue", "orange"];

        const ctx = document.getElementById('chart');
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: branches,
                datasets: [
                    {
                        backgroundColor: "red",
                        borderColor: "orange",
                        label: "Revenues 2018",
                        data: revenues2018
                    },
                    {
                        backgroundColor: "purple",
                        borderColor: "lightpink",
                        label: "Revenues last year",
                        data: revenues2019
                    },
                    {
                        backgroundColor: "blue",
                        borderColor: "lightblue",
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

