var RoomView = {
  
  render: _.template(`
    <option class="canBeDeleted" value="<%- roomname %>"> <%- roomname %> </option>
  `)
  
};