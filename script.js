$(function() {

    const tableH = $('#input_height');
    const tableW = $('#input_width');
    const table = $('#pixel_canvas');
    const color = $('#colorPicker'); // paint color
    const colorBackground = $('#colorPickerBackground'); // table background color
    const removeGrid = $('.remove-btn');
    const clear = $('.clear-btn');
    const td = $('td');

    function makeGrid() { // creates a grid
        let tableHeight = tableH.val();
        let tableWidth = tableW.val();
        while ($('table tr').length > 0) { // deletes the previous grid
            $('tr:first').remove();
        }
        for (let row = 0; row < tableHeight; row++) { // creates rows
            table.append('<tr></tr>');
            for (let col = 0; col < tableWidth; col++) { // adds columns
                $('tr').last().append('<td></td>');
            }
        }
    };

    $("input[type='submit").on("click", function(evt) { // creates a grid
        evt.preventDefault();
        makeGrid();
    });

    colorBackground.on("change", function(evt) { // changes background color
        let tableBackgroundColor = colorBackground.val();
        $('td').css('background-color', tableBackgroundColor);
    });

    table.on('click', 'td', function(evt) { // paints in a chosen color
        let pickedColor = color.val();
        $(evt.target).css('background-color', pickedColor);
    });

    function clearGrid() { // erases all colors from the grid
        $('td').css('background-color', '');
    };

    clear.on('click', function(evt) { // calls clearGrid when clicking on the "clear" button
        clearGrid();
    });

    removeGrid.on('click', function(evt) { // removes the grid
        table.empty();
    });

    table.on('contextmenu', 'td', function(evt) { // erases color by right-clicking
        let pickedColor = color.val();
        evt.preventDefault();
        $(evt.target).css('background-color', '');
    });
});