$( document ).ready(function() {
    $( ".bill-btn" ).click(function() {
        $( ".bill-btn" ).toggleClass( "btn-yearly" );
        if ( $( this ).hasClass( "btn-yearly" ) ) {
            $( ".yearly" ).addClass( "bill-bolded" );
            $( ".monthly" ).removeClass( "bill-bolded" );
        }else{
            $( ".yearly" ).removeClass( "bill-bolded" );
            $( ".monthly" ).addClass( "bill-bolded" );
        }
    });

        // burger
    $('#nav-icon1').click(function(){
	    $(this).toggleClass('open');
    });
       
    $( "#nav-icon1" ).click(function() {
        $( "nav" ).stop().toggleClass('nav-menu-open');
    }); 
        // burger

    if ($(window).width() < 319) {
        $('.commercial-holder p').text('DESKTOP 300 x 250');
    }
});