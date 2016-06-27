var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	last_name: { type: String, trim: true },
	first_name: { type: String, trim: true },
	email: { type: String, trim: true },
	fact: { type: String, trim: true },
	song: { type: String, trim: true },
	diet: { type: String, trim: true },
	guest: { type: String, trim: true },
	diet_guest: { type: String, trim: true },
	fact_guest: { type: String, trim: true },
	kid1: { type: String, trim: true },
	kid1_age: { type: String, trim: true },
	kid1_diet: { type: String, trim: true },
	kid2: { type: String, trim: true },
	kid2_age: { type: String, trim: true },
	kid2_diet: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Product = mongoose.model('Product', ProductSchema);
ProductSchema.path('email').required(true, "Email is required");
ProductSchema.path('first_name').required(true, "First name is required");
ProductSchema.path('last_name').required(true, "Last name is required");
ProductSchema.path('fact').required(true, "Tell us an interesting fact about you!");