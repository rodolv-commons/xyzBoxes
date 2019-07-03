(function() {
    
    let letters = document.querySelectorAll('.box-content');
    let boxes = document.querySelectorAll('.box');
    let boxAnim = document.querySelector('.box-animation');

    // adding event listener to the boxes in order to show 
    // a box with the corresponding letter which appears coming from the bottom of the page:
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', function() {
            boxAnim.innerHTML = letters[i].innerHTML;
            boxAnim.style.color = letters[i].style.color;
            boxAnim.style.backgroundColor = boxes[i].style.backgroundColor;
            boxAnim.classList.add('box-animation-transition');
        });
    }

    // adding event listener to the boxAnim in order to make the box desappear if clicked 
    boxAnim.addEventListener('click', function() {
        boxAnim.classList.remove('box-animation-transition');
    })
    

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