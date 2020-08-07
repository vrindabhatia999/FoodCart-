<!DOCTYPE html>
<html>
<head>
	<title>Food Game</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
 	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    <style type="text/css">
    	body{
    		background-image: url(../myfolder/food.jpg);
    		width: 100%;
		    height: 650px;
		    background-size: 100% 100%;
            background-attachment: fixed;
            font-weight: bold;
    	}
    	
    	.s1{
    		margin-top: 5%;
    		margin-left: 10%;
    	}
    	.s2{
    		margin-left:30%;
    		margin-top: 10%;
    		font-family: sans-serif;
    		font-size: 40px;
    		color: blue;
    	}
    	.s3{
    		margin-left: 30%;
    		margin-right: 30%;
    		margin-top: 5%;
    		font-family: sans-serif;
    		font-weight: bold;
    		font-size: 150px;
    		background: linear-gradient(#06beb6,#ffafbd);

    	}
    	.s4{
    		margin-left: 40%;
    		margin-top: 5%;
    	}
    	.s5{
    		margin-top: 5%;
    		margin-left: 10%;

    	}
    	.s6{
    		margin-top: 5%;
    		margin-left: 10%;
    	}
    	.s8{
    		margin-left: 35%;
    	}
    	.S7{
    	    color: pink;
    	}
    	.s9{
    	 
    		margin-top: 10%;
    		
    		background-color: green;
    	
   
    		margin-right:40%;
    		text-align: center;

    	}
    	.s10{
    		margin-left: 30%;
    		margin-right: 30%;
    		margin-top: 5%;
    		font-family: sans-serif;
    		font-weight: bold;
    		font-size: 40px;
    		text-align: center;
       		background: linear-gradient(#06beb6,#ffafbd);
    	}
    	.gallery{
	        height: 60%;
	        width: 80%;
	        display: flex;
	        margin-top: 7%;
	        box-sizing: border-box;
	        margin-left: 12%;
}
.image-box{
	margin-top: 0 1%;
	flex-grow: 1;
	flex-basis: 0;
	transition: 0.5s;
}
.image-box img{
	width: 90%;
	height: 80%;

    object-fit: cover;
    transition: 0.5s;

}

.image-box:hover{
	flex-basis: 50%;

}


    	 
    </style>
    	
</head>
<body data-spy="scroll" data-target=".navbar" data-offset="50">
	<nav class="navbar navbar-expand-md bg-dark fixed-top">
		<ul class="navbar-nav S7">
			<li class="nav-item" style="color: pink;"><a href="#sec1" class="nav-link">FOOD CHOICES</a></li>
			<li class="nav-item"><a href="#sec2" class="nav-link">CART</a></li>
			
		</ul>
		
	</nav>
	<section id="sec1">
		<div class="s3">
		<h2 style="font-family: sans-serif; font-weight: bold; font-size: 40px;  text-align: center; color: black;">Welcome to Food Cart Builder</h2>
		<p style="font-size: 30px; text-align: center;">Write the correct food name and cick submit!!</p>
	</div>
	<div class="row s1">
		<div class="col-md-4">
			<img src="fruit.svg" style="height: 100px; width: 90px;">
			<input type="text" id="a1"><br>
			<input type="submit" onclick="ap()" value="Submit" class="btn btn-warning" style="margin-left: 30%;">
			
		</div>

		<div class="col-md-4">
			<img src="juice.svg" style="height: 100px; width: 90px;">
			<input type="text" id="a2"><br>
			<input type="submit" onclick="ap()" value="Submit" class="btn btn-success" style="margin-left: 30%;">
		</div>

		<div class="col-md-4">
			<img src="pizza.svg" style="height: 100px; width: 90px;">
			<input type="text" id="a3"><br>
			<input type="submit" onclick="ap()" value="Submit" class="btn btn-secondary" style="margin-left: 30%;">
		</div>
	</div>
	 

	
	<div class="row s5">
		<div class="col-md-4">
			<img src="cake.svg" style="height: 100px; width: 90px;">
			<input type="text" id="a4"><br>
			<input type="submit" onclick="ap()" value="Submit" class="btn btn-warning" style="margin-left: 30%;">
			
		</div>

		<div class="col-md-4">
			<img src="cookie.svg" style="height: 100px; width: 90px;">
			<input type="text" id="a5"><br>
			<input type="submit" onclick="ap()" value="Submit" class="btn btn-success" style="margin-left: 30%;">
		</div>

		<div class="col-md-4">
			<img src="burger.svg" style="height: 100px; width: 90px;">
			<input type="text" id="a6"><br>
			<input type="submit" onclick="ap()" value="Submit" class="btn btn-secondary" style="margin-left: 30%;">
		</div>
	</div>

	<div class="row s6">
		<div class="col-md-4">
			<img src="ice.svg" style="height: 100px; width: 90px;">
			<input type="text" id="a7"><br>
			<input type="submit" onclick="ap()" value="Submit" class="btn btn-warning" style="margin-left: 30%;">
			
		</div>

		<div class="col-md-4">
			<img src="noodles.svg" style="height: 100px; width: 90px;">
			<input type="text" id="a8"><br>
			<input type="submit" onclick="ap()" value="Submit" class="btn btn-success" style="margin-left: 30%;">
		</div>

		<div class="col-md-4">
			<img src="fries.svg" style="height: 100px; width: 90px;">
			<input type="text" id="a9"><br>
			<input type="submit" onclick="ap()" value="Submit" class="btn btn-secondary" style="margin-left: 30%;">
		</div>
	</div>
	</section>


	<div class="container text-center" style="margin-top: 5%; background: linear-gradient(#06beb6,#ffafbd)" id="sec2">
		<h2>Choose from the best</h2>
		<p>Build Your Cart</p>


		<div class="gallery">
    			<div class="image-box">
    				<img src="fruits1.jpg">

    			</div>
    			<div class="image-box">
    				<img src="junk.jpg">
    			
    			</div>
    			<div class="image-box">
    				<img src="cakeice.jpg">
    			
    			</div>
    		</div>
	 
	</div>

	  
    		
	




	<script type="text/javascript">
		function ap(){
			var apple,pizza,juice,cake,cookie,burger,ice,noodles,fries,total;
			var c1=0;
			var c2=0;
			var c3=0;
			var c4=0;
			var c5=0;
			var c6=0;
			var c7=0;
			var c8=0;
			var c9=0;

			apple=document.getElementById("a1").value;
			juice=document.getElementById("a2").value;
			pizza=document.getElementById("a3").value;
			cake=document.getElementById("a4").value;
			cookie=document.getElementById("a5").value;
			burger=document.getElementById("a6").value;
			ice=document.getElementById("a7").value;
			noodles=document.getElementById("a8").value;
			fries=document.getElementById("a9").value;

			if(apple=="fruits"){
				c1=c1+1;
			}
			if(juice=="juice"){
				c2=c2+1;
			}
			if(pizza=="pizza"){
				c3=c3+1;
			}
			if(cake=="cake"){
				c4=c4+1;
			}
			if(cookie=="cookie"){
				c5=c5+1;
			}
			if(burger=="burger"){
				c6=c6+1;
			}
			if(ice=="ice cream"){
				c7=c7+1;
			}
			if(noodles=="noodles"){
				c8=c8+1;
			}
			if(fries=="french fries"){
				c9=c9+1;
			}
			total=c1+c2+c3+c4+c5+c6+c7+c8+c9;

			alert("Congrats!! you earned :"+" "+total+" "+"correct"+" "+"items");

			
		}



	</script>


</body>
</html>