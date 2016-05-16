(function () {

    angular
        .module('controller.indexCtrl', [])
        .controller('indexCtrl', ['$scope', '$state', 'articlesProvider', 'catalogProvider', indexCtrl])

        function indexCtrl($scope, $state, articlesProvider, catalogProvider) {
            $scope.header = '/app/modules/index/views/header.html';
            $scope.footer = 'app/modules/index/views/footer.html';

            $scope.articles = articlesProvider.getArticles();

            catalogProvider.getCatalog().$promise.then(function (response) {
                $scope.catalog = response;
            });

        }

})();