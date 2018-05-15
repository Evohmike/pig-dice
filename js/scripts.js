var player1 = "";
var player2 = "";

function Player(name) {
  this.name = name;
  this.diceFace = 0;
  this.score = 0;
  this.total = 0;
}

function diceThrow() {
  return Math.floor(6 * Math.random()) + 1;
}

Player.prototype.play = function() {
  if (this.diceFace === 1) {
    this.score = 0;
    $('#playDie2').toggle();
    $('#playDie1').toggle();
  } else {
    this.score += this.diceFace;
  }
}

Player.prototype.hold = function() {
  this.total += this.score;
  this.score = 0;
}

Player.prototype.winner = function() {
  if (this.total >= 100) {
    alert("Congratulations " + this.name + " You are the winner");
  }
}
$(document).ready(function() {
  $('form#register').submit(function(event) {
    event.preventDefault();
    var p1 = $('input#player1').val()
    var p2 = $('input#player2').val()

    player1 = new Player(p1);
    player2 = new Player(p2);

  });
  $('#playDie1').click(function(event) {
    event.preventDefault();
    player1.diceFace = diceThrow();
    $('#aRolled').empty()
    $('#acurrentScore').empty();
    $('#aRolled').append("You rolled  " + player1.diceFace);
    player1.play();
    $('#acurrentScore').append("Current scores is " + player1.score);
  });
  $('#playDie2').click(function(event) {
    event.preventDefault();
    player2.diceFace = diceThrow();
    $('#bRolled').empty()
    $('#bcurrentScore').empty();
    $('#bRolled').append("You rolled  " + player2.diceFace);
    player2.play();
    $('#bcurrentScore').append("Current scores is " + player2.score);
  });
  
});
