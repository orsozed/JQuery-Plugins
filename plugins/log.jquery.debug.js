(function($) {
    var hasConsole = (typeof window.console != 'undefined' && typeof window.console.log != 'undefined');

    $.log = function(message, element) {
        if (hasConsole) {
            if ($.isPlainObject(message)) {
                if (element) {
                    console.log("%o: %o", message, element);
                }
                else {
                    console.log("%o", message);
                }
            }
            else {
                if (element) {
                    console.log("%s: %o", message, element);
                }
                else {
                    console.log("%s", message);
                }
            }
        }
    };

    $.fn.log = function(message) {
        $.log(message, this);
    };
})(jQuery);