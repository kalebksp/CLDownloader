(function() {
  var link =  $('a[data-url]');
  if (link) {
    var url = link.attr('data-url')
    link.after(getElementStr(url));
  }

  $('div.sessionRow').find('a').each(function(i, el) {
    el = $(el);
    var link = el.attr('href')
    if (link.indexOf('sessionDetail') === 0) {
      $.ajax(link).done(function(result) {
        var url = $($(result).find('a[data-url]')[0]).attr('data-url');
        if (url) {
          el.after(getElementStr(url));
        }
      });
    }
  });

  function getElementStr(url) {
    return '<a href="' + url + '" download>Download Video</a>'
  }
}());
