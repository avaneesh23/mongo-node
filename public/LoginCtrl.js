scotchApp.controller("LoginCtrl", function ($scope, $location, MyService) {

        $scope.register = function () {
            if ($scope.newUser.password == $scope.newUser.confirmpassword) {
                MyService.register($scope.newUser, function (res) {
                    if (res == 'Error') {
                        alert("System Error")
                    }
                    else {
                        alert("logged in");
                        $location.url("/");
                    }
                });
            } else {
                alert("passwords do not match.");
            }

        };

        $scope.gotohome = function () {
            $location.url("/home");
        };

    }
);