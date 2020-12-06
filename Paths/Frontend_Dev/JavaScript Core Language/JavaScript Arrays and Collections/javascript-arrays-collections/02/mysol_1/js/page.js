
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');

let yearlyLabel = document.getElementById('yearlyTotal');

// let monthlySales = Array.of(12,9,3);
let monthlySales = Array.of(500,9000,3000,4000);
let monthlyLabels = Array.of('Oct','Nov','Dec');

let deptSales = Array.of(12,9,3);
let deptLabels = Array.of('Hiking', 'Running', 'Hunting');

let yearlyTotal = 0;

function addYearlyTotal(x){
	yearlyTotal = x + yearlyTotal;
}
function addYearlyTotal2(a,b,c){
	return a+b+c;
}
let yearlyTotal2 = addYearlyTotal2(...monthlySales);
// console.log(yearlyTotal2);

monthlySales.forEach(addYearlyTotal);

yearlyLabel.innerHTML = "$" + yearlyTotal;


function findOver1000(){
	let firstThousand = monthlySales.findIndex(element => element > 1000);
	console.log(firstThousand);
}

function resetNum(){
	monthlySales.fill(0);
	monthlySalesChart.update();
}

var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        // labels: ['Oct', 'Nov', 'Dec'],
        labels: monthlyLabels,
        datasets: [{
            label: '# of Sales',
            // data: [12, 19, 3],
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
});

var deptSalesChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        // labels: ['Hiking', 'Running', 'Hunting'],
        labels: deptLabels,
        datasets: [{
            label: '# of Sales',
            // data: [12, 19, 3],
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
});

