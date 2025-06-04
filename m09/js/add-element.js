function addItem() {
      // Get the input 
      var itemText = document.getElementById("newGroceryItem").value;

      // Create a new grocery item
      var li = document.createElement("li");
      li.textContent = itemText;

      // Add a new grocery item to the list
      document.getElementById("todo").appendChild(li);

      // Clear the input box
      document.getElementById("newGroceryItem").value = "";
    }
