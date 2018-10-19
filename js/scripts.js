$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

    var companySize = $("#companySize").val();
    var brainType = $("#brainType").val();
    var backEnd = $("#backEnd").val();
    var mobile = $("#mobile").val();
    var popularity = $("#popularity").val();
    debugger;

    if (companySize === "Please select an option" || brainType === "Please select an option" || backEnd === "Please select an option" || mobile === "Please select an option" || popularity === "Please select an option") {
      $("#results").text("Please fill out all fields.")
    } else if (brainType === "Right-brained") {
      $("#results").text("CSS/design")
    } else if (companySize === "Larger company" && popularity === "More popular") {
      $("#results").text("C#/.NET")
    } else {
      $("#results").text("Sorry, we could not find a track for you based on the information you inputted.")
    }



  });
});
