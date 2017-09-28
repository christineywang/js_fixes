
/* If last string in URL matches this, do something */
var url = window.location.href;

if (getLastPart(url) === "articles") {
    // Do something
}

function getLastPart(url) {
    var parts = url.split("/");
    return (url.lastIndexOf('/') !== url.length - 1 ?
        parts[parts.length - 1] :
        parts[parts.length - 2]);
}

//Alternately, you can use regex to validate the string

function isAction (url) {
    return /\/articles\/$/.test(url)
}



/* Fix sticky header */
var content = document.querySelector('#main-content');
var header = document.querySelector('#placeholder');

if (content && header) {
    window.addEventListener('scroll', function fixStickyHeader() {
        if (header.style.display === 'block') {
            content.style.marginTop = '35px';
        } else {
            content.style.marginTop = '0';
        }
    })
}


/* If URL does not contain this string, do something */
jQuery(function() {
    $('.imagecontainer').on('click', function() {
        setTimeout(function() {
            $(document).ready(function() {
                if (document.location.href.indexOf('ford-gt') === -1) {
                    // Do something
                }
            });
        }, 250)
    })
});


/* Add class to first two li elements on click */
jQuery(function(){
  $(".imagecontainer").on('click', function() {
      setTimeout(function(){
          $('.modal .slideshow .slides .slide').slice(0,2).addClass('ggnoads')
      }, 250)
  })
});


/* If click into main gallery, do something; when click out, revert changes */
jQuery(function() {
    // If click into gallery, fix the main content
    $('.gallery.gallery_3by2').on('click', function() {
        setTimeout(function() {
            $(document).ready(function() {
                if ($('.simsd-overlay').css('display') == 'block') {
                    $('.acom-page-main-content').css('position', 'fixed');
                    $('.simsd-overlay').css('height', '100%');
                }
            });
        }, 250);
        // Undo property values if click out of gallery
        setTimeout(function() {
            $('.simsd-overlay, .simsd-container').click(function() {
                $('.acom-page-main-content').css('position', 'relative');
            });
        }, 300);

    })
});

/* Alternate to the above */
$(document).ready(function() {
    // If click into gallery, fix the main content
    $('.gallery.gallery_3by2').on('click', function() {
        if ($('.simsd-overlay').css('display') == 'block') {
            $('.acom-page-main-content').css('position', 'fixed');
            $('.simsd-overlay').css('height', '100%');
        }
        // Undo property values if click out of gallery
        $('.simsd-overlay, .simsd-container').click(function() {
            $('.acom-page-main-content').css('position', 'relative');
        });
    })
});

$(document).ready(function() {
    // If click into gallery, fix the main content
    $('.gallery.gallery_3by2').on('click', function() {
        setTimeout(function () {
            if ($('.simsd-overlay').css('display') == 'block') {
                $('.acom-page-main-content').css('position', 'fixed');
                $('.simsd-overlay').css('height', '100%');
            }
            // Undo property values if click out of gallery
            $('.simsd-overlay, .simsd-container').click(function() {
                $('.acom-page-main-content').css('position', 'relative');
            });
        }, 10);
    })
});



/* Testing the click event */
$('#someButton').click(function() {
  console.log('#someButton was clicked');
  // do something
});


/* Adding a class to an element */
var noAds = document.querySelector('.existing-class');
noAds.classList.add('new-class');



/* This solution from one of our solutions engineers finds the image that is in the viewport for slideshow galleries and adds an active class */
$(document).ready(function() {
 //add active class to current image
 var currentImgTitle = $('.gallery_title h3 a')[0].innerText;
 $(".images img").filter("[title='" + currentImgTitle + "']").addClass('active');
   //remove and add active class to next image
   $('div.next').on('click', function() {
     var currentImgTitle = $('.gallery_title h3 a')[0].innerText;
     var currentIndex = $(".images img").filter("[title='" + currentImgTitle + "']").index();
     var nextIndex = currentIndex + 1;
     $('.images').find('img').removeClass('active').eq(nextIndex).addClass('active');
   });
 //remove and add active class to previous image
   $('div.prev').on('click', function() {
     var currentImgTitle = $('.gallery_title h3 a')[0].innerText;
     var currentIndex = $(".images img").filter("[title='" + currentImgTitle + "']").index();
     var prevIndex = currentIndex - 1;
     $('.images').find('img').removeClass('active').eq(prevIndex).addClass('active');
   });
});
