(function () {

    angular
        .module('landingCtrl', [])
        .controller('landingCtrl', ['$scope', 'articlesProvider', 'catalogProvider', landingCtrl])
    
            function landingCtrl($scope, articlesProvider, catalogProvider) {
                $scope.articles.$promise.then(function (responce) {
                    for (var i = 0; i < 4; i++) {
                        var randomNumber = (Math.floor(Math.random() * (responce.length - (responce.length / 2)) + (responce.length / 2)));
                        $scope.randomArticles.push(responce[randomNumber]);
                    }

                    console.log($scope.randomArticles);
                });



            }

})();