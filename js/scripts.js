$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var groceries = ["fruit", "veggie", "carb", "snack", "drink", "dessert"];

    groceries.forEach(function(grocery) {
      var list = $("input#" + grocery).val();
      $("ol").append("<li>" + list + "</li>");
    });
    $("h2").show();
  });
});
