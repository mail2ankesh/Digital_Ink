window.onload = function () {
	var dataPoints = [];
	$.getJSON("http://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=100&type=json", function(data) {  
		$.each(data, function(key, value){
			dataPoints.push({x: value[0], y: parseInt(value[1])});
		});
		var chart = new CanvasJS.Chart("chartContainer",{
			title:{
				text:"Rendering Chart with dataPoints from External JSON"
			},
			data: [{
				type: "line",
				dataPoints : dataPoints,
			}]
		});
		chart.render();
	});
}