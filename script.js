// var b = document.getElementById('myAddToCartButton');

// b.onclick = function(){
// 	alert('The coffee was added to the cart');
// }

// document.addEventListener("DOMContentLoaded", createDrivingDirectionsMap, false);

// function createDrivingDirectionsMap(){
// 	if (navigator.geolocation){
// 		navigator.geolocation.getCurrentPosition(OnSuccess, OnError, {
// 			enableHighAccuracy: true,
// 			maximumAge: 1000,
// 			timeout: 500
// 		});
// 	}
// 	else{
// 		document.getElementById("map").innerHTML = "No support for geolocation, can't find your position";
// 	}
// };

// function OnSuccess(position){
// 	showMap(
// 		position.coords.latitude,
// 		position.coords.longitude	
// 	);
// };

// function OnError(){
// 	var mapDiv = document.getElementById("map");
// 	switch (error.code){
// 		case error.PERMISSION_DENIED:
// 			mapDiv.innerHTML = "User denied the request for geolocation"
// 			break;
// 		case error.POSITION_UNAVAILABLE:
// 			mapDiv.innerHTML = "Location information is unavailable"
// 			break;
// 		case error.TIMEOUT:
// 			mapDiv.innerHTML = "The request timed out"
// 			break;		
// 		case error.UNKNOWN_ERROR:
// 			mapDiv.innerHTML = "An unknown error occured"
// 			break;	
// 	}
// };

// function showMap(lat, long){
// 	var directionsService = new google.maps.DirectionsService();
// 	var directionsRenderer = new google.maps.DirectionsRenderer();

// 	var route = {
// 		origin: new google.maps.LatLng(lat,long),
// 		destination: "Toval 13 Ramat Gan Israel",
// 		travelMode: google.maps.DiretionsTravelMode.DRIVING
// 	};

// 	var mapOptions = {
// 		zoom: 10,
// 		center: new google.maps.LatLng(50.8504500, 4.3487800),
// 		mapTypeId: google.maps.MspTypeId.ROADMAP
// 	};

// 	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
// 	directionsRenderer.SetMap(map);
// 	directionsRenderer.SetPanel(document.getElementById("driving-directions"));
// 	directionsService.route(route, function (result, status){
// 		if (status == google.maps.DirectionsStatus.OK){
// 			directionsRenderer.setDirections(result);
// 		}
// 	});

var coffeeSales = new Array();
coffeeSales[0] = "Jan, 170";
coffeeSales[1] = "Feb, 320";
coffeeSales[2] = "Mar, 432";
coffeeSales[3] = "Apr, 548";
coffeeSales[4] = "May, 342";
coffeeSales[5] = "Jun, 689";
coffeeSales[6] = "Jul, 344";
coffeeSales[7] = "Aug, 109";
coffeeSales[8] = "Sep, 655";
coffeeSales[9] = "Oct, 327";
coffeeSales[10] = "Nov, 109";
coffeeSales[11] = "Dec, 235";

function createAxis(context, startx, starty, endx, endy){
	context.beginPath();
	context.moveTo(startx, starty);
	context.lineTo(endx, endy);
	context.closePath();
	context.stroke();
}

function createBar (context, x, y, width, height){
	context.beginPath();
	context.rect(x, y, width, height);
	context.closePath();
	context.stroke();
	context.fill();
}

function drawChart(){
	var canvas = document.getElementById("barChart");

	if (canvas && canvas.getContext){
		var context = canvas.getContext('2d');
		createBarChart(context, coffeeSales, 30, 20, (canvas.height - 20), 50);
	}
}

function createBarChart(context, data, startX, barWidth, chartHeight){
	context.lineWidth = "1.2";
	var startY = 780;

	createAxis(context, startX, startY, startX, 30); // vertical
	createAxis(context, startX, startY, 650, startY); // horizontal

	context.lineWidth = "0.0";
	var maxValue = 0;
	for (var i = 0; i < data.length; i++) {
		var item = data[i].split(",");
		var itemName = item[0];
		var itemValue = parseInt(item[1]);
		if (parseInt(itemValue) > parseInt(maxValue)) maxValue = itemValue;

		context.fillStyle = "blue";
		createBar(context, 20 + startX + (i*barWidth) + i + (i*30), chartHeight - itemValue, barWidth, chartHeight);

		context.textAlign = "left";
		context.fillStyle = "black";
		context.fillText(itemName, 20 + startX + (i*barWidth) +i + (i*30), chartHeight +15);
	}
}