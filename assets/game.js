var random_result;
var lost = 0;
var win = 0;
var previous = 0;



var resetAndStart = function () {

	$(".crystals").empty();

	var images = [
			'http://icons.iconarchive.com/icons/aha-soft/jewelry/256/Swarovski-crystal-icon.png', 
			'http://www.crystalandglassbeads.com/3936-8686-large/ss5-light-siam-shimmer-swarovski-flatback-crystals.jpg', 
			'https://vignette.wikia.nocookie.net/starcraftfanfiction/images/5/5b/Savraj_Crystal.PNG/revision/latest?cb=20110114234233', 
			'https://cdn1.iconfinder.com/data/icons/outlined-medieval-icons-pack/200/minerals_blue_stone-512.png'];
		
	random_result = Math.floor(Math.random() * 69 ) + 30; 


	$("#result").html('Random Result: ' + random_result);

	for(var i = 0; i < 4; i++){

		var random = Math.floor(Math.random() * 11) + 1;

		var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random
			});
			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"

			});


		$(".crystals").append(crystal);

	}

	$("#previous").html("Total Score: " + previous);

}


resetAndStart();


$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num;


	$("#previous").html("Total score: " + previous);

	console.log(previous);

	if(previous > random_result){

		lost++;

		$("#lost").html("You lost: " + lost);

		previous = 0;

		resetAndStart();

	} 
	else if(previous === random_result){

		win++;

		$("#win").html("You win: " + win);

		previous = 0;

		resetAndStart();

	}

});


// Speudo coding

// a game with 4 crystal and Random Result
// Every crystal needs to have a random number between 1 - 12
// When clicking any CRYSTAL, it should adding with the previous result
// Until it equals the Random Result
// If it is greater than the Random Result, we decrement a lost counter
// If it is equal, then we increment a win counter
// A new random number should be generate every single time we win or lost
// to those 4 crystals
