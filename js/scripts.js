var player1 = "";
var player2 = "";

function player(name) {
  this.name = name;
  this.score =0;
  this.diceFace=o;
  this.total=0;


}
function throwDice() {
  return Math.floor(6*Math.random())+1;

}
player.prototype.rollAOne = function() {
  if (this.diceFace === 1) {
    this.score = 0;
  } else {
    this.score += this.diceFace;
  }
}
player.prototype.hold = function(){
  this.score = 0;
  this.total += this.score;
}
player.prototype.winner = function() {
  if (this.total>=100) {
    alert(winner)

  }

}
