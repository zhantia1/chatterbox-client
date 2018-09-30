var Messages = {
  
  data: [],
  
  filterMessages: function(messages) {
    let filteredData = [];
    for (var message of messages) {
      if (message.username && message.roomname && message.text) {
        filteredData.push(message);
      }
    }
    return filteredData;
  },
  
  // sortMessagesByRooms: function(filteredMessages) {
  //   let messagesSortedByRooms = Rooms.existingRooms;
  //   for (var message of filteredMessages) {
  //     if (selectedRoom === message.roomname)
  //   }
  // }
  

};