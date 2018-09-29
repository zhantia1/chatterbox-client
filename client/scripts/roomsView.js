var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', function() {
      Rooms.add();
    });
  },

  render: _.template(`
      <option> <%roomname%> </option>
  `),
  
  renderRoom: function(room) {
    if (room.roomname) {
      var newRoom = RoomsView.render(room);
      RoomsView.$select.append(newRoom);
    }
  }
};

