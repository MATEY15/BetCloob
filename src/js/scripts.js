//= jquery.min.js
//= jquery.magnific-popup.min.js
//= select.js
//= select2.full.js

// window.onload = function(){
//   // $("body").toggleClass('opacity');
//   $("#overlayer").delay(1000).fadeOut("slow");
//   overlay.toggle();
//   setTimeout(function() {
//     overlay.toggle();
//   }, 800);
// }

function heightFooter(){
  var heightFoot = $('.footer').outerHeight();
  $('body').css({ 'padding-bottom': heightFoot});
}
heightFooter()
$( window ).resize(function() {
  heightFooter()
});

$(".burger-menu").on("click", function(e) {
	e.preventDefault(); 
  $(this).toggleClass('is-active');
  $('.top-line').toggleClass('is-active');
  $('.mobile-menu').toggleClass('is-active');
  $("body").toggleClass('overflow');
});

$('.search-link').on("click", function(e) {
	e.preventDefault(); 
  $(this).toggleClass('is-active');
	$(this).parents('.head-search__search').toggleClass('no-border');
	$('.search-form--head').toggleClass('is-active');
});
$(document).mouseup(function (e) {
  var container = $(".head-search");
  if (container.has(e.target).length === 0){
  	$('.search-link').removeClass('is-active');
		$('.search-link').parents('.head-search__search').removeClass('no-border');
    $('.search-form--head').removeClass('is-active');
  }
});

var checkInput = function(){
	$('#search-input').on("input", function() {
		if ($(this).val()!=''){
			$('#cancel').addClass('show-cancel');
		} else {
			$('#cancel').removeClass('show-cancel');
		}
	});
	$('#cancel').on('click', function() {
		$(this).removeClass('show-cancel');
		$('#search-input').val('');
	});
};

var loadBalanse = function(){
	$('.reload').on("click", function(e) {
		e.preventDefault();
		$(this).addClass('is-active');
		setTimeout( function() {$('.reload').removeClass('is-active');}, 6000);
	});
};

var dropMenuUser = function() {
	$('#open--menu-user').on("click", function(e) {
		$(this).next('#drop--menu-user').toggleClass('is-active');
	});
	$(document).mouseup(function (e) {
		var container = $(".wrapper--user-login");
		if (container.has(e.target).length === 0){
			$('#drop--menu-user').removeClass('is-active');
		}
	});
};

var selectNew = function() {
	$(".select-phone").select2({
    minimumResultsForSearch: -1,
    id:"elementID",
    text: "Hello!"
  });
  $(".select-phone").select2('data', { id:"elementID", text: "Hello!"});
};

/* Popup Window */

$(".popup").magnificPopup({
  type: 'inline',
  removalDelay: 300,
  mainClass: 'my-mfp-slide-bottom'
});
$('#popup-close').on('click', function(e) {
	e.preventDefault();
	$.magnificPopup.close();
});

/* Popup Window End */

checkInput();
loadBalanse();
dropMenuUser();
selectNew();