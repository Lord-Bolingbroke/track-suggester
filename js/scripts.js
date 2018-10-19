$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

    var companySize = $("#companySize").val();
    var brainType = $("#brainType").val();
    var end = $("#end").val();
    var mobile = $("#mobile").val();
    var popularity = $("#popularity").val();
    var name = $("#name").val();

    if (name === "" || companySize === "Please select an option" || brainType === "Please select an option" || end === "Please select an option" || mobile === "Please select an option" || popularity === "Please select an option") {
      $("#results").text("Please fill out all fields.")
    } else if (companySize === "smaller" && end === "web" && mobile === "Yes") {
      $("#nameInsert").show(name)
      $("#results").show()
      $("#track").text("Ruby/Rails")
      $("#nameInsert").show(name)
    } else if (brainType === "Right-brained" && end === "web") {
      $("#track").text("CSS/design")
      $("results").show()
    } else if (mobile === "Yes" && companySize === "larger") {
      $("#nameInsert").show(name)
      $("#results").show()
      $("#track").text("Java/Android")
    } else if (companySize === "larger" && popularity === "More popular") {
      $("#nameInsert").show(name)
      $("#results").show()
      $("#track").text("C#/.NET")
    } else if (end === "back-end") {
      $("#nameInsert").show(name)
      $("#results").show()
      $("#track").text("PHP/Drupal")
    } else if (mobile === "Yes" && companySize === "larger") {
      $("#nameInsert").show(name)
      $("#results").show()
      $("#track").text("Java/Android")
    } else {
      $("#track").text("Sorry, we could not find a track for you based on the information you provided.")
    }
  });
});
