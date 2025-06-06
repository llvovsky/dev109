    const form = document.getElementById('journalForm'); // gets the form element with from the HTML
    const entriesContainer = document.getElementById('entriesContainer'); // this is a container where journal entries will appear

    form.addEventListener('submit', function (e) {    // adds an event listener to the form
      e.preventDefault();

      const subject = document.getElementById('subject').value; //get the user's input
      const notes = document.getElementById('notes').value;   //get the user's input
      const date = new Date().toLocaleDateString(); // representing the current date and time

      const entryHTML = `  // this builds an HTML string
        <div class="entry">
          <h3>${subject}</h3>
          <small>${date}</small>
          <p>${notes}</p>
        </div>
      `;

      entriesContainer.innerHTML += entryHTML; // adds the new entry to the existing content

      form.reset(); // clear form
    });
