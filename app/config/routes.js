function initStates($stateProvider, $ocLazyLoadProvider) {
    $stateProvider
        .state('index',{
            abstract: true,
            views: {
                'layout': {
                    controller: 'indexCtrl',
                    templateUrl: '/app/modules/index/views/layout.html',
                    resolve: resolveModule (['indexCtrl', 'articlesProvider', 'catalogProvider', 'articlesFilter'])
                }
            }
        })

        .state('landing', {
            url: '/',
            parent: 'index',
            views: {
                'landing': {
                    templateUrl: '/app/modules/landing/views/landing.html',
                    resolve: resolveModule([])
                }
            }
        })



    function resolveModule(moduleName) {
        return {
            loadModules: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load(moduleName);
            }]
        }
    }
}