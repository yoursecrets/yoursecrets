$(document).ready(function(){
var socket = io();
var nr = 0;

socket.emit('loadlist');

socket.on('loaded', function(anzahl){
  nr = anzahl;
  nr--;
  console.log(anzahl);
  console.log(nr);
  $('#bt').append($('<img src="/pics/beichte' + nr + '.png"/>'));
});

$('#prev').hide();

  $('#prev').click(function(){
    nr++;
    $('#bt').empty();
    $('#bt').append($('<img src="/pics/beichte' + nr + '.png"/>'));

  });

  $('#next').click(function(){
    $('#prev').show();
    nr--;
    $('#bt').empty();
    $('#bt').append($('<img src="/pics/beichte' + nr + '.png"/>'));

  });


});
