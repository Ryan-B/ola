var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/frontpage.partial.html'
	})

	.when('/ourstory', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/ourstory.partial.html'
	})
	.when('/wedding_events', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/wedding_events.partial.html'
	})
	.when('/hotels2', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/hotels2.partial.html'
	})
	.when('/maps2', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/maps2.partial.html'
	})
	.when('/maps3', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/maps3.partial.html'
	})
	.when('/maps4', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/maps4.partial.html'
	})
	.when('/maps5', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/maps5.partial.html'
	})
	.when('/maps6', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/maps6.partial.html'
	})
	.when('/maps7', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/maps7.partial.html'
	})
	
	.when('/rsvp', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/rsvp.partial.html'
	})
	.when('/rsvp1', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/rsvp1.partial.html'
	})
	.when('/rsvp_no', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/rsvp_no.partial.html'
	})
	.when('/registry', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/registry.partial.html'
	})
	.when('/hidden', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/hidden.partial.html'
	})
	.when('/thursday', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/thursday.partial.html'
	})
	.when('/sports', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/sports.partial.html'
	})
	.when('/friday', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/friday.partial.html'
	})
	.when('/saturday', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/saturday.partial.html'
	})
	.when('/explore_seattle', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/explore_seattle.partial.html'
	})
	.when('/sunday', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/sunday.partial.html'
	})
	.when('/menu', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/menu.partial.html'
	})
	.when('/faq', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/faq.partial.html'
	})
	.when('/thanks', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/thanks.partial.html'
	})
	


});