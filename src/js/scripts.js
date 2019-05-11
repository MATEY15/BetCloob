//= jquery.min.js
//= jquery.magnific-popup.min.js
//= select.js
//= select2.full.js
//= jquery-ui.js
//= jquery.payment.min.js

// window.onload = function(){
//   // $("body").toggleClass('opacity');
//   $("#overlayer").delay(1000).fadeOut("slow");
//   overlay.toggle();
//   setTimeout(function() {
//     overlay.toggle();
//   }, 800);
// }

var filterDate = function() {
	var minDate = new Date();
	$( ".datapicker" ).datepicker({
		dateFormat: 'dd.mm.yy',
		minDate: minDate,
	}).val();
	$(".datapicker").attr('autocomplete', 'off');
	$('.cc-number').formatCardNumber();
};

var footerHeight = function() {
	function heightFooter(){
		var heightFoot = $('.footer').outerHeight();
		$('body').css({ 'padding-bottom': heightFoot});
	}
	heightFooter()
	$( window ).resize(function() {
		heightFooter()
	});
};

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

var checkInputHelp = function(){
	$('.blur-input').on("input", function() {
		if ($(this).val()!=''){
			$('.cancel-default').addClass('show-cancel');
		} else {
			$('.cancel-default').removeClass('show-cancel');
		}
	});
	$('.cancel-default').on('click', function() {
		$(this).removeClass('show-cancel');
		$('.blur-input').val('');
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

var filterOpen = function() {
	$('#filter-open').on('click', function() {
		$(this).next('.filter-hidden').toggleClass('is-active');
	});
	$(document).mouseup(function (e) {
		var container = $("#ui-datepicker-div");
		var container2 = $("#filter-button--wrapper");
		if (container.has(e.target).length === 1){
			
		}
		else if( container2.has(e.target).length === 0) {
			$('#filter-open').next('.filter-hidden').removeClass('is-active');
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

var cardDrop = function() {
	var dropContainer = $('.credit-card--drop');
	dropContainer.find('.head--credit-card').on('click', function() {
		$(this).next('.main--credit-card').slideToggle(400);
		$(this).toggleClass('is-active');
		$(this).next('.main--credit-card').find('.wrapper-show--animate').toggleClass('is-show');
	});
};

var countCode = function() {
	function startTimer(duration, display) {
		var timer = duration, minutes, seconds;
		setInterval(function () {
			minutes = parseInt(timer / 60, 10)
			seconds = parseInt(timer % 60, 10);
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;
			display.textContent = minutes + ":" + seconds;

			if (--timer < 0) {
				timer = duration;
			}
		}, 1000);
	}

	var fiveMinutes = 60 * 1,
	display = document.querySelector('#time');
	

	$('.resend-code').on('click', function(e){
		startTimer(fiveMinutes, display);
		e.preventDefault();
		$('.resend-time').removeClass('hidden');
	});
	
};
// $('.resend-code').on('click', function(){
// 	countCode()
// 	// e.preventDefault();
// 	$('.resend-time').removeClass('hidden');
// });

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

footerHeight();
checkInput();
checkInputHelp();
loadBalanse();
dropMenuUser();
filterOpen();
selectNew();
filterDate();
cardDrop();

// countCode();