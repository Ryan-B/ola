app.controller('MainController', function(){
	console.log("MainController");
})

app.controller('MapsController', function(){
	console.log("MapsController loaded")

	function initMap() {
  var myLatLng = {lat: 47.6418836, lng: -122.377581};
  var ola = {lat: 47.700543, lng:  -122.359262};
  var discovery = {lat: 47.657916, lng: -122.412387};
  var gasworks = {lat: 47.646421, lng: -122.335024};
  var husky_stadium = {lat: 47.650461, lng: -122.302352};
  var qcyc = {lat: 47.643774, lng: -122.316846};
  var safeco = {lat: 47.591102, lng: -122.332917};
  var water_taxi = {lat: 47.601176, lng: -122.338776};
  // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

  // var baseballIcon = "/static/img/baseball.jpg"


  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: myLatLng
  });

  var ola_marker = new google.maps.Marker({
    position: ola,
    map: map,
    title: "Ola's House"
  });
  var discovery_marker = new google.maps.Marker({
    position: discovery,
    map: map,
    title: "Discovery Park"
  });
  var gasworks_marker = new google.maps.Marker({
    position: gasworks,
    map: map,
    title: "Gas Works Park/Wedding Location"
  });
  var husky_marker = new google.maps.Marker({
    position: husky_stadium,
    map: map,
    title: "Husky Stadium"
  });
  var qcyc_marker = new google.maps.Marker({
    position: qcyc,
    map: map,
    title: "Queen City Yacht Club/Reception Location"
  });
  var safeco_marker = new google.maps.Marker({
    position: safeco,
    map: map,
    title: "Safeco Field",
    // icon: baseballIcon
  });
  var water_taxi_marker = new google.maps.Marker({
    position: water_taxi,
    map: map,
    title: "Elliot Bay Water Taxi"
  });
}
})

app.controller('HomeController', function($interval, $scope) {

	console.log("HomeController Loaded")

		var dimages= [];
		var numImages=7;

		for (i=0; i<numImages; i++) {
		  // dimages[i]=new Image();
		  dimages.push("img/slideshow/"+(i+1)+".jpg");
		}

		var k = 0;
		this.image = dimages[k];

		var intervalId = $interval(function () {
			console.log('Switching image!');
			k++;
			if (k > numImages) {
				k = 0;
			}
			this.image = dimages[k];
		}.bind(this), 3000);

	$scope.$on('$destroy', function() {
		$interval.cancel(intervalId);
	});


		// var curImage=-1;
		// function swapPicture()
		// {
		//   if (document.images)
		//   {
		//     var nextImage=curImage+1;
		//     if (nextImage>=numImages)
		//       nextImage=0;
		//     if (dimages[nextImage] && dimages[nextImage].complete)
		//     {
		//       var target=0;
		//       if (document.images.myImage)
		//         target=document.images.myImage;
		//       if (document.all && document.getElementById("myImage"))
		//         target=document.getElementById("myImage");
		  
		//       // make sure target is valid.  It might not be valid
		//       //   if the page has not finished loading
		//       if (target)
		//       {
		//         target.src=dimages[nextImage].src;
		//         curImage=nextImage;
		//       }
		//       setTimeout("swapPicture()", 3000);
		//     }
		//     else
		//     {
		//       setTimeout("swapPicture()", 300);
		//     }
		//   }
		// }
		// setTimeout("swapPicture()", 3000);

	
})

app.controller('ProductsController', function(ProductsFactory){
	console.log("ProductsController Loaded");
	var _this = this;
	
	var getProducts = function(){
		console.log("ProductsController getProducts");
		
		ProductsFactory.getProducts(function(products){
			console.log(this);
			console.log(products);
			_this.products = products;
		});
	}
	this.addProduct = function(newProduct){
		console.log("Clicked", newProduct);
		if(newProduct){
			ProductsFactory.addProduct(newProduct, function(){
				getProducts();
				_this.newProduct = {};
			})
		}
	}
	getProducts();

	this.removeProduct = function(product){
		console.log("removeProduct", product);
		ProductsFactory.removeProduct(product, function(){
			getProducts();
		})
	}
	this.updateProduct = function(product){
		console.log("updateProduct", product);
		ProductsFactory.updateProduct(product, function(){
			getProducts();
		})
	}
})