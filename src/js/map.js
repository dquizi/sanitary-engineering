$(document).ready(function() {
  $(window).scroll(function () {
    if($(window).scrollTop() > 500) {
      if($(window).width() > 567) {
        $('.geo-map > script').attr('src', 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2478c4c01712ab54115e04bd4d7b4c54442ad4086e1b56603cf6551bab884934&amp;width=100%25&amp;height=666&amp;lang=ru_RU&amp;scroll=false');
      }
      else {
        $('.geo-map > script').attr('src', 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2478c4c01712ab54115e04bd4d7b4c54442ad4086e1b56603cf6551bab884934&amp;width=100%25&amp;height=666&amp;lang=ru_RU&amp;scroll=false');
      }
    }
  });
});