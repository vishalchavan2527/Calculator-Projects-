const displayElement = document.querySelector('.display');
let  button = document.querySelector('.button_container');

document.addEventListener('DOMContentLoaded', () => {
    let currentDisplay = '';

    // Function to update the display
    function updateDisplay(value) {
        if (value === 'C') {
            currentDisplay = '';
        } else if (value === '=') {
            try {
                currentDisplay = eval(currentDisplay) || '';
            } catch (e) {
                currentDisplay = 'Error';
            }
        } else {
            currentDisplay += value;
        }
        displayElement.value = currentDisplay;
    }

    // Event delegation for button clicks
    button.addEventListener('click', (e) => {
        if (e.target.matches('.btn')) {
            const value = e.target.getAttribute('data-value');
            updateDisplay(value);
        }
    });
});
