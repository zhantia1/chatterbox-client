var Friends = {
  
  friends: {},
  
  toggleStatus: function() {
    // if (!Friends.status) {
    //   Friends.status = true;
    // }
    // Friends.status = false;
    for (var key in Friends.friends) {
      for (var each of $('.chat')) {
        if ($(each).find('a') === key) {
          $(each).find('.text').addClass('friend');
        }
      }
    }
  }

};