(function() {
    
    let letters = document.querySelectorAll('.box-content');
    let boxes = document.querySelectorAll('.box');
    let boxAnim = document.querySelector('.modal');

    // adding event listener to the boxes in order to show for 1.5 second
    // a box with the corresponding letter which appears coming from the bottom of the page and then desappears:
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', function() {
            boxAnim.innerHTML = letters[i].innerHTML;
            boxAnim.style.color = letters[i].style.color;
            boxAnim.style.backgroundColor = boxes[i].style.backgroundColor;
            boxAnim.classList.add('modal-animated');
            setTimeout(function() {
                boxAnim.classList.remove('modal-animated');
            }, 1500);
        });
    }    

    /**
     * setting a random color both for the letters and for the boxes background
     */
    function setColor() {
        for (let i = 0; i < letters.length; i++) {
            letters[i].style.color = createRandomColor();
            boxes[i].style.backgroundColor = createRandomColor();
        }
    }

    /**
     * creating a random color
     */
    function createRandomColor() {
        let color, r, g, b;
        r = Math.floor(Math.random()*(255 - 0));
        g = Math.floor(Math.random()*(255 - 0));
        b = Math.floor(Math.random()*(255 - 0));
        color = 'rgb(' + r + ',' + g + ',' + b + ')';
        return color;
    }

    setColor();
}());