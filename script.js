setInterval(function() {
  var totalHeight, currentScroll, visibleHeight;

  if (document.documentElement.scrollTop)
    { currentScroll = document.documentElement.scrollTop; }
  else
    { currentScroll = document.body.scrollTop; }

  totalHeight = document.body.offsetHeight;
  visibleHeight = document.documentElement.clientHeight;

  $('#data').html(
    'total height: ' + totalHeight + '<br />' +
    'visibleHeight : ' + visibleHeight + '<br />' +
    'currentScroll:' + currentScroll);
  if (totalHeight <= currentScroll + visibleHeight )
  {
    $('#data').addClass('hilite');
  }
  else
  {
    $('#data').removeClass('hilite');
  }

}, 100);
