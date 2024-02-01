document.addEventListener('DOMContentLoaded', function() {

    //on document load check the width
    changeMedia();

    //on resizing the window check the width
    window.addEventListener('resize', changeMedia);

    function changeMedia() {
        //get the window width
        var windowWidth = window.innerWidth;

        //if window width >= 768px add class 'media-right' instead of 'media-left'
        //in the first column in #features
        if (windowWidth >= 768) {

            setMediaRight();

        } else {

            setMediaLeft();
        }
    }

    function setMediaRight() {
        //get all '.media-left' in #features
        var media = document.querySelectorAll('#features .col-sm-4:first-child .media-left');

        //change class '.media-left' to '.media-right' in all elements
        for (let i = 0; i < media.length; i++) {
            media[i].className = 'media-right';
        }
    }

    function setMediaLeft() {
        //get all '.media-right' in #features
        var media = document.querySelectorAll('#features .col-sm-4:first-child .media-right');

        //change class '.media-right' to '.media-left' in all elements
        for (let i = 0; i < media.length; i++) {
            media[i].className = 'media-left';
        }
    }

});