// Connect lightcase to anchor tags
$('a[data-rel^=lightcase]').lightcase();

/**
 * 
 *  Building My Own Realtime Search Program
 * 
 */

 // Collect 'alt' texts in a array
let altCollect = [];
    // By 'each'
$('.photos').each(function(){
    let $altTexts = $(this).children().children().attr('alt').toLowerCase();
    altCollect.push($altTexts);
});

$('.searchBox').keyup(function(){
    // Collect user input live
    let $search = $(this).val().toLowerCase();
    // Search through the 'alt' collection with 'for loop'
    for (let i = 0; i < altCollect.length; i++) {
        if (altCollect[i].indexOf($search) < 0) {
            $('.photos').eq(i).hide();
        } else {
            $('.photos').eq(i).show();
        }
    }
});

