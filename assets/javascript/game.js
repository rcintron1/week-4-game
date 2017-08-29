$(document).ready(function() {
  console.log("function->ready()")
  // $("div").html("Rolo");
  // var varDiv = $("<div></div>");
  var link = "";
  var varDiv = "";
  for (i = 1; i < 5; i++) {
    varDiv = $('<div id="' + i + '">');
    varDiv.addClass("col-sm-1");
    link = '<img src="assets/images/' + i + '.jpg">';
    varDiv.append(link);
    varDiv.on("click",imgClick);
    console.log(varDiv);
    $("#div_gems").append(varDiv);
  };
});

function imgClick(e){
  console.log("imageClick",this.id);
}
