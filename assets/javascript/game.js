var crystal = {
    pool: [],
    crystalNumber: [],
    randomNumber: "",
    wins:0,
    losses:0,
    gamestatus:true,  //if game is not in session
    imgClick: function(e) {
      if(crystal.gamestatus){
        alert("Please start a new game!");
        return;
      }
      console.log("crystal.imageClick->", this.id);
      var id = crystal.pool.indexOf(this.id);
      crystal.randomNumber -= crystal.crystalNumber[id];
      $("#randomNumber").html(crystal.randomNumber);
      crystal.checkGame();
    },
    generateRandomNumbers: function() {
      crystal.gamestatus=false;
      console.log("function->generateRandomNumbers")
      crystalNumber = [];
      while (crystal.crystalNumber.length < 4) {
        var x = Math.floor(Math.random() * 12) + 1;
        if (!(crystal.crystalNumber.includes(x))) {
          crystal.crystalNumber.push(x);
        };
      };
      crystal.randomNumber = (Math.floor(Math.random() * 101) + 19);
      console.log("randumNumber->", crystal.randomNumber);
      $("#randomNumber").html(crystal.randomNumber);
    },
    // *****************************
    // *****************************
    checkGame: function() {
      var x = this.randomNumber
      console.log("checkGame->", x)
      if (x > 0) {
      } else if (x == 0) {
        console.log("checkGame->you win");
        $("#wins").html(++this.wins)
        this.gamestatus = true;
      } else if (x < 0) {
        console.log("checkGame->you lose");
        // this.losses += 1;
        $("#losses").html(++this.losses);
        this.gamestatus = true;
      }
    }
  }
$(document).ready(function() {
  console.log("function->ready()")
  // Loading images using javascript & jquery
  var link = "";
  var varDiv = "";
  for (i = 0; i < 4; i++) {
    crystalId = "img" + (i + 1);
    crystal.pool[i] = crystalId;
    varDiv = $('<div id="' + crystalId + '">');
    varDiv.addClass("col-sm-1");
    link = '<img src="assets/images/' + crystalId + '.jpg">';
    varDiv.append(link);
    varDiv.on("click", crystal.imgClick);
    // console.log(varDiv);
    $("#div_gems").append(varDiv);
  };
  // end of loading images using javascript & jquery
  $(".btn").on("click", crystal.generateRandomNumbers);
});
var scores = {
  wins: 0,
  losses: 0,
  addwin: function() {
    this.wins += 1;
  },
  addloss: function() {
    this.losses += 1;
  }
}
