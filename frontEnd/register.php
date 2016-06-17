<?php

require_once 'meekrodb.2.3.class.php';
?>
<div class="container-fluid vocab col-sm-3 col-sm-offset-4 registerPage">
	<form action="register_process.php" method="post">
		 <div class="form-group">
	    <label for="name">Name</label>
	    <input type="text" class="form-control" name="legalName" id="legalName" name="legalName" placeholder="Legal Name">
	  </div>
	   <div class="form-group">
	    <label for="userName">User Name</label>
	    <input type="text" class="form-control" name="userName" id="userName" name="email" placeholder="User Name">
	  </div>
	  <div class="form-group">
	    <label for="email">Email address</label>
	    <input type="email" class="form-control" id="email" name="email" placeholder="Email">
	  </div>
	  <div class="form-group">
	    <label for="password">Password</label>
	    <input type="password" class="form-control" id="password" name="password" placeholder="Password">
	  </div>
	  <div class="form-group">
	    <label for="password2">Confirm Password</label>
	    <input type="password" class="form-control" name="password2" id="password2" placeholder="Confirm Password">
	    <div class="form-group">
	      <!-- <label for="exampleInputFile">File input</label> -->
	      <!-- <input type="file" id="exampleInputFile" name="avatar"> -->
	      <!-- <p class="help-block">Example block-level help text here.</p> -->
	    </div>
	  </div>
	  <button type="submit" class="btn btn-default submitBtn">Submit</button>
	</form>
	</div>