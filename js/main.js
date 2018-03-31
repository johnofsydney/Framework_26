console.log("connected");



const buzzFizz = function ( $fizzDiv ) {
  // $fizzDiv.css("background-color", "rgb(96, 99, 85)")
  let divLeft = $fizzDiv.position().left
  let divTop = $fizzDiv.position().top
  let divWidth = $fizzDiv.width();
  let divHeight = $fizzDiv.height();
  let divBottom = $fizzDiv.position().top + divHeight;

  let x = (Math.random() * divWidth) + divLeft;
  const size = (Math.random() * 0.5) + 'em';

  const $bubble = $('<div class="bubble"></div>').css({
    left: x,
    top: divBottom,
    width: size,
    height: size
  }).appendTo($fizzDiv);


  $bubble.animate({top: divTop}, 3000, function () {
    $bubble.remove(); // Clean up after ourselves to conserve memory.
  });
}


const fizzBuzz = function () {
  const fizzies = $('.fizz')
  // console.log(fizzies);
  for (var i = 0; i < fizzies.length; i++) {
    let $thisFizz = $(fizzies[i])
    buzzFizz( $thisFizz )
  }
}



const shuffleDivs = function () {


}



$(document).ready( function() {

  console.log("ready");

  const fizzTimeDone = window.setInterval(fizzBuzz, 200);
  // const shuffleTimeDone = window.setInterval(shuffleDivs, 5000);




  $('#toggleShy').on('click', function () {
    $('.shy').toggleClass('is-active')
  })

  $('#toggleSpace').on('click', function () {
    $('#space-demo').toggleClass('space-between')
    $('#space-demo').toggleClass('space-around')
  })


})
