﻿"use strict";

angular.module('psMenu').directive('psMenu', function () {
    return {
        transclude: true,
        templateUrl: 'ext-modules/psMenu/psMenuTemplate.html',
        controller: 'psMenuController',
        link: function (scope, el, attr) {

        }
    };
});