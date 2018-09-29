var MessagesView = {

  $chats: $('#chats'),
  $send: $('#send'),

  initialize: function() {
    // should render current messages
  },

  render: function() {
  },
  
  renderMessage: function(message) {
    //console.log(message);
    if (message.username && message.text && message.roomname) {
      var theMessage = MessageView.render(message);
      MessagesView.$chats.append(theMessage);
    }
    $('.username').on('click', Friends.toggleStatus);
  }

};
