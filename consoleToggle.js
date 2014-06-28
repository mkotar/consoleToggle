/*global console,for, window*/
(function () {
    'use strict';

    var consoleToggle = function (params) {
        var defaults = {
                show: true,
                change: false
            },
            defaultConsole = window.console,
            showConsoleLogs,
            overwrite,
            hideConsole,
            action = window.localStorage.getItem('consoleToggle');

        if (!params) {
            params = defaults;
        }

        showConsoleLogs = params.show === 'undefined' ? defaults.show : params.show;
        overwrite = params.change === 'undefined' ? defaults.change : params.change;

        /*
         * this function is not JSLint valid.
         * it only set empty functions for all console functions
         */
        hideConsole = function () {
            var method;
            for (method in window.console) {
                if (typeof window.console[method] === 'function') {
                    window.console[method] = function () {
                    };
                }
            }
        };

        if(!overwrite) {
            action = showConsoleLogs;
        }

        if (!showConsoleLogs && action !== 'show') {
            hideConsole();
        }

        if (overwrite) {
            if (action === 'show') {
                window.console = defaultConsole;
            } else {
                hideConsole();
                window.localStorage.setItem('consoleToggle', 'hide');

            }
        }
        return {
            display: function (param) {
                var setAction = 'show';
                if (param === 'hide') {
                    setAction = 'hide';
                }
                window.localStorage.setItem('consoleToggle', setAction);

                return 'You have decided to ' + setAction + ' console logs';
            }
        };
    };

    window.consoleToggle = consoleToggle;
}());
