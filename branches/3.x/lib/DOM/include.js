
AttackAPI.include = function (url, onload) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.defer = true;
	script.src = url;
	script.onload = function () {
		document.body.removeChild(script);

		if (typeof(onload) == 'function')
			onload.apply(script, arguments);
	};
	
	document.body.appendChild(script);
};
