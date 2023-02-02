app.controller('weatherController',['$scope','$http',function($scope,$http){

        $scope.weatherIndex = 1;

    $http.get('weather.php').then(function(response){
        $scope.weatherData = response.data;
    })

    $scope.onLeftButtonClick = function() {
        let max = $scope.weatherData.length-1;

        if ($scope.weatherIndex > 0)
            $scope.weatherIndex--;
        else
            $scope.weatherIndex = max;
    }

    $scope.onRightButtonClick = function() {
        let max = $scope.weatherData.length;

        if ($scope.weatherIndex < max-1)
            $scope.weatherIndex++;
        else
            $scope.weatherIndex = 0;
    }
}]);

