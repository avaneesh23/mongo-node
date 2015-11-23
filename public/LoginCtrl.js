scotchApp.controller("LoginCtrl", function ($scope, $location, MyService) {
    $scope.login = function () {
        MyService.login($scope.loginUser, function (res) {
            if (res == 'Error') { alert("System Error") }
<<<<<<< HEAD
            if (res == null) { alert("Incrrect details") }
=======
            if (res == null) { alert("Incorrect details") }
>>>>>>> 8c91dd354b1c6e2f81fc1766bd88358976682813
            else {
                alert("logged in");
                $location.url("/");
            }
        })

    };

    $scope.register = function () {
        if ($scope.newUser.password == $scope.newUser.confirmpassword) {
            MyService.register($scope.newUser, function (res) {
                if (res == 'Error') { alert("System Error") }
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