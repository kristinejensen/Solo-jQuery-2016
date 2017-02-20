$(document).ready(function() {
  console.log('jquery is running');

  var redClickCounter = 1;
  var yellowClickCounter = 1;
  var greenClickCounter = 1;
  var blueClickCounter = 1;

  $('#red-button').on('click', function (){
    $('.container').append('<div class="red-cube"></div>');
    $('#red').text(redClickCounter);
    redClickCounter++;
  });

  $('#yellow-button').on('click', function (){
    $('.container').append('<div class="yellow-cube"></div>');
    $('#yellow').text(yellowClickCounter);
    yellowClickCounter++;
  });

  $('#green-button').on('click', function (){
    $('.container').append('<div class="green-cube"></div>');
    $('#green').text(greenClickCounter);
    greenClickCounter++;
  });

  $('#blue-button').on('click', function (){
    $('.container').append('<div class="blue-cube"></div>');
    $('#blue').text(blueClickCounter);
    blueClickCounter++;
  });

}); 
