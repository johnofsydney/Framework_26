console.log("connected");



const buzzFizz = function ( $fizzDiv ) {
  // $fizzDiv.css("background-color", "rgb(96, 99, 85)")
  let divLeft = $fizzDiv.position().left
  let divTop = $fizzDiv.position().top
  let divWidth = $fizzDiv.width();
  let divHeight = $fizzDiv.height();
  let divBottom = $fizzDiv.position().top + divHeight

  // console.log(left, bottom);

  let x = (Math.random() * divWidth) + divLeft;
  const size = (Math.random() * 0.5) + 'em';

  const $bubble = $('<div class="bubble"></div>').css({
    left: x,
    top: divBottom,
    width: size,
    height: size
  }).appendTo($fizzDiv);

  // debugger;

  $bubble.animate({top: divTop}, 3000, function () {
    $bubble.remove(); // Clean up after ourselves to conserve memory.

  });


}





// $(window).on('mousemove', function (e) {
//   const {pageX: x, pageY: y} = e; // Destructuring
//
//   const size = (Math.random() * 10) + 'em';
//
//   const $bubble = $('<div class="bubble"></div>').css({
//     left: x,
//     top: y,
//     width: size,
//     height: size
//   }).appendTo($body);
//
//   $bubble.animate({top: -200}, 3000, function () {
//     $bubble.remove(); // Clean up after ourselves to conserve memory.
//   });
// });








const fizzBuzz = function () {
  const fizzies = $('.fizz')
  // console.log(fizzies);
  for (var i = 0; i < fizzies.length; i++) {
    let $thisFizz = $(fizzies[i])
    buzzFizz( $thisFizz )
  }
}


$(document).ready( function() {

  console.log("ready");

  const fizzTimeDone = window.setInterval(fizzBuzz, 200);




  $('#toggleShy').on('click', function () {
    $('.shy').toggleClass('is-active')
  })

  $('#toggleSpace').on('click', function () {
    $('#space-demo').toggleClass('space-between')
    $('#space-demo').toggleClass('space-around')
  })


})
