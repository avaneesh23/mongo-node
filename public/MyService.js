
scotchApp.factory("MyService", function ($http, $location, $interval) {

    var login = function (user, callback) {
        console.log("service "+user);
        $http.post("/login", user)
            .success(function (res) {
                callback(res);
            })
            .error(function (res) {
                callback(null);
            })
    };

    var register = function (newUser, callback) {
        $http.post("/register", newUser)
            .success(function (res) {
                if (res == 'ok') {
                    $http.post("/login", newUser)
                    .success(function (res) {

                        callback(res);
                    })
                }
            });
    };

    return {
        login: login,
        register: register
    }

});