(function () {

    var app = angular.module('main', []);

    app.controller('articlesCtrl', function ($scope, $http) {
        $http.get('/articles.json')
            .then(function(res) {
                $scope.articles = res.data;
            });
    });
    app.filter('searchFor', function () {
        return function (arr, search) {
            if (!search) {
                return arr;
            }
            var result = [];
            search = search.toLowerCase();
            angular.forEach(arr, function (article) {
                if (article.title.toLowerCase().indexOf(search) !== -1) {
                    result.push(article)
                }
            });
            return result;
        }
    })
    
})();