(function () {
    "use strict";

    var module = angular.module("psMovies");

    function controller() {
        var model = this;

        model.$routerOnActivate = function (next) {
            model.id = next.params.id;
        };
    }

    module.component("movieDetails", {
        templateUrl: "/ps-movies/movie-details.component.html",
        $routeConfig: [
            { path: "/overview", component: "movieOverview", name: "Overview" },
            { path: "/cast", component: "movieCast", name: "Cast" },
            { path: "/director", component: "movieDirector", name: "Director" }
        ],
        controllerAs: "model",
        controller: controller
    });

    module.component("movieOverview", {
        template: "This is the movie overview",
    });

    module.component("movieCast", {
        template: "This is the movie cast",
    });

    module.component("movieDirector", {
        template: "This is the director of the movies",
    });


}());