var Product = mongoose.model('Product');

module.exports = (function(){
	return{
		index: function(request, response){
			console.log("Server / Ctrl / Products - Index")
			Product.find({}, function(err, products){
				if(err){
					console.log(err);
					response.json(err);
				}
				else{
					console.log(products);
					response.json(products);
				}
			})
		},
		create: function(request, response){
			console.log('Server / Ctrl / Products - Create', request.body)
			var product = new Product;
			product.last_name = request.body.last_name;
			product.first_name = request.body.first_name;
			// product.attending = request.body.attending;
			product.diet = request.body.diet;
			product.email = request.body.email;
			product.song = request.body.song;
			product.fact = request.body.fact;
			product.guest = request.body.guest;
			product.diet_guest = request.body.diet_guest;
			product.fact_guest = request.body.fact_guest;
			product.save(function(err){
				if(err){
					console.log(err);
					response.json({status:"false"});
				}
				else{
					response.json({status:"true"});
				}
			})
		},
		destroy: function(request, response){
			console.log("Server / Ctrl / Products - destroy")
			Product.remove({_id:request.params.id}, function(err){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		}

	}
})();