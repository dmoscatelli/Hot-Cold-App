
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

		/*--- Let's Play---*/
  	$(".new").click(function() {
		$(".go").fadeIn(100);
		$(".go").fadeOut(2000);
		/*--- Establish Random---*/
		$("#guessList").text(Math.round(Math.random()*100) + 1);
		random = parseInt($("#guessList").text());
		/*--- Reset values of game---*/
		$("#feedback").css("background-color", "#cc324b");
		$("#feedback").text("Make your Guess!");
		$(".text").val("");
	});

});

$(document).ready(function() {
		$("#guessButton").click(function(e){
			e.preventDefault();
			/*--- Count number of attempts---*/
			var intCount = parseInt($("#count").text());
			$("#count").text(intCount + 1); 
			/*--- Collect user input and calc diff.---*/
			var CountMe = parseInt($("#count").text());
			var Guess = document.getElementById("userGuess").value;
			var Result = Math.abs(Guess-random);
			/*--- Give feedback to user about accuracy of guess---*/
				if (Result == 0) {
  					$("#feedback").text("You Won!");
  					$("#feedback").css("background-color", "#96CB3E");
  				} else if (Result > 50){
  					$("#feedback").text("Really Cold! Burrr");
  				} else if (Result > 19 && Result < 31) {
  					$("#feedback").text("Kinda Cold");
  				} else if (Result > 9 && Result < 21) {
  					$("#feedback").text("Eh, so so...");
  				} else if (Result > 0 && Result < 11) {
  					$("#feedback").text("Really Hot!");
  				} else if (Result > 0 && Result < 6) {
  					$("#feedback").text("Really Really Hot!");
  				}
		});
});





