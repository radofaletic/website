module.exports = {
	get: function (pages, staticFiles) {
		var headerHTML = '<header class="col-md-2" id="header">\n';
		headerHTML += '	<nav class="navbar navbar-default navbar-fixed-left" role="navigation">\n';
		headerHTML += '		<div class="container-fluid">\n';
		headerHTML += '			<div class="navbar-header">\n';
		headerHTML += '				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#rado-navbar-collapse">\n';
		headerHTML += '					<span class="sr-only">Toggle navigation</span>\n';
		headerHTML += '					<span class="icon-bar"></span>\n';
		headerHTML += '					<span class="icon-bar"></span>\n';
		headerHTML += '					<span class="icon-bar"></span>\n';
		headerHTML += '				</button>\n';
		headerHTML += '			</div>\n';
		headerHTML += '			<div class="collapse navbar-collapse" id="rado-navbar-collapse">\n';
		headerHTML += '				<div class="navbar-nav">\n';
		headerHTML += '					<ul class="nav nav-pills nav-stacked">\n';
		headerHTML += '						<li class="navbar-text"><img class="img-rounded img-responsive" src="http://' + staticFiles + '/photos/Rado/Rado' + (Math.floor(Math.random() * 11) + 6) + '.png" alt="Rado Faletič" /></li>\n';
		for (var iHook in pages) {
			headerHTML += '						<li><a href="/' + ((iHook == 'index') ? '' : iHook) + '" title="' + pages[iHook].navTitle + '">' + pages[iHook].navTitle + '</a></li>\n';
		}								
		headerHTML += '					</ul>\n';
		headerHTML += '				</div>\n';
		headerHTML += '			</div>\n';
		headerHTML += '		</div>\n';
		headerHTML += '	</nav>\n';
		headerHTML += '</header>\n';
		return headerHTML;
	}
}
