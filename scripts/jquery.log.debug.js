/// <reference path="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.2-vsdoc.js" />
/// <reference path="http://code.jquery.com/jquery-1.7.2.js" />

(function ($) {
    /// <param name="$" type="jQuery">A rererence to jQuery</param>
    var hasConsole = (typeof window.console != 'undefined' && typeof window.console.log != 'undefined');

    $.log = function (message, element) {
        /// <summary>Logs a message to console when available.</summary>
        /// <param name="message" type="string">The message.</param>
        if (hasConsole) {
            if ($.isPlainObject(message)) {
                if (element) {
                    console.log("%o: %o", message, element);
                } else {
                    console.log("%o", message);
                }
            } else {
                if (element) {
                    console.log("%s: %o", message, element);
                } else {
                    console.log("%s", message);
                }
            }
        }
    };

    $.fn.log = function (message) {
        /// <summary>Logs a message to console when available.</summary>
        /// <param name="message" type="string">The message.</param>
        $.log(message, this);
    };
})(jQuery);
