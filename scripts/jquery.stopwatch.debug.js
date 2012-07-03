/// <reference path="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.2-vsdoc.js" />
/// <reference path="http://code.jquery.com/jquery-1.7.2.js" />

(function($) {
    $.stopwatch = function(prefix, method) {
        var self = this;
        var startTime;
        var isRunning = false;

        var hasConsole = (typeof window.console != 'undefined' && typeof window.console.time != 'undefined' && typeof window.console.timeEnd != 'undefined');

        var time = function() {
                /// <summary>PRIVATE: get the current time in milliseconds since January 1, 1970</summary>

                return new Date().getTime();
            };

        var watch = function(method) {
                /// <summary>PRIVATE: creates a stopwatch timer around the method.</summary>

                var proxied = method;
                method = function() {
                    self.start();
                    var rtn = proxied.apply(this, arguments);
                    self.stop();

                    return rtn;
                };

                return method;
            };

        this.start = function() {
            /// <summary>Start the stopwatch timer.</summary>

            if (!isRunning) {
                if (hasConsole) {
                    console.time(prefix);
                }
                else {
                    startTime = time();
                }
                isRunning = true;
            }
            else {
                throw 'stopwatch is already running';
            }
        };

        this.stop = function() {
            /// <summary>Stop the stopwatch timer.</summary>

            if (isRunning) {
                if (hasConsole) {
                    console.timeEnd(prefix);
                }
                else {
                    var milliseconds = (time() - startTime);
                    $.log(prefix + ': ' + milliseconds + 'ms');
                }
                isRunning = false;
            }
            else {
                throw 'start the stopwatch before stopping';
            }
        };

        if (method && $.isFunction(method)) {
            return watch(method);
        }
        else {
            return this;
        }
    };
})(jQuery);