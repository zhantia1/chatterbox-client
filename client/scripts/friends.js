var Friends = {
  
  status: false,
  
  toggleStatus: function() {
    if (!Friends.status) {
      Friends.status = true;
    }
    Friends.status = false;
  }

};