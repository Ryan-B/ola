app.controller('MainController', function(){
	console.log("MainController");
})

app.controller('MapsController', function(){
	console.log("MapsController loaded");

})


app.controller('HomeController', function($interval, $scope) {

	console.log("HomeController Loaded")

		var dimages= [];
		var numImages=11;

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
		}.bind(this), 8000);

	$scope.$on('$destroy', function() {
		$interval.cancel(intervalId);
	});
	
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

app.controller('DeclinesController', function(DeclinesFactory){
	console.log("DeclinesController Loaded");
	var _this = this;
	
	var getDeclines = function(){
		console.log("DeclinesController getDeclines");
		
		DeclinesFactory.getDeclines(function(declines){
			console.log(this);
			console.log(declines);
			_this.declines = declines;
		});
	}
	this.addDecline = function(newDecline){
		console.log("Clicked", newDecline);
		if(newDecline){
			DeclinesFactory.addDecline(newDecline, function(){
				getDeclines();
				_this.newDecline = {};
			})
		}
	}
	getDeclines();

	this.removeDecline = function(decline){
		console.log("removeDecline", decline);
		DeclinesFactory.removeDecline(decline, function(){
			getDeclines();
		})
	}
	this.updateDecline = function(decline){
		console.log("updateDecline", decline);
		DeclinesFactory.updateDecline(decline, function(){
			getDeclines();
		})
	}
})

