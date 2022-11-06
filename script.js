$(document).ready(function(){
  var price = $(".price").text().trim();
  var quantity = $("#quantity").val();
  console.log(quantity);
  //add listener to plus button
  $("#plus").click(function(e){
    e.preventDefault();
    quantity++;
    $("#quantity").val(quantity);
    $(".price").text(quantity*price);
  });
  $("#minus").click(function(e){
    e.preventDefault();
    if(quantity>1){
      quantity--;
      $("#quantity").val(quantity);
      $(".price").text(quantity*price);
    }
  });
  //set total price
  
});