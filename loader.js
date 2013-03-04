(function() {
	$("<link/>", { rel: "stylesheet", href: "http://code.jquery.com/qunit/qunit-git.css" }).appendTo("head");

	var dependencies = [
		"http://code.jquery.com/qunit/qunit-git.js",
		"http://code.jquery.com/ui/1.9.2/jquery-ui.js",
	];

	var i = 0;

	dependencies.forEach(function(url) {
		$.getScript(url, function() {
			if (++i === dependencies.length) {
				$.getScript("https://raw.github.com/hubgit/article-qunit/master/tests.js");
			}
		});
	});
})();
