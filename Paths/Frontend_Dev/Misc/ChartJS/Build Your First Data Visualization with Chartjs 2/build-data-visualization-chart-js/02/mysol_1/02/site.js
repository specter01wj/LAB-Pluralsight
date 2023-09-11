(
    () => {
        const ctx = document.getElementById('chart');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Seattle", "Portland", "Monterey",
                    "San Francisco", "San Diego"],
                datasets: [
                    {
                        backgroundColor: "green",
                        label: "Revenues this year",
                        data: [84532, 57543, 43422, 64532, 74323]
                    },
                    {
                        backgroundColor: "red",
                        label: "Revenues last year",
                        data: [64532, 77543, 33422, 24532, 64323]
                    },
                    {
                        backgroundColor: "purple",
                        label: "Revenues per branch",
                        data: [43223, 64332, 53322, 67743, 51132]
                    }
                ]
            }
        });
    }
)();

