var app = angular.module("ShirtParty", ["ngRoute","ngStorage",'ui.bootstrap','rzModule','ngFileUpload']);

app.config(function($routeProvider) {
    $routeProvider

        .when("/shop", {
            templateUrl: "js/views/shop.html",
            controller: "shopController"
        })
        .when("/create", {
            templateUrl: "js/views/create.html",
            controller: "createController"
        })
        .when("/sell", {
            templateUrl: "js/views/sell.html",
            controller: "sellController"
        })


        .otherwise({
            redirectTo: '/home',
            templateUrl: 'js/views/home.html',
            controller : "homeController"
        });
});




