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
    $.post("/method/like", {id:40}, function(data){
   //handle data in here
    });
  })

  $("#dislikes").on("click", function(event) {
    $.post("/method/dislike", {id:40}, function(data){
   //handle data in here
    });
  })

}

