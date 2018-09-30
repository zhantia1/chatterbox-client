var Rooms = {
  
  existingRooms: {},
  
  add: function(room) {
    RoomsView.renderRoom(room);
  },
  
  
  getRoomsAndSortMessages: function(messages) {
    for (var message of messages) {
      if (!Rooms.existingRooms[message.roomname]) {
        Rooms.existingRooms[message.roomname] = [message];
      } else {
        Rooms.existingRooms[message.roomname].push(message);
      }
    }
  }
  
  // existingRooms {
  //   All:  
  //   Lobby: [{username, text, roomname}, {}, {}],
  //   default: 
  
  
  // var selected = get the value from the selector messagesSortedByRooms[Lobby]
  // call MessagesView.render(selected);
  
};

