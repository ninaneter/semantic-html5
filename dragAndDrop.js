// document.addEventListener("DOMContentLoaded", addDnDHandlers, false);

// function addDnDHandlers(){
// 	var cofeeimages = document.getElementByClassName("productarticlewide");
// 	var shoppingCartDropzone = document.getElementById("shoppingcart");
// 	var shoppingcart = document.querySelectorAll("#shoppingcart ul")[0];

// 	for (var i = 0; i < coffeeimages.length; i++){
// 		coffeeimages[i].addEventListener("dragstart", function(e){
// 			e.dataTransfer.effectAllowed = 'copy';
// 			e.dataTransfer.SetData("Text", this.getAttribute("id"));
// 		}, false);
// 	}

// 	shoppingCartDropzone.addEventListener("dragover", function(e){
// 		if (e.preventDefault)
// 			e.preventDefault();
// 		e.dataTransfer.dropEffect = "copy";
// 		return false;
// 	}, false);

// 	shoppingCartDropzone.addEventListener("drop", function(e){
// 		if (e.stopPropagation)
// 			e.stopPropagation();
// 		var coffeeId = e.dataTransfer.getData("Text");
// 		var element = document.getElementById(coffeeId);
// 		addCoffeeToShoppingCart(element, coffeeId);
// 		e.stopPropagation();
// 		return false;
// 	}, false);

// 	function addCoffeeToShoppingCart(item, id){
// 		var html = id + " " + item.getAttribute("data-price");
// 		var liElement = document.createElement('li');
// 		liElement.innerHTML = html;
// 		shoppingcart.appendChild(liElement);
// 	}

// }