document.addEventListener("DOMContentLoaded", function() {
    const filterSelect = document.getElementById("filter");
    const customFilterInput = document.getElementById("custom-filter");
    const addFilterBtn = document.getElementById("add-filter-btn");
    const contactsList = document.getElementById("contacts-list");
  
    // Populate contacts list (mock data)
    const contacts = [
      { name: "John Doe", lastMessage: "Hello there!", awaiting: true },
      { name: "Jane ", lastMessage: "How are you?", unread: true },
      { name: "Alice Johnson", lastMessage: "See you later!", unread: false },
      { name: "John ", lastMessage: "Hello there!", awaiting: true },
      { name: "Jane Smith", lastMessage: "How are you?", unread: true },
      { name: "Alice ", lastMessage: "See you later!", needs_reply: true },
      { name: "John  Doe", lastMessage: "Hello there!", awaiting: true },
      { name: "Jan", lastMessage: "How are you?", unread: true },
      { name: "Alice Roye", lastMessage: "See you later!", needs_reply: true }
    ];
  
    contacts.forEach(contact => {
      const contactElement = document.createElement("div");
      contactElement.innerHTML = `
        <div class="contact">
          <span class="name">${contact.name}</span>
          <span class="last-message">${contact.lastMessage}</span>
          ${contact.unread ? '<span class="unread">Unread</span>':
           contact.awaiting ? '<span class="awaiting">Awaiting Reply</span>' : 
           contact.needs_reply ? '<span class="needs_reply">Needs To Reply</span>' : ''}
        </div>
      `;
      contactsList.appendChild(contactElement);
    });
  
    // Filter contacts
    filterSelect.addEventListener("change", function() {
      const filter = filterSelect.value;
      const allContacts = document.querySelectorAll(".contact");
      allContacts.forEach(contact => {
        switch(filter) {
          case "unread":
            contact.style.display = contact.querySelector(".unread") ? "block" : "none";
            break;
          case "awaiting":
            contact.style.display = contact.querySelector(".awaiting") ? "block" : "none";            
            break;
          case "needs_reply":
            contact.style.display = contact.querySelector(".needs_reply") ? "block" : "none";
            break;
          default:
            contact.style.display = "block";
        }
      });
    });   
  
    // Add custom filter (mock functionality)
    addFilterBtn.addEventListener("click", function() {
      const customFilter = customFilterInput.value.trim();
      const customFiltersList = document.getElementById("custom-filter");
      if (customFilter !== "") {
        // Add custom filter logic (mock functionality)
        console.log("Custom filter added:", customFilter);

        const listItem = document.createElement("li");
        listItem.textContent = customFilter;
        customFiltersList.appendChild(listItem);
        customFilterInput.value = "";
      }
    });
  });
  