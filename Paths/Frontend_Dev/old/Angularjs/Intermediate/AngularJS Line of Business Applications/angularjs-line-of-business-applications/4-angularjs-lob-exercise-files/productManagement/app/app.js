/**
 * Created by Deb on 8/20/2014.
 */
(function () {
    "use strict";
    var app = angular.module("productManagement", 
                ["common.services", "ui.router", "productResourceMock"]).config(coreRoutesConfig);

    coreRoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function coreRoutesConfig($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "app/welcomeView.html"
            })
            // Products
            .state("productList", {
                url: "/products",
                templateUrl: "app/products/productListView.html",
                controller: "ProductListCtrl",
                controllerAs: 'vm'
            })
            .state("productEdit", {
                url: "/products/edit/:productId",
                templateUrl: "app/products/productEditView.html",
                controller: "ProductEditCtrl",
                controllerAs: 'vm'
            })

    }

}());