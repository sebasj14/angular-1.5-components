(function () {
    "use strict";

    var module = angular.module("psMovies");

    module.component("movieRating", {
        templateUrl: "/ps-movies/movie-rating.component.html",
        bindings: {
            value: "<",
            max: "<",
            setRating: "&"
        },
        controllerAs: "model",
        controller: controller
    });

    function controller() {
        var model = this;

        model.$onInit = function () {
            model.entries = buildEntries(model.value, model.max);
        };

        model.$onChanges = function () {
            model.entries = buildEntries(model.value, model.max);
        };
    }

    function buildEntries(value, max) {
        var entries = [];
        for (var index = 1; index <= max; index++) {
            var icon = index <= value ? "glyphicon-star" : "glyphicon-star-empty";
            entries.push(icon);
        }
        return entries;
    }
}());