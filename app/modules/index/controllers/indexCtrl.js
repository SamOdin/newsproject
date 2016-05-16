(function () {

    angular
        .module('controller.indexCtrl', [])
        .controller('indexCtrl', ['$scope', 'articlesProvider', 'catalogProvider', indexCtrl])

        function indexCtrl($scope, articlesProvider, catalogProvider) {
            $scope.header = '/app/modules/index/views/header.html';
            $scope.footer = 'app/modules/index/views/footer.html';

            articlesProvider.getArticles().$promise.then(function (res) {
                $scope.articles = res;
            });

            catalogProvider.getCatalog().$promise.then(function (res) {
                $scope.catalog = res;
            });

        }

})();