app.controller('MainController', function(){
	console.log("MainController");
})

app.controller('HomeController', function($interval, $scope) {

	console.log("HomeController Loaded")

		var dimages= [];
		var numImages=6;

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