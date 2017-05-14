module.exports = {
	get: function (pageTitle, staticFiles, boostrapVersion, html5shivVersion, respondJsVersion) {
		var headerHTML = '<head>\n';
		headerHTML += '	<meta charset="utf-8">\n';
		headerHTML += '	<meta http-equiv="X-UA-Compatible" content="IE=edge">\n';
		headerHTML += '	<meta name="viewport" content="width=device-width, initial-scale=1">\n';
		headerHTML += '	<title>' + pageTitle + ' | Rado Faletič</title>\n';
		headerHTML += '	<link rel="license" href="/about" />\n';
		headerHTML += '	<meta name="author" content="Rado Faletič" />\n';
		headerHTML += '	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/' + boostrapVersion + '/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />\n';
		headerHTML += '	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/' + boostrapVersion + '/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous" />\n';
		headerHTML += '	<link rel="stylesheet" href="http://' + staticFiles + '/css/style.css" type="text/css" />\n';
		headerHTML += '	<!--[if lt IE 9]>\n';
		headerHTML += '		<script src="https://oss.maxcdn.com/html5shiv/' + html5shivVersion + '/html5shiv.min.js" />\n';
		headerHTML += '		<script src="https://oss.maxcdn.com/respond/' + respondJsVersion + '/respond.min.js" />\n';
		headerHTML += '	<![endif]-->\n';
		headerHTML += '</head>\n';
		return headerHTML;
	}
}
