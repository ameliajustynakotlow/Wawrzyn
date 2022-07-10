var isMenuOpen = false;

$(document).ready(function() {
  $(window).on('scroll', function() {
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition >= 78) {
      $('#main-nav').removeClass('bg-none').addClass('bg-primary');
    } else {
      $('#main-nav').removeClass('bg-primary').addClass('bg-none');
    }
  });

  $('#toggle-menu').on('click', function() {
  	toggleMobileMenu()
  });

  $('.mobile-link').on('click', function() {
  	closeMobileMenu();
  	isMenuOpen = false;
  });
});

function toggleMobileMenu() {
	if (isMenuOpen) {
		closeMobileMenu();
	} else {
		openMobileMenu();
	}

	isMenuOpen = !isMenuOpen;	
}

function openMobileMenu() {
  $('#mobile-nav').css('width', '100%');
}

function closeMobileMenu() {
  $('#mobile-nav').css('width', '0');
}