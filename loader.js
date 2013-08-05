(function() {
	var base = document.getElementById("article-qunit-loader").src.replace(/\/[^\/]*$/, "");

	$("<link/>", { rel: "stylesheet", href: base + "/vendor/qunit.css" }).appendTo("head");

	var dependencies = [
		base + "/vendor/jquery.js",
		base + "/vendor/jquery-ui.js",
		base + "/vendor/qunit.js",
		//base + "/vendor/a.js",
		base + "/vendor/microdata.js",
	];

	var i = 0;

	dependencies.forEach(function(url) {
		$.getScript(url, function() {
			if (++i === dependencies.length) {
				$.getScript(base + "/tests.js");
			}
		});
	});
})();
