(function() {
    
    let letters = document.querySelectorAll('.box-content');
    let boxes = document.querySelectorAll('.box');

    function setColor() {
        for (let i = 0; i < letters.length; i++) {
            letters[i].style.color = createRandomColor();
            boxes[i].style.backgroundColor = createRandomColor();
        }
    }

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