function intial(){
 

	new Chart(document.getElementById("doughnut-chart"), {
		type: 'doughnut',
		data: {
			labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
			datasets: [
			{
				label: "Population (millions)",
				backgroundColor: ["#f37123", "#0fad00","#a44599","#d20264","#C5007D"],
				data: [2478,5267,734,784,433]
			}
			]
		},
		options: {
			title: {
				display: true,
				text: 'Predicted world population (millions) in 2050'
			}
		}
	});
}