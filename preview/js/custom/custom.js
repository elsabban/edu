/*========================================== MASTER JAVASCRIPT ===================================================================

	Project     :	AURA TEMPLATES
	Version     :	1.0
	Last Change : 	18/05/2017
	Primary Use :   AURA TEMPLATES

=================================================================================================================================*/
$(document).on('ready', function() {
    "use strict"; //Start of Use Strict
    var menu_bar = $('.navbar-default');
    var menu_li = $('.navbar-default li a');
    var collapse = $('.navbar-collapse');
    var navbar_header = $('.navbar_header button');
    var top_nav = $('#top-nav');
    var top_menu = $('.header-menu-1');

	// //MENU-1 SCROLL
	// if (top_menu.length) {
    // var x = $(".header-menu-1").offset().top;
    // var topx = (x - $(window).scrollTop());
    // if (topx < 68) {
    //     menu_bar.fadeIn().addClass('fixed-header').css({
    //         "background-color": "#00afe9",
    //         "color": "#ffffff",
    //         "box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"
    //     });
    //     menu_li.css({
    //         "color": "#ffffff"
    //     });      
    // } else {
    //     menu_bar.removeClass('fixed-header').css({
    //         "background-color": "transparent",
    //         "color": "#ffffff",
    //         "box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"
    //     });
    //     menu_li.css({
    //         "color": "#ffffff"
    //     });        
    // }

    // $(document).on('scroll', function() {
    //     var y = $(window).scrollTop();

    //     if (y >= 230) {
    //         menu_bar.fadeIn().addClass('fixed-header').css({
    //             "background-color": "#00afe9",
    //             "color": "#ffffff",
    //             "box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"
    //         });
    //         menu_li.css({
    //             "color": "#ffffff"
    //         });          
            
    //     } else {
    //         menu_bar.removeClass('fixed-header').css({
    //             "background-color": "transparent",
    //             "color": "#ffffff",
    //             "box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"
    //         });
    //         menu_li.css({
    //             "color": "#ffffff"
    //         });            
    //     }

    //     var scrollPos = $(document).scrollTop() + 80;
    //     $('#menu_1 a').each(function() {
    //         var currLink = $(this);
    //         var refElement = $(currLink.attr("href"));
    //         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
    //             $('#menu_1 ul li a').removeClass("active");
    //             currLink.addClass("active");
    //         } else {
    //             currLink.removeClass("active");
    //         }
    //     });
    // });

	// }
	// //MENU-2 SCROLL
    // if (top_nav.length) {
    //     var x = top_nav.offset().top;
    //     if (x > 50) {
    //         top_nav.fadeIn();
    //     } else {
    //         top_nav.fadeOut();
    //     }
    //     $(document).on('scroll', function() {
    //         var y = $(this).scrollTop();
    //         if (y > 50) {
    //             top_nav.fadeIn();
    //         } else {
    //             top_nav.fadeOut();
    //         }
    //     });
    // }


    //RESPONSIVE MENU SHOW AND HIDE FUNCTION
    if (menu_li.length) {
        menu_li.on("click", function(event) {
            collapse.slideToggle();
        });
        $('.navbar-default .navbar-toggle').on("click", function(e) {
            collapse.slideToggle();
        });
    }

    //MENU BAR SMOOTH SCROLLING FUNCTION
    var menu_list = $('.navbar-nav');
    if (menu_list.length) {
        menu_list.on("click", ".pagescroll", function(event) {
            event.preventDefault();
            var hash_tag = $(this).attr('href');
            if ($(hash_tag).length) {
                $('html, body').animate({
                    scrollTop: $(hash_tag).offset().top - 50
                }, 2000);
            }
            return false;
        });
    }
	
	//MENU BAR SMOOTH SCROLLING FUNCTION
    var menu_list = $('.navbar-nav');
    if (menu_list.length) {
        menu_list.on("click", ".pagescroll-1", function(event) {
            event.preventDefault();
            var hash_tag = $(this).attr('href');
            if ($(hash_tag).length) {
                $('html, body').animate({
                    scrollTop: $(hash_tag).offset().top - 85
                }, 2000);
            }
            return false;
        });
    }
	
	
	//MENU-1 SCROLL
	 var page = $('.pagescroll-1');
	 if (page.length) {
		$('.pagescroll-1').on('click', function(e) {
			var y = $(window).scrollTop();
			var t = "";
			if (y <= 230) {
				t = 140;
			} else {
				t = 70;
			}
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - t
			}, 2000);
			return false;
		});
	 }
    //COUNTER
    var counter = $('.count');
    if (counter.length) {
        counter.counterUp({
            delay: 10,
            time: 1000
        });
    }

    //GALLERY POPUP
    var gallery = $('.popup-gallery');
    if (gallery.length) {
        console.log('test')
        // $('.popup-gallery').magnificPopup({
        //     delegate: 'a',
        //     type: 'image',
        //     tLoading: 'Loading image #%curr%...',
        //     mainClass: 'mfp-img-mobile',
        //     gallery: {
        //         enabled: true,
        //         navigateByImgClick: true,
        //         preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        //     },
        //     image: {
        //         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        //         titleSrc: function(item) {
        //             return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        //         }
        //     }
        // });
        $('.openVideo').magnificPopup({
            type: 'inline',
            // gallery: {
            //             enabled: true,
            //             navigateByImgClick: true,
            //             preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            //         },
            callbacks: {
              open: function() {
                $('html').css('margin-right', 0);
                // Play video on open:
                $(this.content).find('video')[0].play();
                },
              close: function() {
                // Reset video on close:
                $(this.content).find('video')[0].load();
                }
              }
            });
    }

   

    //CONTACT FORM VALIDATION	
    if ($('.contact-form-1').length) {
        $('.contact-form-1').each(function() {
            $(this).validate({
                errorClass: 'error',
                submitHandler: function(form) {
                    $.ajax({
                        type: "POST",
                        url: "mail/mail.php",
                        data: $(form).serialize(),
                        success: function(data) {
                            if (data) {
                                $('.sucessMessage').html('Mail Sent Successfully !');
                                $('.sucessMessage').show();
                                $('.sucessMessage').delay(3000).fadeOut();
                            } else {
                                $('.failMessage').html(data);
                                $('.failMessage').show();
                                $('.failMessage').delay(3000).fadeOut();
                            }
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            $('.failMessage').html(textStatus);
                            $('.failMessage').show();
                            $('.failMessage').delay(3000).fadeOut();
                        }
                    });
                }
            });
        });
    }
    return false;
    // End of use strict
});

{/* <nav style="z-index: 1;" class="topbar navbar navbar-default clearfix">
					<div class="container-fluid">
						<div class="">
							<div class="logo-image">
								<!-- <a href="#"><img src="images/aura/150x50.png" alt="150x50" /></a> -->
								<h3 style="color: white;">Education</h3>

							</div>
							<div class="navigation1">
								<div class="navbar-header">
									<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
									<span class="sr-only">Toggle navigation</span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									</button>					
								</div>
								<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
									<ul class="nav navbar-nav" >
										<li class="menu">
											<a href="#home" class="pagescroll-1">
											Home
											</a>
										</li>
										<!-- <li class="menu">
											<a href="#services" class="pagescroll-1">
											Services
											</a>
										</li> -->
										<li class="menu">
											<a href="#gallery" class="pagescroll-1">
											Gallery
											</a>
										</li>
										<!-- <li class="menu">
											<a href="#pricing" class="pagescroll-1">
											Pricing
											</a>
										</li>
										<li class="menu">
											<a href="#contact" class="pagescroll-1">
											Contact
											</a>
										</li> -->
									</ul>
								</div>
							</div>
							<!-- <div class="navbar-right icon-header nav">
								<ul class="content-ul header-icon text-center">
									<li>
										<a href="#"><img src="images/aura/32x32x1.png" alt="32x32x1" /></a>
									</li>
									<li>
										<a href="#"><img src="images/aura/32x32x2.png" alt="32x32x2" /></a>
									</li>
									<li>
										<a href="#"><img src="images/aura/32x32x3.png" alt="32x32x3" /></a>
									</li>
									<li>
										<a href="#"><img src="images/aura/32x32x4.png" alt="32x32x4" /></a>
									</li>
								</ul>
							</div> -->
						</div>
						<!-- /.navbar-collapse -->
					</div>
				</nav> */}