(function () {

    angular
        .module('catalogProvider', [])
        .factory('catalogProvider', ['$resource', catalogProvider])

            function catalogProvider($resource) {
                return $resource('/data/catalog.json', {  }, {
                    'getCatalog': {
                        method: 'GET',
                        isArray: true
                    }
                })
            }

})();