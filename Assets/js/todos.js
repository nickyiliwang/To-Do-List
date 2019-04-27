// Check off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Click on x to delete todo
$("ul").on("click", "span", function(e) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $("this").remove();
    });
  e.stopPropagation();
});

$("input[type='text']").keypress(function(e) {
  if (e.which === 13) {
    //grabbing new text
    var toDoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>"
    );
  }
});

$(".fa-plus").on("click", function() {
  $("input[type='text']").fadeToggle();
});
