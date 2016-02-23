var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	email: { type: String, trim: true },
	first_name: { type: String, trim: true },
	last_name: { type: String, trim: true },
	attending: { type: String, trim: true },
	who_else: { type: String, trim: true },
	comment: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var Product = mongoose.model('Product', ProductSchema);
ProductSchema.path('email').required(true, "Email is required");
ProductSchema.path('first_name').required(true, "First name is required");
ProductSchema.path('last_name').required(true, "Last name is required");
ProductSchema.path('attending').required(true, "Are you attending?");
ProductSchema.path('who_else').required(true, "Who are you bringing?");