(function() {
	var base = document.getElementById("article-qunit-loader").href.replace(/\/[^\/]*$/, "");

	$("<link/>", { rel: "stylesheet", href: base + "/vendor/qunit-git.css" }).appendTo("head");

	var dependencies = [
		base + "/qunit-git.js",
		base + "/jquery-ui.js",
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
