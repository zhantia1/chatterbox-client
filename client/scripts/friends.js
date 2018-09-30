var Friends = {
  
  friends: {},
  
  toggleStatus: function() {
    // if (!Friends.status) {
    //   Friends.status = true;
    // }
    // Friends.status = false;
    for (var friend in Friends.friends) {
      for (var each of $('.chat')) {
        console.log($(each).find('a').text());
        if ($(each).find('a').text() === friend) {
          $(each).find('.text').addClass('friend');
        }
      }
    }
  }

};