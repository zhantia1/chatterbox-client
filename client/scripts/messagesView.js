var MessagesView = {

  $chats: $('#chats'),
  $send: $('#send'),
  $username: $('.username'),

  initialize: function() {
    MessagesView.$chats.on('click', 'a', function(event) {
      let friendName = $(this).text();
      Friends.friends[friendName] = true;
      $(this).parent().next().addClass('friend');
    });
  },

  render: function(messages) {
    $('.chat').remove();
    for (let message of messages) {
      MessagesView.renderMessageByRoom(message);
    }
  },
  
  renderMessageByRoom: function(message) {
    //console.log(message);
    var theMessage = MessageView.render(message);
    MessagesView.$chats.append(theMessage);
  }

};
