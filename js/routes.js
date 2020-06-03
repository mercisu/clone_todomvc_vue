(function (app, Router) {
    'use strict';

    var router = new Router();

    ['all', 'active', 'completed'].forEach(function (visibility) {
        router.on(visibility, function () {
            app.visibility = visibility;
        });
    });

    router.configure({
        notfound: function () {
            window.location.has = '';
            app.visibility = 'all';
        }
    });

    router.init();

})(app, Router);
