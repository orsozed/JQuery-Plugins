(function($) {
    $.fn.pluginBrowser = function(manifestURL) {
        $.log(manifestURL);
        $.ajax({
            url: manifestURL,
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',

            success: function (manifest) {
                $.each(manifest.plugins, function(i, plugin) {
                    var pluginURL = "https://raw.github.com/" + manifest.username + "/" + manifest.project + "/" + manifest.branch + "/plugins/" + plugin;
                    $.log(pluginURL);
                    $.ajax({
                        url: pluginURL,
                        type: 'GET',
                        contentType: 'application/json; charset=utf-8',
                        dataType: 'json',
                
                        success: function (plugin) {
                            $.log(plugin);
                        },
                
                        error: function (request, status, error) {
                            $.log(request.code);
                            $.log(request.responseText);
                            $.log(status);
                            $.log(error);
                        }
                    });
                });
            },

            error: function (request, status, error) {
                $.log(request.code);
                $.log(request.responseText);
                $.log(status);
                $.log(error);
            }
        });
    }
})(jQuery);