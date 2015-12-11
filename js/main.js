$(document).ready (function() {

var score = 0;
var total = 0;

function generateSlice() {
	var left = Math.floor(Math.random()*1000);
	var top = Math.floor(Math.random()*500);
	$(".slice").css("left", left+"px");
	$(".slice").css("top", top+"px");
	$(".slice").css("visibility", "visible");
	setTimeout(hideSlice, 2000);
}

setInterval(generateSlice, 7000);

function hideSlice() {
	$(".slice").css("visibility", "hidden");
}

$(".slice").click (function() {
	var snd = new Audio("snd/specialslice.wav");
	snd.play();
	total = total + 10;
	$(".slice").css("visibility", "hidden");
	$(".total").html("Total Score = " + total);
});

$(".orange").click (function() {
	var snd = new Audio("snd/splash.wav");
	snd.play();
	total = total + 1;
	$(".total").html("Total Score = " + total);
	score = score + 1;
	$(".score").html("Fruits Juiced = " + score);

	if (score == 2 ) {
		$(".jug").attr("src","img/jug2.png");
	}

	else if (score == 4 ) {
		$(".jug").attr("src","img/jug3.png");
		generateSlice();
	}

	else if (score == 6 ) {
		$(".jug").attr("src","img/jug4.png");

	}

	else if (score == 8 ) {
		$(".jug").attr("src","img/jug5.png");

	}

	else if (score == 10 ) {
		$(".jug").attr("src","img/jug6.png");

	}

	else if (score == 12 ) {
		$(".jug").attr("src","img/jug7.png");
		$(".achievement").css("visibility", "visible");
		var snda = new Audio("snd/achievement.mp3");
		snda.play();
	}

	else if (score == 14 ) {
		$(".jug").attr("src","img/jug8.png");

	}

	else if (score == 16 ) {
		$(".jug").attr("src","img/jug9.png");

	}

	else if (score == 18 ) {
		$(".jug").attr("src","img/jug1.png");
		$(".orange").attr("src","img/strawberry.png");
		$(".orange").css("margin-top", "-15px");
		$(".achievement").css("visibility", "hidden");
	}
	
	else if (score == 20 ) {
		$(".jug").attr("src","img/strawjug2.png");

	}

	else if (score == 22 ) {
		$(".jug").attr("src","img/strawjug3.png");

	}

	else if (score == 24 ) {
		$(".jug").attr("src","img/strawjug4.png");

	}

	else if (score == 26 ) {
		$(".jug").attr("src","img/strawjug5.png");

	}

	else if (score == 28 ) {
		$(".jug").attr("src","img/strawjug6.png");

	}

	else if (score == 30 ) {
		$(".jug").attr("src","img/strawjug7.png");
		$(".achievement").css("visibility", "visible");
		$(".achievement").attr("src", "img/ach2.png");
		var snda = new Audio("snd/achievement.mp3");
		snda.play();
	}

	else if (score == 32 ) {
		$(".jug").attr("src","img/strawjug8.png");

	}

	else if (score == 34 ) {
		$(".jug").attr("src","img/strawjug9.png");

	}

	else if (score == 36 ) {
		$(".jug").attr("src","img/jug1.png");
		$(".orange").attr("src","img/chocolatebar.png");
		$(".orange").css("margin-top", "10px" );
		$(".achievement").css("visibility", "hidden");
	}

	else if (score == 38 ) {
		$(".jug").attr("src","img/chochjug2.png");

	}

	else if (score == 40 ) {
		$(".jug").attr("src","img/chochjug3.png");

	}

	else if (score == 42 ) {
		$(".jug").attr("src","img/chochjug4.png");

	}

	else if (score == 44 ) {
		$(".jug").attr("src","img/chochjug5.png");

	}

	else if (score == 46 ) {
		$(".jug").attr("src","img/chochjug6.png");

	}

	else if (score == 48 ) {
		$(".jug").attr("src","img/chochjug7.png");
		$(".achievement").css("visibility", "visible");
		$(".achievement").attr("src", "img/ach3.png");
		var snda = new Audio("snd/achievement.mp3");
		snda.play();
	}

	else if (score == 50 ) {
		$(".jug").attr("src","img/chochjug8.png");

	}

	else if (score == 52 ) {
	$(".jug").attr("src","img/chochjug9.png");

	}

	else if (score == 54 ) {
		$(".jug").attr("src","img/jug1.png");
		$(".orange").attr("src","img/apple.png");
		$(".orange").css("margin-top", "15px");
		$(".achievement").css("visibility", "hidden");
	}

	else if (score == 56 ) {
		$(".jug").attr("src","img/applejug2.png");
	}

	else if (score == 58 ) {
		$(".jug").attr("src","img/applejug3.png");
	}

	else if (score == 60 ) {
		$(".jug").attr("src","img/applejug4.png");
	}

	else if (score == 62 ) {
		$(".jug").attr("src","img/applejug5.png");
	}

	else if (score == 64 ) {
		$(".jug").attr("src","img/applejug6.png");
	}

	else if (score == 66 ) {
		$(".jug").attr("src","img/applejug7.png");
		$(".achievement").css("visibility", "visible");
		$(".achievement").attr("src", "img/ach4.png");
		var snda = new Audio("snd/achievement.mp3");
		snda.play();
	}

	else if (score == 68 ) {
		$(".jug").attr("src","img/applejug8.png");
	}

	else if (score == 70 ) {
		$(".jug").attr("src","img/applejug9.png");
	}

});

});


