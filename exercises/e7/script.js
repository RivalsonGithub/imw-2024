console.log("hi");

$('body').css('background-color', 'white');

for (let i = 0; i < 500; i++) {
    let block = '<div style="width:100%; height: 20px;"> </div>';
    $('.foreground').append(block);
}
// for(let i=0; i< 500; i++){
//     let block = '<div style=width:100%; height: 20px;> a </div>';
//     $('.foreground').append(block);
// }

$('div').each(function () {
    $(this).on('mouseenter', function () {
        $(this).addClass('no-width');
    })
})

$('body').on('keypress', function () {
    console.log('key pressed!');
    $('div').removeClass('no-width');

})

$("#clickme").on("dblclick", function () {
    $("#img").slideToggle("slow", function () {
        // Animation complete.
    });

    $("#img2").slideToggle("slow", function () {
        // Animation complete.
    });
});

$("#hover_div").hover(function () {
    $("#img3").fadeOut(100);
    $("#img3").fadeIn(500);

    $("#img4").fadeToggle("slow", function () {
        // Animation complete.
        console.log("#img4");
    });
});



