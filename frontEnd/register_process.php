<?php 

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();
require_once 'meekrodb.2.3.class.php';
$link = mysql_connect('127.0.0.1', 'x', 'x');
	if(!$link){
		print 'not connected: ' . mysql_error();
	}
	$db_selected = mysql_select_db('LearnTheLingo', $link);
	if(!$db_selected){
			die("Cannot use db LearnTheLingo: " . mysql_error());
		}
// DB::$user = 'x';
// DB::$password = 'x';
// DB::$dbName = 'LearnTheLingo';
// DB::$host = '127.0.0.1';
// DB::$error_handler = false; // since we're catching errors, don't need error handler
// DB::$throw_exception_on_error = true;
//checks if the userNmae already exists
$result = DB::query('SELECT * FROM users where userName = %s', $_POST['userName']);
if(!$result){
	$can_register = true;
}else{
	$can_register = false;
}
if($can_register && ($_POST['password'] == $_POST['password2'])){
$hashedPassword = password_hash($_POST['password'], PASSWORD_DEFAULT);

try{
DB::insert('users', array(
	'userName' => $_POST['userName'],
	'password' => $hashedPassword,
	'email' => $_POST['email'],
	'name' => $_POST['name']
	));
	$_SESSION['userName'] = $_POST['userName'];
	$_SESSION['email'] = $_POST['email'];
	header('Location: index.html?welcome=yes');
	exit;
	}catch(MeekroDBException $e){
		header('Location: /register.php?error=yes');
		exit;
			}
	}else{
		header('Location: /register.php?error=userNameexists');
}
?>