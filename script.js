$(document).ready(function() {
    var container = $('#grid-container');
    for (var i = 0; i < 16; i++) {
        var box = $('<div class="grid-box"></div>');
        container.append(box);
        if ((i + 1) % 4 === 0) {
            container.append('<br>');
        }
    }
    $('.grid-box').on('click', function() {
        $(this).toggleClass('ChangeColor');
    });
});