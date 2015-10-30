var app = angular.module('simple-chart', []);
google.load("visualization", "1", {packages:["corechart"]});

app.controller('MainController', ['$scope', '$http',  function($scope, $http) {
  $http.get('/data').success(function(data){
    
  var dataArray = formatDataForView(data);

  var table = google.visualization.arrayToDataTable(dataArray, false);
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  
  
  
  var options = {'title':'Top 10 Countries that have the most fortune 500 companies in the world\n "https://en.wikipedia.org/wiki/Fortune_Global_500" ',
  'width':1600,'height':800}
  
  chart.draw(table, options);
  
  });
}]);

function formatDataForView(data) {
  
    var dataArray = [], keysArray = [];
    
    //get the keys
    for(var prop in data[0]) {
      keysArray.push(prop);
    }
    
    dataArray.push(keysArray);
    
    //get the values
    data.forEach(function(value){
        var dataEntry = [];
        for(var prop in value) {
          dataEntry.push(parseInt(value[prop], 0));
        }
        dataArray.push(dataEntry);
    });
  
    return dataArray;
}


