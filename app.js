

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
