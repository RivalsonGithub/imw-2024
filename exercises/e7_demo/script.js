console.log("hi");

$('body').css('background-color', 'white');

for(let i=0; i< 500; i++){
    let block = '<div style="width:100%; height: 20px;"> </div>';
    $('.foreground').append(block);
}
// for(let i=0; i< 500; i++){
//     let block = '<div style=width:100%; height: 20px;> a </div>';
//     $('.foreground').append(block);
// }



// for(let i=0; i< 500; i++){
//     let block = '<div style=width:100%; height: 20px;> a </div>';
//     $('.foreground').append(block);
// }

$('div').each(function(){
    $(this).on('mouseenter', function(){
        $(this).addClass('no-width');
    })
})

$('body').on('keypress', function(){
    console.log('key pressed!');
    $('div').removeClass('no-width');

})