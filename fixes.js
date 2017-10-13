
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


/* Follow the user behavior. If a script doesn't work, make sure you are following the user path to get there--which may be a click and then another click */
$(document).ready(function() {
    document.querySelector(".btn.btn-view-large").addEventListener("click", function() {
        setTimeout(function() {
            document.querySelector(".galleria-image-nav-right").addEventListener("click", function() {
              // Do something
            });
        }, 250);
    });
});




// Reference: https://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
/* Check if an element is visible on the page. If so, destroy our services. */
function Utils() {}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function(element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();
var isElementInView = Utils.isElementInView($('.Billboard-ad'), false);
if (isElementInView) {
    top.GUMGUM.Bean.fire(top.GUMGUM.container, 'destroy');
}

/* On scroll, we assume the element is off the page. Load our code but run this function only once. */
$(window).one('scroll', function() {
    var a, b = "b65e2fcd",
        c = "https://js.gumgum.com/services.js",
        d = top,
        e = "script",
        f = d.document,
        g = f.getElementsByTagName(e)[0],
        h = d.XMLHttpRequest || d.XDomainRequest,
        i = function(a) {
            var b = f.createElement(e);
            b.src = a, b.async = !0, g.parentNode.insertBefore(b, g)
        },
        j = function() {
            d.clearTimeout(a)
        };
    return d.ggv2id = b, h ? (h = new h, h.open("GET", c), h.onload = function() {
        j();
        try {
            (d.execScript || function(a) {
                d.eval.call(d, a)
            })(h.responseText)
        } catch (a) {}
    }, a = d.setTimeout(function() {
        h.abort()
    }, 3e3), void h.send()) : i(c)
});



/* From one of our solutions engineers */
/* Adjust IS when image has variable overlay text */
var marginCalc = function(){
  var overlayTxt = parseInt($('.gallery__utility').height());
  var divHeight = parseInt($('.gallery__main').height());

 // need load event to get image height
  var slideImg =
    $('.slides__image.active .slides__image-inner img').bind('load', function() {
    parseInt($(this).height());
  });
  // note: no needs parselnt?
  var imgHeight = parseInt(slideImg.height());

  // divided by 2 to get margin bottom only
  var extraHeight = (divHeight - imgHeight) /2
  var marginTop = -(overlayTxt - extraHeight)

  console.log(overlayTxt +"-"+ extraHeight + marginTop)
  return marginTop;
};
if(marginCalc() < 51){

  var ua = navigator.userAgent;

  if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
      //$('.gallery__slides-wrapper').addClass("ggnoads");
        win.ggevents = win.ggevents || []; // MUST BE win, is an alias
        win.ggevents.push({
             'inimage.load': function (data) {

               $('span[id^="GGADad_ii_"]').css('margin-top', marginCalc() + "px");
             }

         });
         $(".gallery.module").on('click',function(){

           if ($(".gallery.module").hasClass("gallery--ui-tap")) {
             $('span[id^="GGADad_ii_"]').css('margin-top',"0");
           }else {
             $('span[id^="GGADad_ii_"]').css('margin-top', marginCalc() + "px");
           }
         });
    }
}
