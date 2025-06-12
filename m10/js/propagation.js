    const drawingArea = document.getElementById('drawingArea');
    const clearButton = document.getElementById('clearButton');

    drawingArea.addEventListener('click', function (e) {
        // prevent drawing when the button itself is clicked
        if (e.target === clearButton) return;

        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        drawingArea.appendChild(dot);
    });

    clearButton.addEventListener('click', function () {
        // remove all dots
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => dot.remove());
    });
