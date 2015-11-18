app.controller("LoginCtrl", function ($scope, $location, MyService) {
    $scope.login = function () {
        MyService.login($scope.loginUser, function (res) {
            if (res == 'Error') { alert("System Error") }
            if (res == null) { alert("Incrrect details") }
            else {
                alert("logged in");
                $location.url("/home");
            }
        })

    };

    $scope.register = function () {
        if ($scope.newUser.password == $scope.newUser.confirmpassword) {
            MyService.register($scope.newUser, function (res) {
                if (res == 'Error') { alert("System Error") }
                else {
                    alert("logged in");
                    $location.url("/home");
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