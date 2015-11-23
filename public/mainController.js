/**
 * Created by RavitejaSomisetty on 11/22/2015.
 */
scotchApp.controller("mainController", function ($scope, $location, MyService) {
    $scope.signup = function () {
        $location.url("/login");
    };

    $scope.login = function () {
        MyService.login($scope.user, function (res) {
            console.log("controll resp"+res);

            if (res == 'error') {
                alert("System Error")
            }
            if (res == null) {
                alert("Incorrect details")
            }
            else {
                alert("Successfully logged in!");
                $location.url("/");
            }
        })

    };
});
