var crystal = {
  pool: [],
  crystalNumber: [],
  randomNumber: "",
  imgClick: function(e) {
    console.log("imageClick", this.id);
    crystal.divHandler(this.id);
  },
  divHandler: function(e) {
    console.log("divHandler", e);

  },
  generateRandomNumbers: function() {
    console.log("function->generateRandomNumbers")
    this.crystalNumber = [];
    while (this.crystalNumber.length < 4) {
      var x = Math.floor(Math.random() * 12) + 1;;
      if (!(this.crystalNumber.includes(x))) {
        this.crystalNumber.push(x);
      };
      $("#randomNumber").html(Math.floor(Math.random() * 101) + 19);
    }
  },
  checkGame: function() {

  },
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
