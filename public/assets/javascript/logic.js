$('#command').focus(function(){
  $('.suffix').css({
    'color': '#FFC72C',
    'font-size': '32px'
  });
});

$('#command').focusout(function(){
  $('.suffix')
  .css({
    'color': 'lightgray',
    'font-size': '20px'
  });
});

$(function() {
	$("#newMethod").on("click", function(event) {
		$.post("/next", function(data){
   //handle data in here
    }).then(
      function() {
        console.log("got new method");
        //reload the page to get the updated list?
        location.reload();
      }
    );
	});

  $("#likes").on("click", function(event) {
    $.post("/method/like", function(data){
   //handle data in here
    });
  })

  $("#dislikes").on("click", function(event) {
    $.post("/method/dislike", {id: $(this).data("id")}, function(data){
      console.log(data);
      $("#dislikeSpan").text(data.dislikes);
   //handle data in here
    });
  })

  $("#likes").on("click", function(event) {
    $.post("/method/like", {id: $(this).data("id")}, function(data){
      console.log(data);
      $("#likeSpan").text(data.likes);
   //handle data in here
    });
  })


});

