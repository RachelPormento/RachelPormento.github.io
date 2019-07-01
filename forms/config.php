<?php
ini_set('display_errors', 'off');
error_reporting(E_ALL);
define('COMP_EMAIL', 'vnc.customersupport@gmail.com'); // company email

define('MAIL_METHOD', 'SMTP'); // SMTP or PHPMAIL (PHP Mail Function)
define('SMTP_SERVER', 'secure.emailsrvr.com'); // SMTP server
define('SMTP_USER', 'onlineform15@proweaver.net'); // SMTP username
define('SMTP_PASSWD', 'Pr0s3H1TforR#'); // SMTP password

define('SMTP_ENCRYPTION', 'off'); // TLS, SSL or off
define('SMTP_PORT', 587); // SMPT port number 587 or default
define('COMP_NAME', 'Value N Care Pharmacy'); // company name
define('MAIL_TYPE', 2); // 1 - html, 2 - txt
define('MAIL_DOMAIN', 'www.web2.proweaverlinks.com/tech/valuencarenew'); // company domain

// recaptcha sitekey
$recaptcha_sitekey = '6Ld7clMUAAAAAFH7u7QHBuHqwlgi9ec6anbaKjc9';

// do not edit
$subject = COMP_NAME . " [" . $formname . "]";
$template = 'template';
$to_name = NULL;
$from_email = NULL;
$from_name = 'Message From Your Site';
$attachments = array();

// testing here
$testform = false;
if($testform){
	$to_email 	= array('qatest@proweaver.net');
	$cc = '';
	$bcc = '';
}else{
	$to_email 	= array('vnc.customersupport@gmail.com');
	$cc = '';
	$bcc = '';
}
