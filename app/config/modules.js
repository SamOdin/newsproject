function initModules($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        modules: [

            /*Controllers*/

            {
                name: 'indexCtrl',
                files: ['/app/modules/index/controllers/indexCtrl.js']
            },

            {
                name: 'landingCtrl',
                files: ['/app/modules/landing/controllers/landingCtrl.js']
            },

            /*Providers*/

            {
                name: 'articlesProvider',
                files: ['/app/modules/index/services/articlesProvider.js']
            },

            {
                name: 'catalogProvider',
                files: ['/app/modules/index/services/catalogProvider.js']
            },

            /*Filters*/
            
            {
                name: 'articlesFilter',
                files: ['/app/modules/index/filters/articlesFilter.js']
            }
            
        ]
    });
}
