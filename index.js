
window.onload = function () {

  $(".next").on("click", function () {
    $(".nextSlide").css("display", "block")
    $(".firstSlide").css("display", "none")
  });

  $(".prev").on("click", function () {
    $(".nextSlide").css("display", "none")
    $(".firstSlide").css("display", "block")
  });
};

