(function($) {
    $.sleep = function(milliseconds) {
        /// <summary>Locks up the javascript thread.</summary>
        /// <param name="milliseconds" type="number">The number of milliseconds to sleep for.</param>
        var time = function() {
                /// <summary>PRIVATE: get the current time in milliseconds since January 1, 1970</summary>
                return new Date().getTime();
            };
        var sleeping = true;
        var startTime = time();

        while (sleeping) {
            if (milliseconds <= time() - startTime) {
                sleeping = false;
            }
        }
    };
})(jQuery);