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
      $("#warnings").text("Please fill out all fields.")
    } else if (companySize === "smaller" && end === "web" && mobile === "Yes") {
      $("#results").show()
      $("#nameInsert").append(name)
      $("#track").text("Ruby/Rails")
    } else if (brainType === "Right-brained" && end === "web") {
      $("#results").show()
      $("#nameInsert").append(name)
      $("#track").text("CSS/design")
    } else if (mobile === "Yes" && companySize === "larger") {
      $("#results").show()
      $("#nameInsert").append(name)
      $("#track").text("Java/Android")
    } else if (companySize === "larger" && popularity === "More popular") {
      $("#results").show()
      $("#nameInsert").append(name)
      $("#track").text("C#/.NET")
    } else if (end === "back-end") {
      $("#results").show()
      $("#nameInsert").append(name)
      $("#track").text("PHP/Drupal")
    } else if (mobile === "Yes" && companySize === "larger") {
      $("#results").show()
      $("#nameInsert").append(name)
      $("#track").text("Java/Android")
    } else {
      $("#warnings").text("Sorry, we could not find a track for you based on the information you provided.")
    }


    $(".track-title").click(function() {
      $(".CSS-hidden").show();

    });


  });
});
