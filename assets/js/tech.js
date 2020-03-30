/*
 * Parse the data and create a graph with the data.
 */
// var e = document.getElementById("fields");
 // var strUser = e.options[e.selectedIndex].value;
 function parseData(createGraph, value, id) {
	 console.log("hello")
 	Papa.parse("../data/37100072.csv", {
 		download: true,
 		complete: function(results) {
 			console.log(results.data);
 			createGraph(results.data, value, id);
 		}
 	});
 }


function createGraph(data, value, id) {

	var years = [];
	var females = ["Females"];
	var males = ["Males"];

	for (var i = 1; i<data.length; i++){
		if((data[i][1] === "Canada") && (data[i][3] === "Total, registration status") && (data[i][4] === "Total, program level") && (data[i][5] === value)){
		if (data[i][6] === "Females"){
						years.push(data[i][0]);
						females.push(data[i][13]);
					}
		if (data[i][6] === "Males"){
						males.push(data[i][13]);}
		}
	}

	// console.log(females);

	var chart = c3.generate({
			bindto: document.getElementById(id),
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

// parseData(createGraph, document.getElementById("fields").value, "tech" );


function myFunction() {
  var x = document.getElementById("fields").value;
	console.log(x);
	parseData(createGraph, x, "edu");
}
