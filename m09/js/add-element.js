function addItem() {
      'use strict';
      
      try {
      // Get the input 
      var itemText = document.getElementById("newGroceryItem").value;

      // Check for null or empty string
       if (!itemText.trim()) {
       throw new Error("Entry is empty or null");
       }

      // Create a new grocery item
      var li = document.createElement("li");
      li.textContent = itemText;

      // Add a new grocery item to the list
      document.getElementById("todo").appendChild(li);
      }
      catch (e) {          
       console.log(e);  // Log error to console
       return;          // Stop execution here if error occurredor break if inside a loop
      } 
            
    finally {
    // Show error 
    const messageArea = document.getElementById("message");
    if (itemText === "" || itemText === null || itemText === undefined) {
     messageArea.textContent = "If entry was empty, no item was added.";
    }

      // Clear the input box
      document.getElementById("newGroceryItem").value = "";
    }
}
