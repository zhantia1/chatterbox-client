var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form

    event.preventDefault();
    
    var theText = FormView.$form.serialize().split('=')[1];
    var message = {
      username: App.username,
      text: theText,
      roomname: RoomsView.selectedRoom //"Lobby"
    };
    Parse.create(message);
    App.fetch();    
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};