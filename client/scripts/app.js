var App = {

  $spinner: $('.spinner img'),

  username: 'snowbirds',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    
    //setInterval(App.fetch, 10000);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request
      
      // with successful callback, we sent data to Message model
      Messages.data = data.results;
      
      // the sent data are filtered so that we only retrieve the ones with username, roomname, and text
      Messages.data = Messages.filterMessages(Messages.data);
      
      // sends filtered messages to Room model then updates rooms and populate the rooms
      Rooms.getRoomsAndSortMessages(Messages.data);
      console.log(Rooms.existingRooms);
                  
      // if it is the all selector, then directly render from the Messages.data
      if (RoomsView.selectedRoom === 'All') {
        MessagesView.render(Messages.data);
      // otherwise, render messages based on RoomsView.selectedRoom
      } else {
        MessagesView.render(Rooms.existingRooms[RoomsView.selectedRoom]);
      }
      
      // render all existing unique rooms into the select HTML element
      RoomsView.render(Rooms.existingRooms);
      
      Friends.toggleStatus();
            
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
  
};