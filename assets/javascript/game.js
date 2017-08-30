$(document).ready(function() {
  console.log("function->ready()")
  // $("div").html("Rolo");
  // var varDiv = $("<div></div>");
  var link = "";
  var varDiv = "";
  for (i = 0; i < 4; i++) {
    crystalId = "img" + (i + 1);
    crystal.charPool[i]= crystalId;
    varDiv = $('<div id="' + crystalId + '">');
    varDiv.addClass("col-sm-1");
    link = '<img src="assets/images/' + crystalId + '.jpg">';
    varDiv.append(link);
    varDiv.on("click",crystal.imgClick);
    // console.log(varDiv);
    $("#div_gems").append(varDiv);
  };
});

var crystal = {
  charPool:[],
  imgClick:function (e){
    console.log("imageClick",this.id);
    crystal.divHandler(this.id);
  },
  divHandler:function (e){
    console.log("divHandler", e);
  }

}
