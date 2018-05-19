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