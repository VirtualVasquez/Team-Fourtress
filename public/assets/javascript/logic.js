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
	$("#next").click(function(){
		$("#card-wrapper > div").animate({
		
			"right":"-100vw"
		}, 1000, "linear", function(){
			
			$("#card-wrapper > div").animate({
			"right": "0vw"
			}, 1000);
		
	});

	})
});


