 const form = document.getElementById('journalForm');
    const entriesContainer = document.getElementById('entriesContainer');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const subject = document.getElementById('subject').value;
      const notes = document.getElementById('notes').value;
      const date = new Date().toLocaleDateString();

      const entryHTML = `
        <div class="entry">
          <h3>${subject}</h3>
          <small>${date}</small>
          <p>${notes}</p>
        </div>
      `;

      entriesContainer.innerHTML += entryHTML;

      form.reset(); // clear form
    });
