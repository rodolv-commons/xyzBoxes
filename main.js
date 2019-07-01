(function() {
    
    let letters = document.querySelectorAll('.box-content');
    let boxes = document.querySelectorAll('.box');

    // adding event listener to the boxes in order to show 
    // an alert window with the corresponding letter if the box is clicked
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', function() {
            alert(letters[i].innerHTML);
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