$(document).ready(function() {
  console.log("function->ready()")
  // $("div").html("Rolo");
  // var varDiv = $("<div></div>");

  for (i = 1; i < 5; i++) {
    var varDiv = $("<div></div>");
    varDiv.addClass("col-sm-1");
    link = '<img src="assets/images/' + i + '.jpg">';
    varDiv.append(link);
    console.log(varDiv);
    $("#div_gems").append(varDiv);
  };
});
