$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

    var companySize = $("#companySize").val();
    var brainType = $("#brainType").val();
    var backEnd = $("#backEnd").val();
    var mobile = $("#mobile").val();
    var popularity = $("#popularity").val();
debugger;
    // companySize
    if (companySize === "Larger company" && popularity === "More popular") {
      $("#results").text("C#/.NET")
    }



  });
});
