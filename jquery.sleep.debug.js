(function($) {
	$.sleep = function(milliseconds) {
		var time = function() {
			return new Date().getTime();
		}
		var sleeping = true;
		var startTime = time();
		
		while(sleeping){
			if(milliseconds >= time() - startTime) {
				sleeping = false;
			}
		}
	}
})(jQuery);