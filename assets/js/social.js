/*
 * Parse the data and create a graph with the data.
 */
function parseData(createGraph,x) {
	Papa.parse("../data/37100072.csv", {
		download: true,
		complete: function(results) {
			console.log(results.data);
			createGraph(results.data,x);
		}
	});
}

function createGraph(data, x) {

	var years = [];
	var females = ["Females"];
	var males = ["Males"];

	for (var i = 1; i<data.length; i++){
		if((data[i][1] === "Canada") && (data[i][3] === "Total, registration status") && (data[i][4] === "Total, program level") && (data[i][5] === x)){
		if (data[i][6] === "Females"){
						years.push(data[i][0]);
						females.push(data[i][13]);
					}
		if (data[i][6] === "Males"){
						males.push(data[i][13]);}
		}
	}

	console.log(females);

	var chart = c3.generate({
			bindto: '#social',
		  data: {
		      columns: [
							males,
							females
		      ]
		  },
		  axis: {
		      x: {
		          type: 'category',
		          categories: years,
							tick: {
								multiline: false,
								culling: {
									max: 24
								}
							}
		      }
		  }
		});

}

function myFunction() {
  var x = document.getElementById("fields").value;
	console.log(x);
	parseData(createGraph, x);
}

// parseData(createGraph);
