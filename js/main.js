$(window).on("load", function () {
  $("#preloader").delay(1000).addClass("loaded");
});
$(document).ready(function () {
  "use strict";
  $(".header-main ul li a").on("click", function () {
    if ($(".header-main.on").length) {
      $(".header-main").removeClass("on");
    }
  });
  $(".header-toggle").on("click", function () {
    $(".header-main").toggleClass("on");
  });
});
