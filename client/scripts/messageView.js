var MessageView = {

  render: _.template(`
      <div class="chat">
        <div> <a class="username"> <%- username %> </a> </div>
        <div value="<%- username %>" class='text'> <%- text %> </div>
        <div> <%- roomname %> </div>
      </div>
    `)

};