$(function() {



    $('nav a').click(function() {
      $('nav a').removeClass('green');
      $(this).addClass('green');
    });


    $('.check-out .btn').click(function(){
        $('.check-out').addClass('hidden');
        $('.apologies').removeClass('hidden');

    });
});
