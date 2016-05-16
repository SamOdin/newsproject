(function () {
    
    angular
        .module('articlesProvider', [])
        .factory('articlesProvider', ['$resource', articlesProvider])

            function articlesProvider($resource) {
                return $resource('/data/articles.json', {  }, {
                    'getArticles': {
                        method: 'GET',
                        isArray: true
                    }
                })
            }
    
})();