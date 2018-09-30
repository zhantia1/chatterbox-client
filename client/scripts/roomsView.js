var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  selectedRoom: 'All',

  initialize: function() {
    RoomsView.$button.on('click', function() {
      Rooms.add();
    });
    RoomsView.$select.on('change', function() {
      RoomsView.selectedRoom = $( '#rooms select option:selected' ).val();
      App.fetch();
    });
  },

  render: function(rooms) {
    $('.canBeDeleted').remove();
    for (let room in rooms) {
      RoomsView.renderRoom(room);
    }
  },
  
  renderRoom: function(room) {
    let roomObject = {roomname: room};
    let theRoom = RoomView.render(roomObject);
    RoomsView.$select.append(theRoom);
  }
  
  
};

