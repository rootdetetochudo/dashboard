var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["2023", "FEBRUARY", "YESTERDAY", "TODAY"],
        datasets: [{
            label: "Earnings",
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: 'rgba(26, 188, 138, 1)',
            data: [50, 700, 400.00046, 100.01],
        }]
    },

    // Configuration options go here
    options: {}
});

angular.module("app", []).controller("coin", function($scope, $http) {
  $http
    .get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(function(res) {
      $scope.content = res.data;
      $scope.priceGBP = $scope.content.bpi.GBP.rate;
    });
});