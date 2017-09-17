
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
