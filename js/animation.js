// window.addEventListener("scroll", function () {
//   var cardHeader = document.querySelector(".pokemon-card");
//   cardHeader.classList.toggle("small-card-header", window.scrollY > 0);
// });

// $(function() {
//     $('.modal-container').scroll(function() {

//       var scrollY = $(this).scrollTop();
//       var height = $(this).height();
//       var scrollHeight = $('#inner').height();
//       var percentage = (scrollY / (scrollHeight - height)) * 100;

//       $("#inner").css('filter', 'blur('+ percentage +'px)')
//     })
// });

let card = document.getElementById('pokemon-card');

card.addEventListener("scroll", () =>{
  console.log('scrolled');
});