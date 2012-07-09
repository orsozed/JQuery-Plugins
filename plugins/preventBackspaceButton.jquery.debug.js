(function($) {
    $.preventBackspaceButton = function() {
        $('body').keydown(function(event) {
            if(event.which == 8 && $("input[type=text]:focus").length === 0) {
                var progress = confirm('are you sure you want to go back?');
                if(!progress) {
                    event.preventDefault();
                }
            }
        });
    };
})(jQuery);