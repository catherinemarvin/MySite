// This code is taken from here: http://stackoverflow.com/a/12530641
// Bootstrap's scrollspy is terribly broken and I can't figure out why.

$(document).ready(function () {
  var lastId, topMenu = $("#navbar"), 
      topMenuHeight = topMenu.outerHeight() + 150,
      menuItems = topMenu.find("a"),
      scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
          return item;
        }
      });

  menuItems.click(function(e) {
    e.preventDefault();
    var offset = 10;

    $($(this).attr("href"))[0].scrollIntoView();
    scrollBy(0, -offset);
  });

  $(window).scroll(function () {
    var fromTop = $(this).scrollTop();
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop) {
        return this;
      }
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      menuItems.parent().removeClass("active").end().filter("[href=#" + id + "]").parent().addClass("active");
    }
  });
});
