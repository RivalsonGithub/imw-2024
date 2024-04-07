window.addEventListener('scroll', function () {
    var paragraphBoxes = document.querySelectorAll('.paragraph-box');
    var paragraphBoxes2 = document.querySelectorAll('.paragraph-box2');
    var paragraphBoxes3 = document.querySelectorAll('.paragraph-box3');
    var scrollPosition = window.scrollY;

    paragraphBoxes.forEach(function (paragraphBox) {
      var boxPosition = paragraphBox.getBoundingClientRect().top;
      var boxHeight = paragraphBox.offsetHeight;

      if (boxPosition < window.innerHeight && boxPosition + boxHeight > 0) {

        var win_width = window.innerWidth / 2;
        var maxScrollPosition = document.body.scrollHeight - window.innerHeight;
        var calculatedPos = (scrollPosition / maxScrollPosition) * innerWidth / 1.1;
        var rotation = ((scrollPosition / document.body.scrollHeight) * 80 * 1) - 30;

        paragraphBox.style.left = calculatedPos - 200 + 'px';
        paragraphBox.style.transform = 'translateY(-50%) rotate(' + rotation + 'deg)';

      }
    });

    //paragraphBoxes2 
    paragraphBoxes2.forEach(function (paragraphBox2) {
      var boxPosition2 = paragraphBox2.getBoundingClientRect().top;
      var boxHeight2 = paragraphBox2.offsetHeight;

      if (boxPosition2 < window.innerHeight && boxPosition2 + boxHeight2 > 0) {
        var maxScrollPosition = document.body.scrollHeight - window.innerHeight;
        var calculatedPos = window.innerWidth - ((scrollPosition / maxScrollPosition) * window.innerWidth);

        var rotation = ((scrollPosition / document.body.scrollHeight) * 80 * -1) + 30;

        paragraphBox2.style.left = calculatedPos + 'px';
        paragraphBox2.style.transform = 'translateY(-50%) rotate(' + rotation + 'deg)';
      }
    });

    //paragraphBoxes3
    paragraphBoxes3.forEach(function (paragraphBox3) {
      var boxPosition3 = paragraphBox3.getBoundingClientRect().top;
      var boxHeight3 = paragraphBox3.offsetHeight;

      if (boxPosition3 < window.innerHeight && boxPosition3 + boxHeight3 > 0) {
        var win_width = window.innerWidth / 2;
        var maxScrollPosition = document.body.scrollHeight - window.innerHeight;
        var calculatedPos = (scrollPosition / maxScrollPosition) * innerWidth;
        var rotation3 = ((scrollPosition * 2 / document.body.scrollHeight) * 40 * 1) - 50;

        paragraphBox3.style.left = ((calculatedPos)) - 600 + 'px';
        paragraphBox3.style.transform = 'translateY(-50%) rotate(' + rotation3 + 'deg)';
      }

    });
  });

  // JavaScript to remove the blur effect after a delay
  window.onload = function () {
    setTimeout(function () {
      document.querySelector('.BG_container').classList.add('unblur-animation');
    }, 250); // Adjust the delay (in milliseconds) as needed
  };