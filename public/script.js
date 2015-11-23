// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute', 'ngMap']);

// configure our routes
//noinspection JSUnresolvedFunction
scotchApp.config(function($routeProvider) {
    //noinspection JSUnresolvedFunction
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        }) .when('/login', {
        templateUrl : 'pages/login.html',
        controller  : 'LoginCtrl'
    }) .when('/register', {
        templateUrl : 'pages/login.html',
        controller  : 'LoginCtrl'
    });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

<<<<<<< HEAD
scotchApp.controller('getLocation', function($scope, $http) {

        google.maps.event.trigger(map, "resize");
=======
scotchApp.controller('getLocation', function($scope, $http, NgMap) {

        //google.maps.event.trigger(map, "resize");
>>>>>>> 8c91dd354b1c6e2f81fc1766bd88358976682813

        $scope.userlat = "0",
        $scope.userlong = "0",
        $scope.error = "",
        $scope.visibility = false,
<<<<<<< HEAD
        //  $scope.searchQuery = "Boston",
=======
        $scope.searchQuery = "",
        $scope.where = "",
>>>>>>> 8c91dd354b1c6e2f81fc1766bd88358976682813
        $scope.apiKey = "rcnxbzfT3dLNF3ff",
        $scope.url = "";
    //  $scope.url = "http://api.eventful.com/json/events/search?app_key="+$scope.apiKey+"&keywords=books&location="+$scope.searchQuery+"&date=Future";

    $scope.init = function()
    {
<<<<<<< HEAD
=======
        //google.maps.event.trigger(map, "resize");
>>>>>>> 8c91dd354b1c6e2f81fc1766bd88358976682813
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition($scope.showPosition,$scope.showError);
        }
        else
        {
            $scope.error = "Geolocation is not supported by this browser";
        }
    }

    $scope.showPosition = function(position)
    {
        $scope.userlat = position.coords.latitude;
        $scope.userlong = position.coords.longitude;
<<<<<<< HEAD
        $scope.url = "http://api.eventful.com/json/events/search?app_key="+$scope.apiKey+"&where="+$scope.userlat+","+$scope.userlong+"&within=5&units=mi&date=Future&page_size=10";
=======
        $scope.where = $scope.userlat+","+$scope.userlong;
        $scope.url = "http://api.eventful.com/json/events/search?app_key="+$scope.apiKey+"&where="+$scope.where+"&within=5&units=mi&date=Future&page_size=10";
>>>>>>> 8c91dd354b1c6e2f81fc1766bd88358976682813
        $scope.show();
        $scope.$apply();

    }

    $scope.showError = function (error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
<<<<<<< HEAD
                $scope.error = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                $scope.error = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                $scope.error = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                $scope.error = "An unknown error occurred."
=======
                $scope.error = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                $scope.error = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                $scope.error = "The request to get user location timed out.";
                break;
            case error.UNKNOWN_ERROR:
                $scope.error = "An unknown error occurred.";
>>>>>>> 8c91dd354b1c6e2f81fc1766bd88358976682813
                break;
        }
        $scope.$apply();
    }

<<<<<<< HEAD
=======
    NgMap.getMap().then(function(map) {
        //console.log('map', map);
        $scope.map = map;
    });

    $scope.clickEventInfo = function(event, e) {
        //alert("here"+JSON.stringify(e));
        $scope.mapEvent = e;
        $scope.map.showInfoWindow('map-event');
    };

    $scope.hideDetail = function() {
        $scope.map.hideInfoWindow('map-event');
    };

    $scope.search = function()
    {
        //alert("searching..");
        $scope.where = $scope.searchQuery;
        $scope.url = "http://api.eventful.com/json/events/search?app_key="+$scope.apiKey+"&where="+$scope.where+"&within=5&units=mi&date=Future&page_size=10";
        $scope.show();
    };

>>>>>>> 8c91dd354b1c6e2f81fc1766bd88358976682813
    $scope.show = function()
    {
        $scope.visibility = true;
        $http.get($scope.url).success(function(data, status, headers, config) {

            $scope.eventData = data;
            $scope.eventDetails=[];

          //  for(var i=1; i<$scope.eventData.page_count;i++)
          //  {
                for(var j=0;j<$scope.eventData.events.event.length;j++)
                {
                    var eventObj = new Object();
                    eventObj.url = $scope.eventData.events.event[j].url;
                    eventObj.title = $scope.eventData.events.event[j].title;
                    eventObj.desc = $scope.eventData.events.event[j].description;
                    eventObj.start_time = $scope.eventData.events.event[j].start_time;
                    eventObj.stop_time = $scope.eventData.events.event[j].stop_time;
                    eventObj.venue_name = $scope.eventData.events.event[j].venue_name;
                    eventObj.venue_address = $scope.eventData.events.event[j].venue_address;
                    eventObj.city = $scope.eventData.events.event[j].city_name;
                    eventObj.latitude = $scope.eventData.events.event[j].latitude;
                    eventObj.longitude = $scope.eventData.events.event[j].longitude;
                    eventObj.image = "images/not-available.gif";
                    if($scope.eventData.events.event[j].image!=null)
                    {
                        eventObj.image = $scope.eventData.events.event[j].image.small.url;
                    }

<<<<<<< HEAD

=======
>>>>>>> 8c91dd354b1c6e2f81fc1766bd88358976682813
                    $scope.eventDetails.push(eventObj);
                }
          //  }
        }).error(function(error) {
        });
    };

<<<<<<< HEAD
});
=======
});
>>>>>>> 8c91dd354b1c6e2f81fc1766bd88358976682813
