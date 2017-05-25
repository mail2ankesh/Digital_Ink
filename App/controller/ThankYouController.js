(function () {
    var ThankYouController = function ($scope, $routeParams) {

        $scope.firstname = $routeParams.firstname;
    }

    angular.module("demoApp").controller('ThankYouController', 'ThankYouController');
}()
);