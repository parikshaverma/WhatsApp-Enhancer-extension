// Include WhatsApp Web Wrapper library
var script = document.createElement('script');
script.src = chrome.runtime.getURL('wapi.js');
document.head.appendChild(script);

// Filter chats based on unread status
function filterChatsByUnread(chats) {
  return chats.filter(chat => chat.unread);
}

// Fetch all chats and filter them
window.onload = function() {
  window.WAPI.getAllChats().then(function(chats) {
      var unreadChats = filterChatsByUnread(chats);
      console.log('Unread chats:', unreadChats);
  });
};

// content.js

// Handle filter selection from UI
function handleFilterSelection(filter) {
  window.WAPI.getAllChats().then(function(chats) {
      var filteredChats;
      if (filter === 'unread') {
          filteredChats = filterChatsByUnread(chats);
      }
      // Handle other filter options
      // ...
      
      console.log('Filtered chats:', filteredChats);
  });
}

// Example: Handle filter selection from UI dropdown
var filterDropdown = document.getElementById('filter-dropdown');
filterDropdown.addEventListener('change', function() {
  var selectedFilter = this.value;
  handleFilterSelection(selectedFilter);
});

