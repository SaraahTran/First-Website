const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};


document.addEventListener('touchstart', this.touchstart);
document.addEventListener('touchmove', this.touchmove);

function touchstart(e) {
    e.preventDefault()
}

function touchmove(e) {
    e.preventDefault()
}


//Image Fit
    function set_body_height() { // set body height = window height
        $('body').height($(window).height());
    }
    $(document).ready(function() {
        $(window).bind('resize', set_body_height);
        set_body_height();
    });


    //Fit Text

    jQuery("h1").fitText(0.38);


    $.fn.fixWidth = function () {
      $(this).each(function () {
          var el = $(this);
          // This function gets the length of some text
          // by adding a span to the container then getting it's length.
          var getLength = function (txt) {
              var span = new $("<span />");
              if (txt == ' ')
                  span.html('&nbsp;');
              else
                  span.text(txt);
              el.append(span);
              var len = span.width();
              span.remove();
              return len;
          };
          var words = el.text().split(' ');
          var lengthOfSpace = getLength(' ');
          var lengthOfLine = 0;
          var maxElementWidth = el.width();
          var maxLineLengthSoFar = 0;
          for (var i = 0; i < words.length; i++) {
              // Duplicate spaces will create empty entries.
              if (words[i] == '')
                  continue;
              // Get the length of the current word
              var curWord = getLength(words[i]);
              // Determine if adding this word to the current line will make it break
              if ((lengthOfLine + (i == 0 ? 0 : lengthOfSpace) + curWord) > maxElementWidth) {
                  // If it will, see if the line we've built is the longest so far
                  if (lengthOfLine > maxLineLengthSoFar) {
                      maxLineLengthSoFar = lengthOfLine;
                      lengthOfLine = 0;
                  }
              }
              else // No break yet, keep building the line
                  lengthOfLine += (i == 0 ? 0 : lengthOfSpace) + curWord;
          }
          // If there are no line breaks maxLineLengthSoFar will be 0 still. 
          // In this case we don't actually need to set the width as the container 
          // will already be as small as possible.
          if (maxLineLengthSoFar != 0)
              el.css({ width: maxLineLengthSoFar + "px" });
      });
  };
  
  $(function () {
      $(".fixed").fixWidth();
  });



  jQuery("h1").fitText(0.38);
