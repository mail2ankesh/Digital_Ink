(function () {

    var RegistrationController = function ($scope, $window) {
        $scope.firstname = null;
       $scope.lastname = null;
        $scope.email = null;

        $scope.Adduser = function () {
            $window.location.href = '/subscription.html#/ThankYou/' + $scope.firstname;
        }
    }

    angular.module('demoApp').controller('RegistrationController', RegistrationController);
});
   