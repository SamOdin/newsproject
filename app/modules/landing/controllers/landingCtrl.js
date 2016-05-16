(function () {

    angular
        .module('landingCtrl', [])
        .controller('landingCtrl', ['$scope', 'articlesProvider', 'catalogProvider', landingCtrl])
    
            function landingCtrl($scope, articlesProvider, catalogProvider) {
                $scope.randomArticles = [];

                for (var i = 0; i < 4; i++) {
                    var randomNumber = (Math.floor(Math.random() * ($scope.articles.length - ($scope.articles.length / 2)) + ($scope.articles.length / 2)));
                    $scope.randomArticles.push($scope.articles[randomNumber]);
                }

                console.log($scope.randomArticles)

            }

})();