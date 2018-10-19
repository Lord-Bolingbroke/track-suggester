$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

    var companySize = $("#companySize").val();
    var brainType = $("#brainType").val();
    var end = $("#end").val();
    var mobile = $("#mobile").val();
    var popularity = $("#popularity").val();

    if (companySize === "Please select an option" || brainType === "Please select an option" || end === "Please select an option" || mobile === "Please select an option" || popularity === "Please select an option") {
      $("#results").text("Please fill out all fields.")
    } else if (companySize === "smaller" && end === "web" && mobile === "Yes") {
      $("#results").text("Ruby/Rails")
    } else if (brainType === "Right-brained" && end === "web") {
      $("#results").text("CSS/design")
    } else if (mobile === "Yes" && companySize === "larger") {
      $("#results").text("Java/Android")
    } else if (companySize === "larger" && popularity === "More popular") {
      $("#results").text("C#/.NET")
    } else if (end === "back-end") {
      $("#results").text("PHP/Drupal")
    } else if (mobile === "Yes" && companySize === "larger") {
      $("#results").text("Java/Android")
    } else {
      $("#results").text("Sorry, we could not find a track for you based on the information you inputted.")
    }

  });
});
