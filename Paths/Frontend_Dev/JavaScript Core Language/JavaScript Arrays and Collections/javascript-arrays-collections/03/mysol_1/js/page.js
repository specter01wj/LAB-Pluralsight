// Accessing the objects
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');

let yearlyLabel = document.getElementById('yearlyTotal');

let newAmount = document.getElementById('itemAmount');










let newMonth = document.getElementById('monthId');



// Monthly Totals
let yearlyTotal = 0;


const monthlySales = new Set();
const monthlyLabels = new Set();

// Code goes here

// Bar chart
/*var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: monthlyLabels,
        datasets: [{
            label: '# of Sales',
            data: monthlySales,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});*/

// Pie Chart
/*var deptSalesChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: deptLabels,
        datasets: [{
            label: '# of Sales',
            data: deptSales,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        
    }
});*/

