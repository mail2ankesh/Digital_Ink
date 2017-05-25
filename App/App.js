(function () {

    var app = angular.module('demoApp', ['ngRoute', 'ngAnimate']);

    app.config(function ($routeProvider) {
        $routeProvider.when('/',
            {
                controller: 'RegistrationController',
                templateUrl: 'app/views/Registration.html'
            })
        .when('/ThankYou/:firstname',
        {
            controller: 'ThankYouController',
            templateUrl: 'app/views/ThankYou.html'
        })
    });

}()
);