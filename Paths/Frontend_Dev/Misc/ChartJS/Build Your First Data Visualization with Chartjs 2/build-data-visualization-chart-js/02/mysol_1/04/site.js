(
    async () => {
        var apiData = await getApiData();
        // const branches = apiData.map(o => o.branch); 
        // const revenues2020 = apiData.map(o => o.revenue2020);
        // const revenues2019 = apiData.map(o => o.revenue2019);
        // const revenues2018 = apiData.map(o => o.revenue2018);
        const colorPool = ["purple", "red", "green", "blue", "orange"];

        let datasets = [];
        apiData.forEach((item, index) => {
            datasets.push({
                label: item.branch,
                data: [item.revenue2018, item.revenue2019, item.revenue2020],
                borderColor: colorPool[index],
                fill: false
            });
        });

        const ctx = document.getElementById('chart');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["2018", "2019", "2020"],
                datasets: datasets
            }
        });

        async function getApiData() {
            const apiResult = await fetch("https://chartjsapi.azurewebsites.net/branch/revenues");
            const json = await apiResult.json();
            return json;
        }
    }
)();

