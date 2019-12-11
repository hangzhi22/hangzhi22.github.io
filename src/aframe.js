AFRAME.registerComponent('blue-box', {
    init: function () {
        // every click, we make our model grow in size :)
        this.el.addEventListener('click', function (ev, target) {
            console.log('blue clicked');
        });
    }
});

AFRAME.registerComponent('red-box', {
    init: function () {
        // every click, we make our model grow in size :)
        this.el.addEventListener('click', function (ev, target) {
            console.log('red clicked');
        });
    }
});