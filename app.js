var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Score = 0;
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p2Score = 0;
var gameOver = true;
var winningScore = 5;
var resetButton = document.querySelector("#reset");
var inputButton = document.querySelector("input");
var maxRound = document.getElementById("maxRound");
var p1win = document.querySelector("#p1win");
var p2win = document.querySelector("#p2win");
var win1 = 0;
var win2 = 0;
var body = document.querySelector("body");
var ladra = document.querySelector("#ladra");

p1Button.addEventListener("click", function() {
	if(gameOver){
		p1Score++;
			if(p1Score === winningScore){
				win1++;
				p1win.textContent = win1;
				p1Display.classList.add("winner");
				body.classList.add("bodywin1");
				gameOver = false;
			}
		p1Display.textContent = p1Score;
	} 
});

p2Button.addEventListener("click", function() {
	if(gameOver){
		p2Score++;
			if(p2Score === winningScore){
				win2++;
				p2win.textContent = win2;
				p2Display.classList.add("winner");
				body.classList.add("bodywin2");
				gameOver = false;
			}
	p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	body.classList.remove("bodywin1");
	body.classList.remove("bodywin2");
	gameOver = true;
}

inputButton.addEventListener("change", function(){
	maxRound.textContent = inputButton.value;
	winningScore = Number(this.value);
	reset();
		
});


