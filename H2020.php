<?php
ini_set('display_startup_errors', true);
ini_set('display_errors', true);
ini_set('default_charset', 'utf-8');
ini_set('date.default_latitude', '-35.281528');
ini_set('date.default_longitude', '149.119833');
date_default_timezone_set('Australia/ACT');
iconv_set_encoding('input_encoding', 'UTF-8');
iconv_set_encoding('output_encoding', 'UTF-8');
iconv_set_encoding('internal_encoding', 'UTF-8');
setlocale(LC_ALL, 'en_AU.UTF-8', 'en_AU', 'en', 'english');
setlocale(LC_MONETARY, 'en_AU');
        
header('Content-Type: text/plain; charset: utf-8');

$db = new mysqli('127.0.0.1', 'montroix', 'ak1t0ra', 'CORDIS-H2020', ini_get('mysqli.default_port'), '/var/lib/mysql/mysql.sock');
$db->query('SET NAMES utf8 COLLATE utf8_unicode_ci');
$db->query('SET CHARACTER SET utf8');

$projectQuery = $db->query("SELECT * FROM Projects");
$i = 0;

//$fundingSchemes = array();

/*
while ($project = $projectQuery->fetch_assoc()) {
	echo ++$i . "\t" . $project['rcn'];
	
	// call
	//$calls[] = $project['call'];
	//$db->query("INSERT INTO Calls SET `rcn`=" . $project['rcn'] . ",`call`='" . $db->real_escape_string($project['call']) . "'");
	
	// fundingScheme
	//$fundingSchemes[] = $project['fundingScheme'];
	//$db->query("INSERT INTO FundingSchemes SET `rcn`=" . $project['rcn'] . ",`fundingScheme`='" . $db->real_escape_string($project['fundingScheme']) . "'");
	
	// topics
	//$topics[] = $project['topics'];
	//$db->query("INSERT INTO Topics SET `rcn`=" . $project['rcn'] . ",`topics`='" . $db->real_escape_string($project['topics']) . "'");
	
	// countries
	//$country = $project['coordinatorCountry'];
	//$q = $db->query("SELECT * FROM Countries WHERE `country`='" . $db->real_escape_string($project['coordinatorCountry']) . "'");
	//if (!$q->num_rows) {
	//	echo "\t" . $project['coordinatorCountry'] . '!';
	//}
	
	
	
	echo "\n";
}
*/

//$fundingSchemes = array_unique($fundingSchemes);
//foreach ($fundingSchemes as $fundingScheme) {
//	$db->query("INSERT INTO FundingSchemes SET `fundingScheme`='" . $db->real_escape_string($fundingScheme) . "'");
//}



$orgQuery = $db->query("SELECT * FROM Organizations WHERE `id` = 0");
while ($org = $orgQuery->fetch_assoc()) {
	echo $org['a'] . "\t";
	$oOQ = $db->query("SELECT * FROM Organizations WHERE `id` != 0 AND `shortName`='" . $db->real_escape_string($org['shortName']) . "' AND `country`='" . $db->real_escape_string($org['country']) . "'");
	if ($oOQ->num_rows) {
		$oO = $oOQ->fetch_assoc();
		echo $oO['id'];
		//$db->query("UPDATE Organizations SET `id`=" . $oO['id'] . " WHERE `a`=" . $org['a']);
	} else {
		echo '         ';
	}
	echo "\t" . $org['shortName'] . "\t" . $org['name'] . "\n";
}


?>